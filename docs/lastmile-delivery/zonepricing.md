---
title: Zone Pricing
sidebar_label: Zone Pricing
description: Define delivery prices between origin and destination zones, with base and per‑unit rates, optional tiers, and effective dates.
---

# Zone Pricing

Zone Pricing enables precise control over delivery costs by defining route-specific rates between geographic areas, supporting flexible pricing strategies that align with operational realities like distance, service level, and load size.

## What is Zone Pricing

Zone Pricing is a route-based pricing framework that assigns delivery costs to specific origin-destination zone pairs. Each pricing rule establishes financial parameters for moving shipments from one geographic area to another, overriding the default rates configured on delivery services.

### Core Principles

Zone Pricing operates on several foundational concepts:

- **Route-Specific Pricing**: Different costs for different routes reflect real-world variables like distance, infrastructure, and service complexity
- **Service Integration**: Each rule links to a specific delivery service, allowing multiple pricing tiers for the same route (Economy vs. Express)
- **Hierarchical Rate Logic**: When a zone-based rule exists for a route and service combination, it takes precedence over the delivery service's default pricing
- **Temporal Flexibility**: Rules activate and deactivate based on configured time windows, supporting seasonal adjustments and promotional campaigns

### Pricing Components

Each Zone Pricing rule consists of:

- **Fixed Component**: A base price charged for the route regardless of shipment size
- **Variable Component**: A per-unit price that scales with order volume (items, weight, or parcels)
- **Tier Multipliers** (optional): Threshold-based adjustments that modify pricing when shipments exceed specified unit counts

This dual-component structure ensures pricing reflects both handling overhead and load-specific costs.

### Common Applications

Zone Pricing supports diverse business scenarios:

- **Distance-Based Rates**: Higher costs for longer routes between distant zones
- **Premium Zones**: Elevated pricing for high-demand or difficult-to-access areas
- **Intra-Zone Delivery**: Special rates for shipments within the same zone
- **Service Differentiation**: Varied pricing for Express, Economy, or On-Demand services on identical routes
- **Seasonal Adjustments**: Time-limited pricing for holidays, peak seasons, or promotional periods

### Fallback Behavior

When the system cannot locate a matching Zone Pricing rule for a delivery request (due to zone, service, or timing mismatches), it automatically applies the default pricing configured on the relevant delivery service. This ensures all deliveries receive valid pricing calculations.

:::note
Screenshot placeholder: Zone Pricing conceptual diagram showing route pricing logic
:::

---

## Zone Pricing List

The Zone Pricing List provides a centralized interface for viewing, monitoring, and managing all configured pricing rules across your delivery network. This administrative view enables efficient oversight of pricing strategies and route coverage.

### Overview

The list displays critical information for each pricing rule:

- **Origin Zone**: The starting geographic area for the priced route
- **Destination Zone**: The ending geographic area for the priced route
- **Service**: The delivery service to which the pricing applies (Express, Economy, etc.)
- **Base Price**: The fixed component of the route's cost structure
- **Per-Unit Price**: The variable component charged per shipment unit
- **Effective Period**: The active time window for the rule (start and end dates)
- **Status**: Whether the rule is currently active based on effective dates

### Filtering and Navigation

Administrators can efficiently locate specific pricing rules through:

- **Zone Filters**: View all rules departing from or arriving at specific zones
- **Service Filters**: Isolate pricing by delivery service type
- **Date Range Filters**: Identify active, upcoming, or expired rules based on effective periods
- **Search Functionality**: Locate rules by zone names, service codes, or pricing parameters
- **Sort Options**: Organize by price values, effective dates, or alphabetical zone order

These tools facilitate price auditing, competitive analysis, and strategic planning across large route networks with numerous pricing configurations.

### Monitoring and Analysis

The list view supports several administrative functions:

- **Coverage Assessment**: Identify which zone pairs have custom pricing versus those relying on service defaults
- **Pricing Consistency**: Compare rates across similar routes to ensure strategic alignment
- **Expiration Tracking**: Monitor approaching end dates for seasonal or promotional pricing
- **Service Parity**: Verify that multiple services on the same route reflect intended pricing differentiation

:::tip
Regularly review the Zone Pricing List to identify outdated rules, pricing gaps between zones, and opportunities for rate optimization based on operational cost changes.
:::

:::note
Screenshot placeholder: Zone Pricing List interface with filters and sorting options
:::

---

## Create a New Zone Pricing Rule

Creating a Zone Pricing rule establishes a custom rate structure for a specific route and service combination. This process enables strategic pricing that reflects operational costs, competitive positioning, and market dynamics more accurately than universal default rates.

### Purpose of Custom Zone Pricing

New pricing rules are created to:

- **Reflect Distance Economics**: Apply higher costs to longer routes or remote destinations
- **Support Service Tiers**: Differentiate Express, Economy, and On-Demand pricing on the same route
- **Manage Capacity**: Use pricing to encourage or discourage volume in specific zones
- **Respond to Competition**: Adjust rates in competitive markets while maintaining margins elsewhere
- **Seasonal Strategy**: Implement time-limited pricing for peak periods, holidays, or promotions
- **Test Pricing Models**: Trial new rate structures in specific geographies before broader rollout

### Configuration Logic

#### Route Definition

Zone Pricing begins by identifying the specific path being priced:

- **Origin Zone**: Defines where the shipment journey begins, representing the pickup or dispatch location
- **Destination Zone**: Specifies where the shipment journey ends, representing the delivery target area
- **Service Selection**: Links the pricing to a specific delivery offering (Economy, Express, etc.), allowing multiple rate structures for the same geographic route

This three-part combination (origin + destination + service) creates a unique pricing scenario. The system prevents duplicate rules to maintain pricing consistency.

#### Pricing Structure

The financial framework consists of complementary components:

- **Base Price**: The fixed charge applied to all shipments on this route, covering standard handling, fuel, and operational overhead regardless of load size. This ensures minimum revenue per delivery
- **Per-Unit Price**: The incremental charge applied to each unit (item, kilogram, or parcel) in the shipment. This variable component ensures pricing scales proportionally with load, protecting margins on larger orders

Together, these create a formula: **Total Cost = Base Price + (Units × Per-Unit Price)**

This structure balances revenue stability (base price) with volume responsiveness (per-unit price).

#### Unit Tier Multipliers (Optional)

For services handling variable shipment sizes, tier-based pricing adds sophistication:

- **Threshold Unit Count**: Defines the volume level at which pricing logic changes, such as 10 units or 50 kilograms
- **Price Multiplier**: Specifies the factor applied to charges beyond the threshold (e.g., 1.2× or 1.5×)

**Example**: With a threshold of 10 units and a multiplier of 1.2×, a 15-unit shipment calculates as: Base Price + (10 × Per-Unit Price) + (5 × Per-Unit Price × 1.2)

This mechanism accommodates bulk handling costs, vehicle capacity constraints, or premium charges for oversized shipments.

#### Effective Time Windows

Zone Pricing supports temporal flexibility through activation periods:

- **Start Date/Time**: When the rule becomes active and begins applying to new orders
- **End Date/Time**: When the rule expires and stops affecting pricing (optional — rules without end dates remain active indefinitely)

Time windows enable:

- **Promotional Pricing**: Limited-time rate reductions for specific routes
- **Seasonal Adjustments**: Higher costs during peak demand periods
- **Scheduled Transitions**: Planned rate changes that activate automatically without manual intervention
- **Market Testing**: Time-boxed experiments with new pricing strategies

Rules activate and deactivate automatically based on these parameters, with no manual toggling required.

### Validation and Data Integrity

The system enforces several rules to maintain pricing accuracy:

- Origin zone, destination zone, and service must be specified and valid (active in the system)
- Base and per-unit prices require positive numeric values
- Unit tier thresholds and multipliers, if enabled, must be logically sound (multiplier > 1)
- End dates cannot precede start dates
- Duplicate rules (same origin, destination, and service combination) are rejected
- Zones and services must exist and be active before rule creation

:::tip Best Practices
Design zone pricing strategies that balance competitiveness with profitability. Use consistent base-to-per-unit ratios across similar routes for pricing coherence. Enable unit tiers only when shipment size variability justifies complexity. Set end dates for promotional pricing to prevent indefinite discounts. Coordinate with operations teams to ensure pricing reflects actual delivery costs.
:::

:::note
Screenshot placeholder: Create Zone Pricing form with all configuration sections
:::

---

## Edit Existing Zone Pricing

Editing a Zone Pricing rule allows you to refine rates, extend or shorten effective periods, and adjust tier logic as market conditions and operational costs evolve. All configuration parameters remain editable after creation, supporting continuous pricing optimization.

### When to Modify Pricing Rules

Common scenarios for updates include:

- **Cost Adjustments**: Fuel, labor, or infrastructure cost changes requiring rate recalibration
- **Competitive Response**: Market pricing shifts necessitating strategic rate modifications
- **Performance Data**: Historical delivery costs revealing under- or over-priced routes
- **Service Changes**: Delivery service modifications requiring aligned pricing updates
- **Time Extensions**: Extending successful promotional pricing or seasonal rates
- **Tier Refinement**: Adjusting unit thresholds or multipliers based on shipment volume patterns

### Editable Parameters and Effects

#### Route and Service Modifications

- **Origin/Destination Zones**: Changing zones effectively creates a different pricing scenario. Use caution — this transforms the rule's purpose entirely
- **Service**: Switching from one service to another (e.g., Economy to Express) changes which deliveries the rule affects. Ensure intentional alignment with service strategy

These changes redirect the rule to different operational contexts, so they should be made deliberately rather than as corrections.

#### Pricing Component Updates

- **Base Price**: Modifications affect new orders immediately. Increasing base price raises minimum revenue; decreasing it improves competitiveness or reflects lower costs
- **Per-Unit Price**: Changes impact volume-based charges on new shipments. Adjustments here directly affect pricing elasticity relative to order size

Pricing changes apply **only to new orders** created after modification. Existing orders retain their original pricing to maintain financial consistency and customer trust.

#### Tier Adjustment

- **Threshold Unit Count**: Raising the threshold delays when multipliers activate; lowering it applies bulk pricing sooner
- **Price Multiplier**: Increasing the multiplier steepens cost escalation for large shipments; decreasing it moderates bulk pricing

Tier modifications affect how pricing scales with volume, influencing customer behavior around order sizes.

#### Time Window Changes

- **Start Date Extension/Modification**: Moving start dates forward delays rule activation; moving backward (if still future-dated) advances it
- **End Date Adjustment**: Extending end dates prolongs pricing periods; shortening them accelerates expiration. Removing end dates converts time-limited rules to indefinite ones

Time changes control rule lifecycles without requiring deletion and recreation, supporting agile pricing management.

### Impact on Active Operations

Zone Pricing edits follow a clear operational model:

- **New Orders**: Immediately reflect updated pricing, time windows, and tier logic
- **Existing Orders**: Retain original pricing configuration from creation time, ensuring financial integrity and preventing retroactive changes
- **Historical Reporting**: Analytics preserve accurate historical data, with pricing changes visible only in forward-looking metrics
- **Service Default Fallback**: If edits invalidate a rule (e.g., expiring end date), affected routes automatically revert to delivery service default pricing

This approach balances pricing agility with operational stability.

:::tip
Document major pricing changes for financial reporting and stakeholder communication. Monitor order patterns after price adjustments to assess customer response. Coordinate service and zone pricing updates to prevent misaligned rate structures. Use time-based transitions for gradual pricing changes rather than abrupt shifts.
:::

:::note
Screenshot placeholder: Edit Zone Pricing form showing all editable fields
:::

---

## Quick Reference

| Configuration Area | Key Parameters | Primary Purpose |
| --- | --- | --- |
| Route Definition | Origin Zone, Destination Zone, Service | Identifies which deliveries the pricing rule affects |
| Base Pricing | Base Price, Per-Unit Price | Establishes fixed and variable cost components |
| Unit Tiers | Threshold Count, Multiplier | Adjusts pricing for bulk or oversized shipments |
| Time Controls | Start Date, End Date | Defines when the pricing rule is active |
| Validation | Uniqueness, Value Constraints | Ensures data integrity and prevents conflicts |


