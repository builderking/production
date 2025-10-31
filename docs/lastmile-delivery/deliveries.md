---
title: Deliveries
sidebar_label: Deliveries
sidebar_position: 5
description: View, create, and manage delivery orders within the Delivery Management module.
---

## What is a Delivery?

A Delivery is an individual shipment order created to transport goods or packages from a pickup location to a drop‑off location. Each delivery includes essential details — such as customer, delivery service, locations, package information, and payment — ensuring accurate dispatch, tracking, and billing.

Deliveries form the backbone of the logistics workflow, linking drivers, vehicles, zones, and services into one coordinated process.

::::note
Screenshot placeholder: Deliveries list page
::::

## Purpose

The Deliveries section allows administrators and operators to:

- **View and manage orders**: See all delivery orders created in the system.
- **Track status and progress**: Follow lifecycle states (for example, Pending, Assigned, In‑Transit, Delivered).
- **Create orders manually**: Add new deliveries in the portal or review those created via apps and integrations.
- **Assign efficiently**: Ensure proper driver and vehicle assignment based on service and zone rules.

::::note
Screenshot placeholder: Deliveries overview
::::

## Creating a Delivery

From the Delivery Management module, select **Add Delivery** or **Create New Delivery**. The creation form includes the sections below.

::::note
Screenshot placeholder: Create Delivery modal
::::

### 1) Customer & Service Details

- **Customer**: Select the customer requesting the delivery.
  - Why: Links the order to the correct account for billing and tracking.
- **Delivery Service**: Choose from available services (for example, Express, Same Day, Economy).
  - Why: Determines pricing, time estimates, and delivery type (Pickup, Delivery, or Both).

::::note
Screenshot placeholder: Customer & Service section
::::

### 2) Locations

- **Pickup Location**: The address or hub where the package will be collected.
  - Why: Ensures drivers start from the correct point.
- **Drop‑Off Location**: The destination where the package should be delivered.
  - Why: Defines the endpoint for tracking and completion.

::::note
Screenshot placeholder: Location fields
::::

### 3) Package & Unit Details

- **Paper Type**: Select the type of package or paper material (if applicable).
  - Why: Useful for documentation‑based or specialized deliveries.
- **Unit Size**: Specify the quantity, weight, or size units.
  - Why: Affects pricing, vehicle assignment, and service eligibility.
- **Package Details**: Add a short description of the package contents.
  - Why: Helps identify and verify items during pickup and drop‑off.

::::note
Screenshot placeholder: Package details section
::::

### 4) Payment Information

- **Payment Method**: Select the payment option (for example, Prepaid, Cash on Delivery, Wallet).
  - Why: Determines how the transaction will be billed and recorded.

::::note
Screenshot placeholder: Payment details section
::::

### 5) Priority & Notes

- **Priority**: Select Normal, High, or Urgent.
  - Why: Influences dispatch order and delivery scheduling.
- **Notes**: Add special handling or timing instructions.
  - Why: Ensures deliveries meet customer and operational requirements.

::::note
Screenshot placeholder: Notes section
::::

## Validation Rules

To ensure clean data entry and accurate dispatching:

- **Customer** and **Delivery Service** are mandatory.
- **Pickup** and **Drop‑Off** locations must be valid and distinct.
- **Unit Size** must be positive.
- **Payment Method** is required.
- For **High** or **Urgent** priority, ensure driver and vehicle availability.
- If validation fails, the system highlights missing or incorrect fields for correction.

## Best Practices

- **Verify addresses** before saving; confirm pickup and drop‑off accuracy.
- **Use High/Urgent sparingly**; reserve for operationally necessary cases.
- **Keep package details accurate** for compliance and verification.
- **Match service to expectation**; choose the right service by distance and SLA.
- **Update statuses regularly** to maintain visibility and tracking accuracy.

::::note
Screenshot placeholder: Delivery details view
::::

## Search and Filters

Once deliveries are created, use Search and Filter options to locate and monitor them.

You can search or filter by:

- **Date range**
- **Customer name**
- **Delivery service**
- **Status**
- **Zone or region**

Why: Quickly find specific orders, monitor in‑progress deliveries, and analyze performance by category or time period.

::::note
Screenshot placeholder: Deliveries filters and search bar
::::

## Actions

The Actions column in the list typically provides quick access to:

- **View Details**: Open full delivery details for review.
- **Track Progress**: View updates as the package moves through its lifecycle.

::::note
Screenshot placeholder: Actions column
::::


