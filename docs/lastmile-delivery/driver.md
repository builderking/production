---
title: Drivers
sidebar_label: Drivers
sidebar_position: 4
description: Define drivers and create driver profiles for compliant, efficient delivery operations.
---

# Drivers

## What is a Driver?

A driver represents the individual responsible for carrying out deliveries in the system. Each driver is registered and managed to ensure proper assignment to vehicles, compliance with license requirements, and efficient delivery operations.

Driver profiles help the system match deliveries to qualified personnel and maintain smooth dispatch workflows. Users can manage all drivers used for delivery operations. Each driver has their own basic information, license and certifications, assignments (vehicle and zones), and operational status.

## Create a Driver

Follow these steps to add a new driver.

### 1) Navigate to Driver Creation

Go to the Delivery Management module in your admin portal. Select "Drivers", then click "Add Driver".

### 2) Fill Basic Driver Details

Provide the driver’s general information to identify them throughout the system.

- **Full Name**: Enter the driver’s complete name. This appears across dispatch, tracking, and reporting modules.
- **Driver Code / ID**: Enter a unique identifier (for example, `DRV-001` or `DLK123`).
  - Codes must not include spaces or unauthorized characters.
  - Why it matters: Unique codes ensure accurate tracking and prevent assignment errors.
- **Contact Details**: Add the driver’s phone number and/or email address for communications and notifications.
- **Profile Image** (optional): Upload a photo for quick visual identification in driver lists and dashboards.

### 3) Enter License & Certifications

Ensure the driver meets the necessary compliance requirements for operation.

- **License Number and Type**: Enter the license number and select the type — Standard, Commercial, or Special.
  - Why it matters: Certain vehicles or delivery types require specific license categories.
- **License Expiry Date**: Enter the expiration date. The system uses this to trigger reminders before expiry and prevent dispatching unlicensed drivers.
- **Certifications & Skills** (optional): Add qualifications such as Forklift Certified, Hazmat Training, or Refrigeration Handling.
  - Why it matters: Helps match drivers with the right delivery requirements.

### 4) Set Assignments & Operational Settings

Define how and where a driver operates in your delivery network.

- **Assigned Vehicle**: Select a registered vehicle to link with this driver.
  - Why it matters: Ensures accurate pairing of vehicle and driver during dispatch.
- **Assigned Zones**: Select one or more service zones where the driver will operate.
  - Why it matters: Restricts delivery assignments to defined areas, improving efficiency and route planning.
- **Driver Preferences**: Add notes about preferred routes, handling instructions, or operational preferences.
- **Languages**: Choose the languages the driver speaks, useful for customer interactions or regional deliveries.

### 5) Set Status & Access

Define whether the driver is currently active and if they can access the driver application.

- **Status (Active/Inactive)**:
  - Active: The driver can be assigned to deliveries.
  - Inactive: The driver is excluded from dispatch (useful for leave or downtime).
- **Login / App Access**: Specify whether this driver can log in to the mobile app or portal for delivery tracking and updates.

### 6) Review & Create

Before saving, review all entered details and click **Create Driver** to confirm.

If any required field is missing or invalid (for example, duplicate code or past license expiry), the system shows an error. Correct the highlighted issues and submit again.

## Validation Rules

- **Unique Driver Code**: Driver code/ID must be unique — duplicates are not allowed.
- **Valid License Expiry**: License expiry date cannot be in the past.
- **Mandatory Fields**: Name, contact, and license number must be filled before submission.
- The system validates all fields and highlights missing or invalid entries.

## Notes

::::note
Keep driver profiles updated—especially license and expiry details—to maintain compliance.
::::

::::tip
Assign zones strategically for optimized routing and balanced workloads.
::::

::::info
Use consistent naming or code formats (for example, `DRV-1001`) for better management. Mark drivers as Inactive instead of deleting them if they are temporarily unavailable.
::::


