import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  LayoutDashboard,
  UserPlus,
  Users,
  Mail,
  Truck,
  Package,
  Rocket,
  Store,
  UtensilsCrossed,
  Plug,
  Settings,
  Key,
  Palette,
  CreditCard,
  Server,
  LogIn,
  UserCheck,
  Monitor,
  MapPin,
  ClipboardList,
  FileText,
  AlertCircle,
  ArrowLeftRight,
  Car,
  BarChart3,
  Boxes,
  ClipboardCheck,
  PackageSearch,
  Warehouse,
  UserCog,
  ShoppingCart,
  Smartphone,
  DollarSign,
} from 'lucide-react';

// Map of menu labels to their corresponding Lucide icons
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  // Main categories
  'Overview': LayoutDashboard,
  'Onboarding': UserCheck,
  'Management': Users,
  'Delivery ( Core )': Truck,
  'Warehousing': Warehouse,
  'Express Shipping': Rocket,
  'Store Front': Store,
  'Resaurant Menu': UtensilsCrossed,
  'Integrations': Plug,
  'Settings': Settings,
  
  // Onboarding sub-items
  'Login': LogIn,
  'Signup': UserPlus,
  'Portal Interface Setting': Monitor,
  
  // Management sub-items
  'Users': Users,
  'Add User': UserPlus,
  'Invite User': Mail,
  
  // Lastmile Delivery sub-items
  'Dispatcher': MapPin,
  'Driver': Car,
  'Driver App': Smartphone,
  'Deliveries': Package,
  'Assignments': ClipboardList,
  'Vehicles': Car,
  'Zones': MapPin,
  'Zone Pricing': DollarSign,
  'Exception': AlertCircle,
  'Return Request': ArrowLeftRight,
  'Driver Performance': BarChart3,
  'Delivery Service': Truck,
  'Assignments': ClipboardList,
  'Return Request': ArrowLeftRight,
  
  // Warehousing sub-items
  'Warehouse': Warehouse,
  'Inventory Items': PackageSearch,
  'Inventory Stock': Boxes,
  'Inventory Transactions': FileText,
  'Bin Location': MapPin,
  'Receiving Order': Package,
  'Picking Orders': ClipboardCheck,
  'Inventory Audits': ClipboardList,
  'Staff': UserCog,
  'Staff App': Smartphone,
  'Bin Location': MapPin,
  'Inventory Audits': ClipboardList,
  'Inventory Items': PackageSearch,
  'Inventory Stock': Boxes,
  'Inventory Transactions': FileText,
  'Picking Orders': ClipboardCheck,
  'Receiving Order': Package,
  
  // Express Shipping sub-items
  'Customer Portal': ShoppingCart,
  
  // Store Front sub-items
  'Customer Portal': ShoppingCart,
  
  // Restaurant Menu sub-items
  'Customer Menu': UtensilsCrossed,
  'POS': Monitor,
  
  // Integrations sub-items
  'Carriers': Truck,
  
  // Settings sub-items
  'API Key Management': Key,
  'Brand Setting': Palette,
  'Payment Methods': CreditCard,
  'System Setting': Server,
};

// Fallback icon for items not in the map
const DefaultIcon = FileText;

// Helper function to get icon component for a label
function getIconForLabel(label: string): React.ComponentType<{ size?: number; className?: string }> {
  // Clean the label - remove extra whitespace
  const cleanLabel = label.trim();
  
  // Try exact match first
  if (iconMap[cleanLabel]) {
    return iconMap[cleanLabel];
  }
  
  // Try case-insensitive match
  const lowerLabel = cleanLabel.toLowerCase();
  for (const [key, Icon] of Object.entries(iconMap)) {
    if (key.toLowerCase() === lowerLabel) {
      return Icon;
    }
  }
  
  // Try partial match (e.g., "Settings Overview" -> "Settings")
  for (const [key, Icon] of Object.entries(iconMap)) {
    if (lowerLabel.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerLabel)) {
      return Icon;
    }
  }
  
  return DefaultIcon;
}

export default function SidebarIcons(): null {
  useEffect(() => {
    // Function to add icons to sidebar items
    const addIconsToSidebar = () => {
      // Find all menu link items
      const menuLinks = document.querySelectorAll('.menu__link:not([data-icon-added])');
      
      menuLinks.forEach((link) => {
        // Skip if already processed
        if ((link as HTMLElement).dataset.iconAdded) {
          return;
        }
        
        const linkElement = link as HTMLElement;
        const linkText = linkElement.textContent?.trim() || '';
        
        // Skip if no text or if it's a collapsible caret
        if (!linkText || linkText.length === 0) {
          return;
        }
        
        // Get the icon component for this label
        const IconComponent = getIconForLabel(linkText);
        
        // Create icon container
        const iconContainer = document.createElement('span');
        iconContainer.className = 'sidebar-icon';
        iconContainer.style.cssText = `
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          color: inherit;
        `;
        
        // Insert container before the text content
        linkElement.insertBefore(iconContainer, linkElement.firstChild);
        linkElement.style.display = 'flex';
        linkElement.style.alignItems = 'center';
        
        // Render the icon using React
        const root = createRoot(iconContainer);
        root.render(
          React.createElement(IconComponent, {
            size: 16,
            className: 'sidebar-icon-svg',
            style: { width: '16px', height: '16px', display: 'block' }
          })
        );
        
        (linkElement as HTMLElement).dataset.iconAdded = 'true';
      });
    };
    
    // Debounce timer for mutation observer
    let debounceTimer: NodeJS.Timeout | null = null;
    
    // Initial run with a small delay to ensure DOM is ready
    const initialTimeoutId = setTimeout(() => {
      addIconsToSidebar();
    }, 100);
    
    // Watch for DOM changes (when sidebar expands/collapses)
    const observer = new MutationObserver(() => {
      // Debounce to avoid too many calls
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      debounceTimer = setTimeout(() => {
        addIconsToSidebar();
      }, 50);
    });
    
    // Observe the sidebar container
    const sidebarContainer = document.querySelector('.theme-doc-sidebar-container');
    if (sidebarContainer) {
      observer.observe(sidebarContainer, {
        childList: true,
        subtree: true,
      });
    }
    
    // Also observe menu list changes
    const menuList = document.querySelector('.menu__list');
    if (menuList) {
      observer.observe(menuList, {
        childList: true,
        subtree: true,
      });
    }
    
    return () => {
      clearTimeout(initialTimeoutId);
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      observer.disconnect();
    };
  }, []);
  
  return null;
}

