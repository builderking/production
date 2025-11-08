import React, { useEffect, useState, useRef } from 'react';
import { MessageSquare, X } from 'lucide-react';
import type { Props } from '@theme/Root';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SidebarIcons from '@site/src/components/SidebarIcons';

export default function Root({ children }: Props): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const configuredSessionUrl = (siteConfig?.customFields as any)?.chatkitSessionUrl as string | undefined;
  const workflowId = (siteConfig?.customFields as any)?.chatkitWorkflowId as string | undefined;
  const domainPk = (siteConfig?.customFields as any)?.chatkitDomainPublicKey as string | undefined;
  const sessionUrl = configuredSessionUrl || '/api/chatkit/session';
  const [isOpen, setIsOpen] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatElementRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen) return;
    if (chatElementRef.current) {
      // Element already exists, just ensure it's in the container
      if (chatContainerRef.current && !chatContainerRef.current.contains(chatElementRef.current)) {
        chatContainerRef.current.appendChild(chatElementRef.current);
      }
      return;
    }

    async function setupChatKit() {
      try {
        setErrorText(null);
        
        // Wait for the web component to be defined
        if (typeof customElements?.whenDefined === 'function') {
          try {
            await (customElements as any).whenDefined('openai-chatkit');
          } catch (e) {
            await new Promise((r) => setTimeout(r, 1000));
            await (customElements as any).whenDefined('openai-chatkit');
          }
        }

        // Create the ChatKit element inside our container
        if (chatContainerRef.current && !chatElementRef.current) {
          const chatElement = document.createElement('openai-chatkit');
          if (workflowId) chatElement.setAttribute('data-workflow-id', workflowId);
          if (domainPk) chatElement.setAttribute('data-domain-public-key', domainPk);
          chatElement.style.display = 'block';
          chatElement.style.width = '100%';
          chatElement.style.height = '100%';
          chatContainerRef.current.appendChild(chatElement);
          chatElementRef.current = chatElement;
          

          // Small delay to ensure element is mounted
          await new Promise((r) => setTimeout(r, 100));

          // Configure the component
          const tryFetchClientSecret = async (): Promise<string> => {
            const candidates: string[] = [];
            // 1) Use provided sessionUrl as-is (relative or absolute)
            candidates.push(sessionUrl);
            // 2) Same-origin absolute URL (helps if code accidentally treats it as relative)
            try {
              const absolute = new URL(sessionUrl, window.location.origin).toString();
              if (!candidates.includes(absolute)) candidates.push(absolute);
            } catch {}
            // 3) If the configured session url is absolute and different, try it as a fallback
            if (configuredSessionUrl && /^(http|https):\/\//.test(configuredSessionUrl)) {
              if (!candidates.includes(configuredSessionUrl)) candidates.push(configuredSessionUrl);
            }

            let lastError: any = null;
            for (const url of candidates) {
              try {
                const res = await fetch(url, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ user: 'web-docs' }),
                });
                if (!res.ok) {
                  const text = await res.text().catch(() => '');
                  lastError = new Error(`Session failed ${res.status}: ${text}`);
                  continue;
                }
                const json = await res.json();
                if (json && json.client_secret) return json.client_secret as string;
                lastError = new Error('No client_secret in response');
              } catch (e) {
                lastError = e;
              }
            }
            throw lastError || new Error('Unable to obtain client_secret');
          };

          (chatElement as any).setOptions({
            api: {
              async getClientSecret() {
                try {
                  const clientSecret = await tryFetchClientSecret();
                  return clientSecret;
                } catch (e: any) {
                  setErrorText(
                    typeof e?.message === 'string' ? e.message : 'Failed to get client_secret'
                  );
                  throw e;
                }
              },
            },
          });
          
        }
      } catch (err) {
        setErrorText(typeof (err as any)?.message === 'string' ? (err as any).message : 'Initialization failed');
      }
    }

    if (typeof window !== 'undefined') {
      setupChatKit();
    }
  }, [isOpen, sessionUrl, workflowId, domainPk]);

  // Layout constants so spacing stays consistent between the launcher and widget
  const launcherBottomPx = 20; // distance from viewport bottom for the launcher
  const launcherHeightPx = 40; // launcher height
  const gapPx = 16; // desired space between launcher and widget when open
  const widgetBottomPx = launcherBottomPx + launcherHeightPx + gapPx;

  return (
    <>
      <SidebarIcons />
      {children}
      
      {/* Floating Chat Launcher */}
      <div
        id="chatkit-bubble"
        title={isOpen ? 'Close chat' : 'Ask Ondi AI'}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: `${launcherBottomPx}px`,
          right: '20px',
          height: `${launcherHeightPx}px`,
          width: isOpen ? `${launcherHeightPx}px` : 'auto',
          padding: isOpen ? '0' : '0 10px',
          borderRadius: '10px',
          backgroundColor: '#000',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
          zIndex: 10000,
          fontSize: '14px',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {isOpen ? (
          <X size={18} aria-hidden="true" />
        ) : (
          <>
            <MessageSquare size={18} aria-hidden="true" />
            <span style={{ fontWeight: 600 }}>Ask Ondi AI</span>
          </>
        )}
      </div>

      {/* Chat Window - Always mounted, visibility controlled */}
      <div
        id="chatkit-widget"
        ref={chatContainerRef}
        style={{
          position: 'fixed',
          bottom: `${widgetBottomPx}px`,
          right: '20px',
          width: '480px',
          height: '75vh',
          maxWidth: '90vw',
          maxHeight: '90vh',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          zIndex: 9999,
          overflow: 'hidden',
          backgroundColor: 'white',
          display: isOpen ? 'block' : 'none',
        }}
      >
        {errorText ? (
          <div style={{
            width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(180deg, #fff, #fafafa)', color: '#b91c1c', padding: 16,
            textAlign: 'center', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
          }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>Chat failed to initialize</div>
              <div style={{ fontSize: 12, color: '#991b1b' }}>{errorText}</div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}


