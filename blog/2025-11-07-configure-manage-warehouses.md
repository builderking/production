---
slug: configure-manage-warehouses
title: Configure and Manage Warehouses
authors: [ondi-team]
tags: [warehousing, inventory-management, configuration, integration]
category: Setup Guides
---

Warehousing is a critical component of your logistics operations. This guide will help you set up and manage your warehouses while understanding how they connect with other Ondi modules.

<!-- truncate -->

## Overview

Ondi's warehousing module provides comprehensive inventory management, order fulfillment, and warehouse operations tools. Understanding how warehouses integrate with other modules is key to running an efficient logistics operation.

## Setting Up Your Warehouse

### Step 1: Create a Warehouse

1. Navigate to **Warehousing** → **Warehouse**
2. Click **Create New Warehouse**
3. Enter warehouse details:
   - Name and location
   - Address and contact information
   - Operating hours
   - Storage capacity

### Step 2: Configure Bin Locations

Organize your warehouse with bin locations for efficient picking:

1. Go to **Bin Location** in the Warehousing menu
2. Create a bin location structure (e.g., Aisle-Shelf-Bin)
3. Assign items to specific bin locations
4. Set up location-based picking routes

### Step 3: Set Up Inventory Items

Add products to your warehouse inventory:

1. Navigate to **Inventory Items**
2. Create new inventory items with:
   - SKU and product details
   - Stock levels and reorder points
   - Bin location assignments
   - Unit of measure

### Step 4: Configure Staff and Permissions

Set up warehouse staff accounts:

1. Go to **Staff** section
2. Add staff members with appropriate roles
3. Configure permissions for:
   - Inventory management
   - Order picking
   - Receiving operations
   - Stock audits

## Module Connections

### Connection with Last Mile Delivery

Warehouses automatically connect with the delivery module:

- **Order Fulfillment** - When a delivery order is created, the system checks warehouse inventory
- **Picking Orders** - Delivery orders generate picking orders in the warehouse
- **Inventory Deduction** - Stock is automatically deducted when items are picked for delivery
- **Real-time Sync** - Inventory levels update in real-time across all modules

### Connection with Store Front

Your warehouse integrates seamlessly with your online store:

- **Product Availability** - Store front shows real-time inventory levels
- **Order Processing** - Store orders automatically create warehouse picking orders
- **Fulfillment** - Completed orders trigger delivery requests
- **Stock Alerts** - Low stock notifications prevent overselling

### Connection with Express Shipping

For express shipping orders:

- **Order Receipt** - Express orders appear in warehouse receiving
- **Quick Fulfillment** - Priority picking for express orders
- **Carrier Integration** - Direct connection to shipping carriers
- **Label Generation** - Automatic shipping label creation

### Connection with Customer Portal

Customers can track their orders:

- **Order Status** - Real-time updates from warehouse to delivery
- **Inventory Visibility** - Customers see product availability
- **Order History** - Complete order tracking across modules

## Warehouse Operations

### Receiving Orders

1. Navigate to **Receiving Order**
2. Create receiving orders for incoming stock
3. Scan or manually enter received items
4. Update inventory levels automatically
5. Generate receiving reports

### Picking Orders

1. Go to **Picking Orders**
2. View assigned picking tasks
3. Follow optimized picking routes
4. Scan items during picking
5. Mark orders as complete

### Inventory Audits

Regular audits ensure accuracy:

1. Navigate to **Inventory Audits**
2. Create audit schedules
3. Perform cycle counts
4. Reconcile discrepancies
5. Update inventory records

### Inventory Transactions

Track all inventory movements:

- **Receiving** - Stock coming into warehouse
- **Picking** - Stock going out for orders
- **Adjustments** - Manual corrections
- **Transfers** - Movement between warehouses

## Best Practices

1. **Organize Efficiently** - Use logical bin location systems
2. **Regular Audits** - Schedule regular inventory counts
3. **Staff Training** - Ensure staff understand the system
4. **Real-time Updates** - Keep inventory levels current
5. **Integration Testing** - Test connections with other modules

## Monitoring and Reports

Use the warehouse dashboard to monitor:

- **Stock Levels** - Current inventory across all items
- **Order Status** - Pending and completed orders
- **Staff Performance** - Picking and receiving efficiency
- **Inventory Value** - Total warehouse value

## Next Steps

After setting up your warehouse:

- Connect it with your delivery zones
- Integrate with your store front
- Set up automated reorder points
- Configure staff access and permissions

For detailed information, visit our [Warehousing documentation](/warehousing/overview).

