---
title: Vehicles
sidebar_label: Vehicles
sidebar_position: 3
description: Define vehicles and create them for optimized dispatch and load management.
---

# Vehicles

## What is a Vehicle?

A vehicle represents the physical delivery asset (bike, van, truck, etc.) that carries out orders in your logistics system. Each vehicle is registered and managed to ensure efficient dispatching and accurate load assignments.

Vehicles enable you to:

- **Assign drivers** and match deliveries based on vehicle capacity
- **Track availability** (active/inactive) and maintenance
- **Define requirements** like license type, fuel type, and special features (e.g., refrigeration, GPS)
- **Support optimized routing** and load management for deliveries

Using vehicles ensures the right delivery resources are used for the right tasks—improving delivery accuracy and operational efficiency.

## Create a Vehicle

Follow these steps to add a new vehicle.

### 1) Navigate to Vehicle Creation

Go to the Delivery Management module in your admin portal. Select "Vehicles", then click "Create Vehicle".

### 2) Fill Basic Vehicle Details

- **Vehicle Name**: Enter a clear name for identification (for example, "Delhi Van 01" or "Bike Zone A"). The name appears in dispatch assignments and reports.
- **Vehicle Code**: Enter a unique code (for example, license plate number or a system-generated code).
  - The code must be unique and contain no spaces or unauthorized characters.
  - Codes help the system track vehicles automatically and prevent duplication.
- **Description** (optional): Add details such as usage purpose, depot location, or maintenance notes.
- **Image** (optional): Upload a photo of the vehicle for easy visual identification.

### 3) Set Capacity Unit

- **Capacity Unit**: Defines the maximum carrying capacity of the vehicle. The system uses this to decide how many orders can be assigned during dispatch.
- **Standard unit size**: 1 unit = 20 cm and 0.5 kg
- **Example**: A truck with capacity 300 units can carry a total equivalent of 300 × (20 cm, 0.5 kg) worth of packages.

::::info
Why it matters: The system automatically uses capacity to prevent overloading and ensures efficient vehicle utilization.
::::

### 4) Configure Vehicle Requirements

These define what kind of deliveries this vehicle can handle.

- **License Type**: Choose between Standard, Commercial, or Special to ensure proper licensing for specific order types.
- **Fuel Type**: Select Petrol, Diesel, Electric, or Hybrid for sustainability tracking, cost calculations, and routing.
- **Special Features**: Tick applicable features such as Lift Gate, Refrigeration, and GPS Tracking to match vehicle capabilities with delivery needs (for example, temperature-controlled shipments).

### 5) Set Vehicle Status

- **Status (Active/Inactive)**:
  - Active vehicles are available for delivery assignments.
  - Inactive vehicles are excluded from dispatch (for example, during maintenance or downtime).
  - Keep inactive vehicles in the system without deleting them for historical context and future reactivation.

### 6) Review & Confirm

Double-check all details—especially the vehicle code and capacity. Click **Create Vehicle** to save.

If required fields are missing or entries are invalid (such as duplicate codes), the system displays an error. Fix the issues and resubmit. Once created, the vehicle appears in the vehicle list, ready for driver assignment and dispatch operations.

## Notes

::::note
Inactive vehicles are ignored by the dispatch system—use this to temporarily pause usage without deleting the vehicle.
::::

::::tip
Accurate capacity ensures load distribution and route optimization work correctly.
::::

::::info
Vehicle requirements help filter and assign the right vehicle for specialized deliveries (for example, cold storage).
::::


