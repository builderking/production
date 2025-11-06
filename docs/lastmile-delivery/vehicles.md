---
title: Vehicles
sidebar_label: Vehicles
sidebar_position: 3
description: Define vehicles and create them for optimized dispatch and load management.
---

# Vehicles

## What is a Vehicle?

A vehicle represents the physical delivery asset (bike, van, truck, etc.) that carries out deliveries in the system. Each vehicle profile includes identification details, capacity specifications, technical requirements, and operational status. Vehicle profiles enable the system to match deliveries to appropriate transport resources, ensure load optimization, and maintain efficient dispatch workflows based on capacity and special requirements.

## Vehicle List

The Vehicle List provides a comprehensive view of all registered vehicles in your delivery fleet.

Use the list to monitor vehicle availability, verify specifications, and manage assignments. The interface includes:

- **Search functionality**: Quickly locate vehicles by name, code, or license plate.
- **Filtering options**: Filter vehicles by status (Active/Inactive), fuel type, capacity range, or special features.
- **Sorting capabilities**: Sort by name, code, capacity, or recent activity.
- **Quick actions**: Access vehicle details, edit profiles, or change status directly from the list.

The list displays key information such as vehicle name, unique code, capacity units, assigned driver, fuel type, and current status for easy reference.

## Create a New Vehicle

Creating a vehicle profile requires entering key information across several categories to ensure accurate load management and operational efficiency.

### Basic Information

Provide the vehicle's identification details including a descriptive name (e.g., "Delhi Van 01" or "Bike Zone A"), unique vehicle code (e.g., license plate number or system code), and an optional description. The vehicle code must be unique and contain no spaces or unauthorized characters to ensure accurate tracking and prevent duplication. Optionally upload a vehicle image for easy visual identification in dispatch interfaces and reports.

### Capacity & Load Specifications

Define the vehicle's maximum carrying capacity using capacity units. The standard unit size is 1 unit = 20 cm and 0.5 kg. For example, a truck with capacity 300 units can carry a total equivalent of 300 × (20 cm, 0.5 kg) worth of packages. The system uses this capacity metric during dispatch to automatically calculate load assignments, prevent overloading, and ensure efficient vehicle utilization across deliveries.

### Vehicle Requirements & Features

Specify the vehicle's operational characteristics to match it with appropriate delivery types. Select the required license type (Standard, Commercial, or Special) to ensure driver licensing compliance. Choose the fuel type (Petrol, Diesel, Electric, or Hybrid) for sustainability tracking, cost calculations, and routing preferences. Add special features such as Lift Gate, Refrigeration, or GPS Tracking to match vehicle capabilities with specific delivery needs like temperature-controlled shipments or real-time tracking requirements.

### Status & Availability

Set the vehicle's operational status (Active or Inactive). Active vehicles are available for delivery assignments and appear in dispatch operations. Inactive status excludes vehicles from dispatch during maintenance, downtime, or decommissioning while preserving historical records for reporting and future reactivation.

### Validation

The system validates all required fields and enforces business rules. Vehicle codes must be unique, capacity must be a positive value, and mandatory fields (name, code, capacity) must be completed before submission. Any validation errors are highlighted for correction.

## Edit an Existing Vehicle

Vehicle profiles can be updated at any time to reflect changes in specifications, assignments, or availability.

Common updates include:

- **Capacity adjustments**: Update capacity units to reflect vehicle modifications or recalibrations.
- **Requirement changes**: Modify license type, fuel type, or special features as vehicle specifications change.
- **Status changes**: Toggle between Active and Inactive status for maintenance, repairs, or seasonal usage.
- **Identification updates**: Modify vehicle name, code, or description for better organization.
- **Feature updates**: Add or remove special features as vehicles are retrofitted or upgraded.
- **Driver reassignment**: Update vehicle-driver assignments based on operational needs.

Editing vehicle profiles ensures accurate dispatch operations, maintains optimal load distribution, and supports dynamic fleet management. The system retains historical assignment data for reporting and auditing purposes.

::::note
Keep vehicle profiles updated—especially capacity and status details—to maintain accurate dispatch operations and prevent overloading.
::::

::::tip
Accurate capacity ensures load distribution and route optimization work correctly. Use consistent naming formats (e.g., `VEH-1001` or license plates) for easier fleet management.
::::

::::info
Mark vehicles as Inactive instead of deleting them if they are temporarily unavailable. This preserves historical data and allows for easy reactivation after maintenance or repairs.
::::


