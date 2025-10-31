---
title: Assignments
sidebar_label: Assignments
sidebar_position: 6
description: Create, view, and manage delivery assignments to drivers and vehicles.
---

## Overview

The Assignments module in the Tenant Admin portal (under Delivery Management) manages how deliveries are assigned to drivers and vehicles. It defines who is responsible for a delivery, when it was assigned, and how it progresses through stages — ensuring smooth coordination between dispatchers, drivers, and operations teams.

Assignments provide visibility, accountability, and control over the entire last‑mile delivery process.

:::::note
Screenshot placeholder: Assignments overview page
:::::

## What is an Assignment?

An Assignment connects a delivery order to a specific driver and vehicle. It records details such as:

- **Assigned By**: Who created the assignment
- **Assigned To**: Which driver is handling it
- **Vehicle**: Which vehicle is used
- **Assignment Time**: When it was created
- **Delivery Code**: The related delivery order code

This structure enables efficient tracking of each delivery’s progress, from assignment to final completion.

:::::note
Screenshot placeholder: Assignment details view
:::::

## Purpose

The Assignments section allows administrators and operations managers to:

- **Allocate** deliveries to available drivers and vehicles.
- **Track** who created, received, and completed each assignment.
- **Monitor** real‑time statuses like Assigned, Pickup, In‑Transit, and Completed.
- **Create** manual assignments or review system‑generated ones.

:::::note
Screenshot placeholder: Assignments module overview
:::::

## Creating an Assignment

From the Assignments page, select **Add Assignment** (or **Create New Assignment**). The creation form includes the fields below.

:::::note
Screenshot placeholder: Add Assignment form
:::::

### 1) Delivery Selection

- **Delivery**: Select the delivery order to assign.
  - Why: Links the assignment to the correct shipment for tracking and accountability.

### 2) Driver Selection

- **Driver**: Choose the driver responsible for executing the delivery.
  - Why: Ensures clear ownership and performance tracking.

### 3) Vehicle Selection

- **Vehicle**: Pick the vehicle to be used for the delivery.
  - Why: Matches capacity and delivery needs with the appropriate vehicle.

### 4) Timing Information

- **Assignment Time**: Set when the assignment is created or becomes effective.
  - Why: Helps optimize dispatch schedules and route planning.
- **Expected Delivery Time** (optional): Provide an ETA if applicable.
  - Why: Improves forecasting and customer expectations.

### 5) Notes

- **Notes** (optional): Add special instructions or comments for the driver.
  - Why: Keeps drivers informed about unique delivery conditions.

:::::note
Screenshot placeholder: Assignment details section
:::::

## Assignment List

After assignments are created, they appear in a structured table for quick access and management. Each record typically shows:

- **Assigned By**: The user who created the assignment
- **Assigned To**: The driver handling the delivery
- **Vehicle**: The assigned vehicle
- **Assignment Time**: The timestamp when it was created
- **Delivery Code**: The delivery identifier linked to the assignment
- **Status**: The current stage of the assignment

Why: Provides a clear, centralized view of delivery operations and driver workloads.

:::::note
Screenshot placeholder: Assignment list table
:::::

## Status Tracking

Every assignment progresses through a fixed status flow as deliveries move through their lifecycle:

| Status     | Description                                                     |
|------------|-----------------------------------------------------------------|
| Assigned   | Delivery has been allocated to a driver but not yet started.    |
| Pickup     | Driver is collecting the package from the origin location.      |
| In‑Transit | The package is on its way to the destination.                   |
| Completed  | Delivery is finished and confirmed.                             |

Why: Enables real‑time monitoring of each delivery’s journey and helps resolve issues proactively.

:::::note
Screenshot placeholder: Assignment status timeline
:::::

## Validation Rules

To ensure clean data and consistent operations:

- **Delivery**, **Driver**, and **Vehicle** selections are mandatory.
- **Assignment Time** must be valid and cannot be empty.
- Duplicate active assignments for the same delivery are not allowed.
- Status updates follow a strict sequence: Assigned → Pickup → In‑Transit → Completed.
- **Notes** are optional but recommended for clarity.
- The system highlights missing or invalid inputs during validation.

## Best Practices

- **Verify availability** of driver and vehicle before assignment.
- **Match vehicle** to package size, route, and distance.
- **Add detailed notes** to reduce communication gaps.
- **Review statuses regularly** to ensure on‑time completion.
- **Monitor workload balance** via the Assignment List to identify performance trends.


