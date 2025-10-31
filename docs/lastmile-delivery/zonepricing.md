---
title: Zone Pricing
sidebar_label: Zone Pricing
description: Define delivery prices between origin and destination zones, with base and per‑unit rates, optional tiers, and effective dates.
---

## What is Zone Pricing?

Zone Pricing defines how much it costs to deliver a package between specific geographic areas — called zones. Each pricing rule connects an origin zone and a destination zone, and includes parameters such as base price, per‑unit price, and an effective time window.

This approach aligns pricing with real operational costs (distance, service level, priority). When a matching Zone Pricing rule exists, it overrides the default price configured on the delivery service for that route.

### Example

- Within Zone A: ₹50 base + ₹10 per unit
- From Zone A to Zone B: ₹70 base + ₹15 per unit

> Note: When no matching rule is found, the system falls back to the delivery service’s default rate.

_Screenshot placeholder: Zone Pricing list page_

## Purpose

Zone Pricing allows administrators to:

- Define route‑specific prices for deliveries between or within zones.
- Override default service prices based on origin/destination or service level.
- Configure time‑boxed rates for seasonal or promotional periods.
- Apply unit‑based adjustments for heavier or larger shipments.

_Screenshot placeholder: Zone Pricing overview_

## Create a Zone Pricing Rule

Navigation: Tenant Admin → Delivery Management → Zone Pricing → Add Zone Pricing

Each rule contains the following configuration sections.

_Screenshot placeholder: Create Zone Pricing modal_

### 1) Basic Details

- Origin Zone: Select where the delivery starts. Defines the starting geography for routing.
- Destination Zone: Select where the delivery ends. Determines the route being priced.
- Service: Choose the delivery service (e.g., Express, Economy, Same Day). Links the price to a specific service for accuracy and reporting.

_Screenshot placeholder: Basic details section_

### 2) Pricing Logic

- Base Price: Fixed amount charged for the selected route. Covers standard handling and transportation.
- Per‑Unit Price: Additional amount charged per unit (e.g., per item, kg, or parcel) so pricing scales with load.

> Info: A matching Zone Pricing rule overrides the delivery service’s default price. If no rule applies, the default service rate is used.

_Screenshot placeholder: Pricing logic section_

### 3) Unit Tiers (Optional)

- Threshold Unit Count: Number of units after which higher pricing applies.
- Price Multiplier: Multiplier applied when the threshold is exceeded.

Example: If the base rate applies up to 10 units and the multiplier is 1.2×, a 15‑unit delivery costs 20% more than the base calculation.

Why: Encourages efficient handling of bulk shipments by scaling price for larger loads.

_Screenshot placeholder: Unit tiers section_

### 4) Effective Time

- Start Date/Time and End Date/Time: Defines when the rule is active. Use this for seasonal, holiday, or promotional pricing. If no end date is set, the rule remains active indefinitely.

_Screenshot placeholder: Effective time picker_

### 5) Validation Rules

The system validates the following before saving:

- Origin and destination zones are required.
- A service must be selected.
- Base and per‑unit prices must be positive values.
- If unit tiers are enabled, the multiplier must be greater than 1.
- End date must not be earlier than the start date.
- Duplicate rules (same origin → destination → service) are not allowed.

If validation fails, the form highlights missing or incorrect fields for correction.

### 6) Best Practices

- Use clear, consistent zone names (e.g., `ZON-NORTH`, `ZON-SOUTH`).
- Set rates that balance profitability with customer satisfaction.
- Enable unit tiers only for services that handle variable package sizes.
- Review effective dates periodically and retire outdated rules.
- Ensure zones and services are active before adding new rules.

## Quick Reference

| Field | Required | Description |
| --- | --- | --- |
| Origin Zone | Yes | Delivery starting zone |
| Destination Zone | Yes | Delivery ending zone |
| Service | Yes | Delivery service to which pricing applies |
| Base Price | Yes | Fixed charge for the route |
| Per‑Unit Price | Yes | Variable charge per unit (item/kg/parcel) |
| Unit Tier Threshold | No | Units after which multiplier applies |
| Unit Tier Multiplier | No | Multiplier applied above threshold |
| Start/End Date & Time | Start required; End optional | Active period for the rule |


