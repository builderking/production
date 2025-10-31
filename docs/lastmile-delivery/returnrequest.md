---
title: Return Requests
sidebar_label: Return Requests
---

**Path:** Tenant Admin → Delivery Management → Return Requests

The Return Requests module enables administrators and warehouse teams to log, track, and resolve product returns—whether customer-initiated or operational. It provides end‑to‑end visibility, from request creation to completion, supporting smooth and accountable reverse‑logistics operations.

:::info Screenshot
Add screenshots to `static/img/` and embed them here once available.
:::

## What is a Return Request?

A Return Request represents a case where an item or shipment is requested to be sent back—either after delivery or during the delivery process. Each record captures the delivery link, handling warehouse, reason, status, and notes, ensuring a complete, auditable history.

## Purpose

- **Record and monitor returns**: Maintain a unified log of all return activities.
- **Track key attributes**: Warehouse, delivery, reason, status, handler, and timestamps.
- **Link to deliveries**: Tie returns to the original shipment for context and analytics.
- **Enable audits and reporting**: Preserve history for service, compliance, and trend analysis.

Why this matters: Systematic return handling improves customer satisfaction, inventory accuracy, and operational efficiency.

## Creating a Return Request

From the Return Requests page, select “Add Return Request” (or “Create Return”). Complete the form as detailed below and submit.

### 1) Warehouse & Delivery Details

- **Warehouse**: Select the warehouse responsible for processing the return.  
  Why: Ensures correct routing and handling of returned goods by the right team.
- **Delivery**: Choose the associated delivery order to link the return.  
  Why: Maintains traceability back to the original shipment and inventory movement.

:::note Tip
If you don’t know the delivery reference, search by customer, order number, or date range in the deliveries list, then return to this form.
:::

### 2) Return Information

- **Return Reason**: Choose a category such as Damaged Item, Wrong Product, Customer Cancelled, or Quality Issue.  
  Why: Categorization highlights recurring problems for process or quality improvements.
- **Status**: Set the stage of the return workflow—Pending, In Transit, Received, or Completed.  
  Why: Enables progress tracking and SLA adherence.
- **Notes**: Add context, customer comments, or internal handling instructions.  
  Why: Supports clear handoffs and future audits.

:::info Validation
Warehouse, Delivery, Return Reason, and Status must be provided. Duplicate returns for the same delivery are blocked.
:::

## Return Requests Log

The log lists all recorded return requests in a table for quick review and action.

| Column        | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| Warehouse     | The warehouse assigned to process the return.                               |
| Delivery      | The associated delivery order linked to this return.                        |
| Return Reason | Why the return was initiated.                                               |
| Status        | Current stage (Pending, In Transit, Received, Completed).                   |
| Processed By  | The staff member or admin managing the return.                              |
| Created Date  | When the return request was logged.                                         |

Use the table filters and search to quickly locate specific returns or analyze subsets (e.g., by reason, warehouse, or status).

## Validation Rules

- **Required**: Warehouse, Delivery, Return Reason, and Status.  
- **Controlled values**: Return Reason and Status must be from predefined options.  
- **Notes**: Optional but recommended for clarity and auditability.  
- **No duplicates**: Duplicate return requests for the same delivery are not allowed.  
- **Inline feedback**: Invalid or missing fields are highlighted for correction.

## Best Practices

- **Verify reasons**: Ensure the chosen reason accurately reflects the return scenario.
- **Standardize handling**: Apply consistent protocols across all warehouses.
- **Document context**: Use Notes to capture key operational details and decisions.
- **Review trends**: Regularly analyze reasons and statuses to spot patterns and drive improvements.
- **Close the loop**: Update statuses promptly to keep stakeholders informed.

## Related

- Deliveries: See how deliveries are logged and tracked in `lastmile-delivery/deliveries.md`.

:::tip Next steps
Add your screenshots to `static/img/` and embed them above using Markdown image syntax once available.
:::


