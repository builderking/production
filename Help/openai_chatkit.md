# OpenAI ChatKit Integration Guide

A complete guide to integrating OpenAI ChatKit as a floating chat bubble in your Docusaurus (or any React) application.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [What You Need from OpenAI](#what-you-need-from-openai)
4. [Architecture](#architecture)
5. [Step-by-Step Implementation](#step-by-step-implementation)
6. [Troubleshooting](#troubleshooting)
7. [Deployment](#deployment)

---

## Overview

ChatKit is OpenAI's embeddable chat interface that connects to your custom AI agent workflow. This guide shows you how to:

- Create a floating chat bubble on your website
- Load ChatKit in a slide-out panel when clicked
- Securely manage API keys using Firebase Functions
- Deploy to production

**End Result**: A chat bubble in the bottom-right corner that opens a 400×600px chat panel connected to your OpenAI agent.

---

## Prerequisites

- **Node.js** (v20+)
- **Firebase CLI** (`npm install -g firebase-tools`)
- **OpenAI Account** with access to Agents
- **Firebase Project** (free tier works)
- **Docusaurus Project** (or any React app)

---

## What You Need from OpenAI

Before you start, gather these from your OpenAI Agent Builder:

### 1. **Workflow ID**
This is the unique identifier for your AI agent workflow.

- **Where to find it**: In the OpenAI Agent Builder, copy your workflow ID
- **Format**: `wf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Example**: `wf_69039d9633ac8190aabba5c3ee297cc70ce212b517da778d`

### 2. **Domain Public Key**
This whitelists your domain to use ChatKit.

- **Where to find it**: In your OpenAI ChatKit settings, generate a domain key for your site
- **Format**: `domain_pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Example**: `domain_pk_6903b4a57dc4819096ed58d26466f80e0b9e11804b1da77a`
- **Note**: You need separate keys for localhost, staging, and production domains

### 3. **OpenAI API Key**
Used by your backend to create ChatKit sessions.

- **Where to find it**: OpenAI Dashboard → API Keys
- **Format**: `sk-proj-...`
- **Security**: NEVER expose this in frontend code - only use server-side

---

## Architecture

ChatKit requires a **server-side session endpoint** for security. Here's how it works:

```
┌─────────────┐
│   Browser   │
│             │
│  [Chat      │
│   Bubble]   │  1. User clicks bubble
└──────┬──────┘
       │
       │  2. ChatKit requests client_secret
       ▼
┌──────────────────────────────────────┐
│   Your Frontend (React/Docusaurus)  │
│   - Renders chat bubble              │
│   - Mounts ChatKit web component     │
└──────┬───────────────────────────────┘
       │
       │  3. Fetch client_secret from backend
       ▼
┌──────────────────────────────────────┐
│   Firebase Function (Backend)       │
│   - Calls OpenAI API                │
│   - Returns client_secret            │
└──────┬───────────────────────────────┘
       │
       │  4. Creates session with OpenAI
       ▼
┌──────────────────────────────────────┐
│   OpenAI ChatKit API                │
│   - Validates workflow ID            │
│   - Returns session token            │
└──────────────────────────────────────┘
```

**Why this architecture?**
- ✅ API key stays server-side (secure)
- ✅ Each user gets a unique session
- ✅ Domain key ensures only your site can load ChatKit

---

## Step-by-Step Implementation

### Step 1: Set Up Environment Variables

Create a `.env` file in your project root (add it to `.gitignore`):

```bash
# .env
OPENAI_API_KEY=sk-proj-YOUR_ACTUAL_KEY_HERE
```

**Important**: Never commit this file. Add it to `.gitignore`:

```bash
echo ".env" >> .gitignore
```

---

### Step 2: Create Firebase Function for Session Management

#### 2.1 Create `functions/package.json`

```json
{
  "name": "docs-ondi-functions",
  "private": true,
  "engines": { "node": "20" },
  "main": "index.js",
  "dependencies": {
    "firebase-functions": "^5.0.1"
  }
}
```

#### 2.2 Create `functions/index.js`

```javascript
const { onRequest } = require("firebase-functions/v2/https");

exports.chatkitSession = onRequest(
  { cors: true, region: "us-central1", secrets: ["OPENAI_API_KEY"] }, 
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
      }

      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        res.status(500).json({ error: "Missing OPENAI_API_KEY" });
        return;
      }

      const deviceId = (req.body && (req.body.user || req.body.deviceId)) || "anonymous";

      // Call OpenAI ChatKit API
      const response = await fetch("https://api.openai.com/v1/chatkit/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "OpenAI-Beta": "chatkit_beta=v1",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          workflow: { id: "wf_YOUR_WORKFLOW_ID_HERE" },
          user: deviceId
        })
      });

      const data = await response.json();
      if (!response.ok) {
        res.status(response.status).json(data);
        return;
      }
      if (!data || !data.client_secret) {
        res.status(500).json({ error: "Failed to obtain client_secret" });
        return;
      }

      res.status(200).json({ client_secret: data.client_secret });
    } catch (e) {
      res.status(500).json({ error: e && e.message ? e.message : String(e) });
    }
  }
);
```

**Replace** `wf_YOUR_WORKFLOW_ID_HERE` with your actual workflow ID.

---

### Step 3: Configure Firebase

#### 3.1 Update `firebase.json`

Add the functions source and a hosting rewrite so `/api/chatkit/session` routes to your function (recommended: same‑origin path avoids CORS in production):

```json
{
  "hosting": {
    "site": "your-site-name",
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "headers": [
      {
        "source": "**/*.@(js|css|svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|otf)",
        "headers": [
          { "key": "Cache-Control", "value": "public,max-age=31536000,immutable" }
        ]
      },
      {
        "source": "**/*.html",
        "headers": [
          { "key": "Cache-Control", "value": "public,max-age=0,must-revalidate" }
        ]
      }
    ],
    "cleanUrls": true,
    "rewrites": [
      { "source": "/api/chatkit/session", "function": "chatkitSession" }
    ]
  },
  "functions": { "source": "functions" }
}
```

---

### Step 4: Deploy the API Key as a Secret

Firebase Functions use secrets to securely store API keys:

```bash
# Load the key from your .env
source .env

# Set it as a Firebase secret
printf '%s' "$OPENAI_API_KEY" | npx firebase-tools functions:secrets:set OPENAI_API_KEY --data-file=-
```

**Verify** the secret was set:

```bash
npx firebase-tools functions:secrets:access OPENAI_API_KEY
```

---

### Step 5: Deploy Firebase Functions

```bash
# Install function dependencies
npm --prefix functions install

# Deploy only the function
npx firebase-tools deploy --only functions
```

After deployment, you'll get a Cloud Run URL like:
```
https://chatkitsession-xxxxx-uc.a.run.app
```

**Test it**:
```bash
curl -X POST https://chatkitsession-xxxxx-uc.a.run.app \
  -H 'Content-Type: application/json' \
  -d '{"user":"test"}' | jq
```

You should see:
```json
{
  "client_secret": "cs_xxxxxxxxxxxxx"
}
```

---

### Step 6: Configure Docusaurus

#### 6.1 Update `docusaurus.config.ts`

Add ChatKit script and custom fields:

```typescript
const config: Config = {
  title: 'Your Site',
  // ... other config ...

  // Client-available config
  customFields: {
    // Prefer same-origin to avoid CORS issues
    chatkitSessionUrl: '/api/chatkit/session',
    chatkitWorkflowId: 'wf_YOUR_WORKFLOW_ID',
    chatkitDomainPublicKey: 'domain_pk_YOUR_DOMAIN_KEY',
  },

  // Load ChatKit script on all pages
  scripts: [
    {
      src: 'https://cdn.platform.openai.com/deployments/chatkit/chatkit.js',
      async: true,
    },
  ],

  // ... rest of config ...
};
```

**Replace**:
- `chatkitWorkflowId` with your workflow ID
- `chatkitDomainPublicKey` with your domain key generated for the exact production origin (e.g., `https://docs.ondi.io` vs `https://docs-ondi.web.app`).

If you choose to use an absolute Cloud Run URL for `chatkitSessionUrl`, make sure your function responds with the proper CORS headers and that you call it with `POST` and `Content-Type: application/json`.

---

### Step 7: Create the Chat Bubble Component

Create `src/theme/Root.tsx`:

```typescript
import React, { useEffect, useState, useRef } from 'react';
import type { Props } from '@theme/Root';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Root({ children }: Props): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const configuredSessionUrl = (siteConfig?.customFields as any)?.chatkitSessionUrl as string | undefined;
  const workflowId = (siteConfig?.customFields as any)?.chatkitWorkflowId as string | undefined;
  const domainPk = (siteConfig?.customFields as any)?.chatkitDomainPublicKey as string | undefined;
  const sessionUrl = configuredSessionUrl || '/api/chatkit/session';
  const [isOpen, setIsOpen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatElementRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen || chatElementRef.current) return;

    async function setupChatKit() {
      try {
        // Wait for the web component to be defined
        if (typeof customElements?.whenDefined === 'function') {
          try {
            await (customElements as any).whenDefined('openai-chatkit');
          } catch {
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

          await new Promise((r) => setTimeout(r, 100));

          // Configure the component
          (chatElement as any).setOptions({
            api: {
              async getClientSecret() {
                const res = await fetch(sessionUrl, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ user: 'web-docs' }),
                });
                if (!res.ok) throw new Error(`Failed to get client_secret: ${res.status}`);
                const { client_secret } = await res.json();
                return client_secret as string;
              },
            },
          });
        }
      } catch (err) {
        console.error('ChatKit initialization failed:', err);
      }
    }

    if (typeof window !== 'undefined') {
      setupChatKit();
    }
  }, [isOpen, sessionUrl, workflowId, domainPk]);

  return (
    <>
      {children}
      
      {/* Floating Chat Bubble */}
      <div
        id="chatkit-bubble"
        title="Chat with us!"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#2563EB',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 9998,
          fontSize: '24px',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        💬
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          id="chatkit-widget"
          ref={chatContainerRef}
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '400px',
            height: '600px',
            maxWidth: '90vw',
            maxHeight: '80vh',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            zIndex: 9999,
            overflow: 'hidden',
            backgroundColor: 'white',
          }}
        />
      )}
    </>
  );
}
```

---

### Step 8: Build and Test Locally

```bash
# Build the site
npm run build

# Run locally
npm start
```

Open `http://localhost:3000`, click the chat bubble, and verify the chat loads.

---

## Troubleshooting

### Chat Bubble Doesn't Appear

**Check**:
1. Is `src/theme/Root.tsx` created?
2. Did you rebuild? (`npm run build`)
3. Check browser console for errors

### Chat Panel is Blank

**Check**:
1. Open DevTools → Console
2. Look for `[ChatKit]` logs
3. Verify `chatkit.js` loaded (Network tab → filter `chatkit`)
4. Verify `/api/chatkit/session` returns `{ client_secret: "..." }`

**Common Issues**:
- **Domain key mismatch → blank white panel**: Generate the Domain Public Key for the exact origin you are using (for example, `https://docs.ondi.io` is different from `https://docs-ondi.web.app`). Update `chatkitDomainPublicKey` and redeploy.
- **CORS error**: Prefer the same‑origin `/api/chatkit/session` path via Firebase Hosting rewrite. If calling a Cloud Run URL directly, add appropriate `Access-Control-Allow-Origin` headers.
- **404 on session endpoint**: Check `firebase.json` rewrite is deployed and hosting is redeployed.
- **Missing API key**: Run `firebase functions:secrets:access OPENAI_API_KEY` to verify the secret.
- **Runtime decommissioned**: If deploy fails with a Node 18 deprecation error, update `functions/package.json` to `"engines": { "node": "20" }` and redeploy.

For deeper diagnosis, log the element after initialization:

```ts
// After creating the element
(window as any).__chatkit__ = chatElement; // Inspect in DevTools
setTimeout(() => {
  console.log('shadowRoot?', !!chatElement.shadowRoot);
  console.log('display', getComputedStyle(chatElement).display);
}, 2000);
```

### Domain Not Whitelisted

If you see domain errors:
1. Go to OpenAI ChatKit settings
2. Add your domain (e.g., `docs-ondi.web.app`)
3. Generate a new domain public key
4. Update `chatkitDomainPublicKey` in `docusaurus.config.ts`
5. Redeploy

---

## Deployment

### Deploy to Firebase Hosting

```bash
# Build the frontend
npm run build

# Deploy both functions and hosting
npx firebase-tools deploy --only functions,hosting
```

### Verify Production

1. Visit your live site (e.g., `https://docs-ondi.web.app`)
2. Click the chat bubble
3. Verify the chat loads and responds

---

## Customization

### Change Bubble Color

In `src/theme/Root.tsx`, update the bubble style:

```typescript
backgroundColor: '#FF5733',  // Your color
```

### Change Panel Size

In `src/theme/Root.tsx`, update the chat window style:

```typescript
width: '500px',   // Wider panel
height: '700px',  // Taller panel
```

### Use Iframe Approach (Alternative)

If you prefer an iframe (less secure, simpler):

```html
<iframe
  src="https://your-chatkit-embed-url"
  width="100%"
  height="100%"
  style="border: none"
  allow="clipboard-write; camera; microphone"
/>
```

**Note**: This requires a hosted ChatKit URL, which OpenAI doesn't provide by default. The web component approach (above) is recommended.

---

## Security Checklist

- ✅ API key stored in Firebase secrets (not in code)
- ✅ `.env` file is in `.gitignore`
- ✅ Session endpoint uses CORS
- ✅ Domain key restricts ChatKit to your domain
- ✅ No sensitive data in frontend code

---

## Summary

You've successfully integrated OpenAI ChatKit! Here's what you built:

1. **Backend**: Firebase Function that creates ChatKit sessions
2. **Frontend**: React component that renders a chat bubble and panel
3. **Security**: API key stored server-side, domain whitelisting enabled
4. **UX**: Floating bubble that opens a chat panel on click

**Key Files**:
- `functions/index.js` – Session endpoint
- `src/theme/Root.tsx` – Chat bubble UI
- `docusaurus.config.ts` – ChatKit configuration
- `firebase.json` – Hosting rewrite

**Resources**:
- [OpenAI ChatKit Docs](https://platform.openai.com/docs/guides/chatkit)
- [Firebase Functions Docs](https://firebase.google.com/docs/functions)
- [Docusaurus Theming](https://docusaurus.io/docs/swizzling)

---

## Questions?

If you encounter issues:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review browser console logs
3. Test the session endpoint directly with `curl`
4. Verify all IDs and keys match your OpenAI account

**Happy chatting!** 🎉

