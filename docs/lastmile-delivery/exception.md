---
title: Exceptions
sidebar_label: Exceptions
sidebar_position: 7
description: Track, log, and resolve delivery issues; how to create an exception.
---

## Overview

The Exceptions module helps administrators and operations managers track, log, and resolve delivery issues that occur during shipping or handoff. Typical issues include failed deliveries, damaged packages, or customer unavailability. Recording exceptions ensures full visibility and accountability across the logistics workflow.

:::::note
Screenshot placeholder: Exceptions log page
:::::

## Purpose

Use Exceptions to:

- **Record and monitor issues** encountered in delivery operations
- **Categorize by type** (for example, Failed Delivery, Package Damaged, Customer Unavailable)
- **Track resolution status** through Pending, Resolved, and Closed
- **Attach supporting details** such as photos, driver info, and customer contacts

Why: Systematic documentation improves transparency, reduces recurring issues, and raises customer satisfaction through proactive resolution.

:::::note
Screenshot placeholder: Exceptions dashboard
:::::

## What is an Exception?

An exception is any issue that prevents a delivery from being completed successfully or as planned. Each exception record captures what happened, who was involved, and how it was resolved.

Typical fields include:

- **Related Delivery**
- **Driver Assigned**
- **Exception Type & Reason**
- **Status** (Pending / Resolved / Closed)
- **Supporting Details** (photos, customer info, notes)

:::::note
Screenshot placeholder: Exception details overview
:::::

## Creating an Exception

From the Exceptions module, select **Add Exception** to log a new issue. The form allows you to capture all details required for investigation and resolution.

:::::note
Screenshot placeholder: Add Exception form
:::::

### 1) Delivery & Driver Details

- **Delivery**: Select the delivery order where the issue occurred.
  - Why: Links the exception to a specific shipment for accurate tracking and reporting.
- **Driver**: Choose the driver assigned to that delivery.
  - Why: Identifies responsibility and supports performance analysis.

:::::note
Screenshot placeholder: Delivery and driver fields
:::::

### 2) Exception Information

- **Exception Type**: Choose from predefined categories such as Failed Delivery, Package Damaged, or Customer Not Available.
  - Why: Categorization helps identify recurring issues and operational bottlenecks.
- **Status**: Select the current resolution stage (Pending, Resolved, Closed).
  - Why: Tracks the issue’s lifecycle and ensures timely follow‑up.
- **Exception Details**: Provide a clear description (for example, “Package damaged during pickup”).
  - Why: Gives context for internal reviews and faster resolution.

:::::note
Screenshot placeholder: Exception information section
:::::

### 3) Customer & Contact Information

- **Customer**: Select the customer associated with the affected delivery.
- **Contact Information**: Add phone and/or email details.
  - Why: Enables communication for quick resolution and improved customer satisfaction.

:::::note
Screenshot placeholder: Customer and contact info
:::::

### 4) Photo URL & Additional Notes

- **Photo URL**: Upload or paste a link to images (for example, damaged parcel, incorrect address label).
  - Why: Adds visual proof for claim verification and transparency.
- **Additional Notes**: Include operational comments, follow‑up steps, or escalation details.
  - Why: Maintains an auditable record for reviews and future improvements.

:::::note
Screenshot placeholder: Photo and notes section
:::::

## Exception List

The list view shows all logged exceptions in a centralized table to help managers review and act quickly.

| Column              | Description                                           |
|---------------------|-------------------------------------------------------|
| Delivery            | Associated delivery or order ID                       |
| Driver              | Driver responsible for the delivery                   |
| Exception Type      | Category of issue (for example, Failed Delivery)      |
| Status              | Pending, Resolved, or Closed                          |
| Logged Date & Time  | Timestamp when the issue was created                  |
| Actions             | View / Edit / Resolve options                          |

Why: Provides an instant snapshot of ongoing and resolved issues for efficient operational control.

:::::note
Screenshot placeholder: Exceptions list table
:::::

## Validation Rules

- **Delivery** and **Driver** are mandatory.
- **Exception Type** and **Status** must be valid selections.
- **Photo URL** (if provided) must be a valid link.
- **Customer contact details** must be properly formatted.
- **Duplicate exceptions** for the same delivery and type are not allowed.

System behavior: If validation fails, the system highlights missing or incorrect fields before submission.

## Best Practices

- Log exceptions as soon as they occur for accuracy.
- Use clear, concise descriptions of issues.
- Attach photos or visual evidence whenever possible.
- Review the exceptions list regularly to identify recurring issues.
- Communicate resolution updates to customers to maintain trust.

:::::note
Screenshot placeholder: Resolved exception view
:::::


