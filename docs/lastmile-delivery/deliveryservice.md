---
id: deliveryservice
title: Delivery Services
description: Define, configure, and manage delivery service offerings like Economy, Express, and On‑Demand.
---

## What is a Delivery Service?

A Delivery Service defines the specific type of delivery operation offered to customers — such as Economy, Express, Same Day, or On‑Demand. Each service includes configurable settings like pricing, access control, delivery type, and time estimates that determine how and when deliveries are fulfilled.

In simple terms, a Delivery Service acts as a template for managing different delivery experiences. It helps businesses control how fast, where, and under what conditions deliveries are made — while ensuring consistency, transparency, and operational efficiency.

### Examples

- **Economy Delivery**: 2–3 day delivery at a lower cost
- **Express Delivery**: Same‑day or next‑day service at a higher charge
- **On‑Demand Delivery**: Real‑time pickup and delivery through the driver app

Each of these is a Delivery Service with its own rules and configurations.

:::note
Screenshot placeholder: Delivery Services list page
:::

## Purpose

Delivery Services allow admins to:

- **Create and manage options**: Define the available delivery options for customers.
- **Configure rules**: Set pricing, delivery speed, and eligibility.
- **Control access**: Offer tailored services to selected users or customer groups.
- **Maintain consistency**: Ensure performance, compliance, and predictable operations.

## Creating a Delivery Service

From the Delivery Management module, select **Add Service** or **Create New**. The creation form includes several sections to configure each service.

:::note
Screenshot placeholder: Create Delivery Service modal
:::

### 1) Basic Information

Define the identity and core details of the delivery service.

- **Service Name**: The display name (e.g., "Express Delivery", "Same Day").
  - Why: Helps users quickly identify and select the right service.
- **Service Code**: A unique identifier for backend and operational tracking (e.g., `SRV-EXP`, `DLV-123`).
  - Why: Prevents duplication and enables correct API references.
- **Description**: A short explanation of what the service offers.
  - Why: Useful for clarity and for customer‑facing documentation.

:::tip
Use clear, customer‑friendly names, and keep codes consistent (e.g., `SRV-EXP-001`).
:::

### 2) Access Control

Control who can use this delivery service.

- **All Users**: Service is available to everyone.
- **Select Users**: Only chosen customers or business accounts can access it.
- **All Users except Selected**: Available to all except specific users.

Why: Enables flexible access management — ideal for VIP clients or restricted offerings.

:::note
Screenshot placeholder: Access control options
:::

### 3) Service Level

Define the service’s priority or speed category.

Common options include:

- **Economy**: Standard delivery with longer lead time.
- **Express**: Same‑day or next‑day delivery.
- **On‑Demand**: Real‑time, immediate dispatch.

Why: Helps customers pick based on urgency and allows the system to optimize dispatch logic.

:::note
Screenshot placeholder: Service level dropdown
:::

### 4) Delivery Type

Specify how deliveries are executed.

- **Delivery**: Pickup from hub → deliver to customer.
- **Pickup**: Customer brings the package to the hub.
- **Pickup & Delivery**: Both pickup and delivery operations.
- **On‑Demand**: Flexible, driver‑based dispatch with no fixed schedule.

Why: Defines the operational flow for each service.

:::note
Screenshot placeholder: Delivery type selector
:::

### 5) Pricing

Specify the default or fallback price of the service.

- **Default Price**: Used when no zone‑based pricing exists.
  - Why: Ensures a valid charge when generating delivery orders.

:::note
Screenshot placeholder: Pricing field
:::

### 6) Unit Limits

Restrict usage based on shipment or order size.

- **Minimum Unit Limit**: Lowest permissible quantity.
- **Maximum Unit Limit**: Highest quantity supported.

Why: Prevents misuse (e.g., ensuring small orders don’t use bulk services).

:::note
Screenshot placeholder: Unit limits section
:::

### 7) Time Estimates

Define the expected delivery duration.

- **Minimum Time Estimate**: Fastest expected time to deliver.
- **Maximum Time Estimate**: Longest possible delivery window.

Why: Sets accurate customer expectations and aids performance tracking.

:::note
Screenshot placeholder: Time estimates section
:::

## Validation Rules

To ensure clean data entry and accurate configuration:

- **Name** and **Service Code** are mandatory.
- **Service Code** must be unique.
- **Unit limits** must be positive numbers.
- **Minimum time** cannot exceed **maximum time**.
- Any validation failure will highlight missing or invalid fields.

## Best Practices

- **Use consistent naming** conventions (e.g., `SRV-EXP-001`).
- **Align pricing** with your service‑level agreements (SLAs).
- **Leverage Access Control** for exclusive services to premium customers.
- **Review configurations regularly** as operational strategies or pricing change.
- **Set up zone‑level pricing** for complete billing accuracy where applicable.

---

### Quick Reference

| Section | Key Fields | Purpose |
| --- | --- | --- |
| Basic Information | Name, Code, Description | Identity and customer clarity |
| Access Control | All, Select, Exclude | Control eligibility and visibility |
| Service Level | Economy, Express, On‑Demand | Speed and priority category |
| Delivery Type | Delivery, Pickup, Pickup & Delivery, On‑Demand | Operational flow |
| Pricing | Default Price | Fallback charge when no zone price |
| Unit Limits | Min, Max | Guardrails on order size |
| Time Estimates | Min, Max | Delivery window expectations |


