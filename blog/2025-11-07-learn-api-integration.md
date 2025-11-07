---
slug: learn-api-integration
title: API Integration Guide
authors: [ondi-team]
tags: [api, integration, developers, automation]
category: Integration
---

Ondi provides a comprehensive REST API that allows you to integrate your systems with Ondi's logistics platform. This guide will help you understand how to use APIs to connect with Ondi and automate your operations.

<!-- truncate -->

## Overview

The Ondi API enables you to programmatically interact with all aspects of the platform, including order management, inventory tracking, delivery coordination, and more. Whether you're building a custom application or integrating with existing systems, the API provides the flexibility you need.

## Getting Started

### Step 1: Obtain API Keys

Before you can use the API, you need to get your API keys:

1. Navigate to **Settings** → **API Key Management**
2. Click **Create New API Key**
3. Configure key permissions:
   - Read access for retrieving data
   - Write access for creating/updating records
   - Admin access for full system control
4. Copy and securely store your API key

### Step 2: Understand API Authentication

All API requests require authentication:

```bash
# Include your API key in the Authorization header
Authorization: Bearer YOUR_API_KEY
```

### Step 3: Base URL

All API requests are made to:

```
https://api.ondi.io/v1
```

## API Endpoints Overview

### Delivery Management

**Create Delivery Order**
```http
POST /deliveries
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "customer": {
    "name": "John Doe",
    "phone": "+1234567890",
    "address": "123 Main St, City, State"
  },
  "items": [
    {
      "name": "Product Name",
      "quantity": 1,
      "weight": 2.5
    }
  ],
  "delivery_zone": "zone_id",
  "service_type": "standard"
}
```

**Get Delivery Status**
```http
GET /deliveries/{delivery_id}
Authorization: Bearer YOUR_API_KEY
```

**Update Delivery**
```http
PATCH /deliveries/{delivery_id}
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "status": "delivered",
  "notes": "Delivered successfully"
}
```

### Warehouse Management

**Check Inventory**
```http
GET /warehouses/{warehouse_id}/inventory
Authorization: Bearer YOUR_API_KEY
```

**Create Picking Order**
```http
POST /warehouses/{warehouse_id}/picking-orders
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "order_id": "order_123",
  "items": [
    {
      "sku": "SKU001",
      "quantity": 5
    }
  ]
}
```

**Update Inventory**
```http
PATCH /warehouses/{warehouse_id}/inventory/{item_id}
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "quantity": 100,
  "action": "adjust"
}
```

### Order Management

**Create Order**
```http
POST /orders
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "customer_id": "customer_123",
  "items": [
    {
      "product_id": "prod_456",
      "quantity": 2
    }
  ],
  "delivery_address": "123 Main St",
  "payment_method": "card"
}
```

**Get Order Details**
```http
GET /orders/{order_id}
Authorization: Bearer YOUR_API_KEY
```

**Cancel Order**
```http
POST /orders/{order_id}/cancel
Authorization: Bearer YOUR_API_KEY
```

## Common Integration Scenarios

### E-commerce Integration

Integrate your online store with Ondi:

1. **Order Creation** - When a customer places an order, create it via API
2. **Inventory Check** - Verify stock availability before order confirmation
3. **Delivery Request** - Automatically create delivery orders
4. **Status Updates** - Receive webhook notifications for order status changes

### Warehouse Management System Integration

Connect your WMS with Ondi:

1. **Inventory Sync** - Sync inventory levels in real-time
2. **Receiving** - Create receiving orders when stock arrives
3. **Picking** - Generate picking orders for fulfillment
4. **Stock Adjustments** - Update inventory levels automatically

### Third-party Logistics Integration

Integrate with 3PL providers:

1. **Order Import** - Import orders from external systems
2. **Fulfillment** - Coordinate fulfillment across systems
3. **Tracking** - Sync tracking information
4. **Reporting** - Aggregate data from multiple sources

## Webhooks

Set up webhooks to receive real-time notifications:

### Configure Webhook

```http
POST /webhooks
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "url": "https://your-server.com/webhooks/ondi",
  "events": [
    "delivery.created",
    "delivery.updated",
    "order.completed"
  ]
}
```

### Webhook Events

Common webhook events include:

- `delivery.created` - New delivery order created
- `delivery.assigned` - Delivery assigned to driver
- `delivery.in_transit` - Delivery in progress
- `delivery.completed` - Delivery completed
- `order.created` - New order created
- `order.fulfilled` - Order fulfilled
- `inventory.low_stock` - Low stock alert

### Webhook Security

Verify webhook signatures:

```python
import hmac
import hashlib

def verify_webhook_signature(payload, signature, secret):
    expected_signature = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(signature, expected_signature)
```

## Rate Limits

API rate limits ensure fair usage:

- **Standard Tier**: 1000 requests per hour
- **Professional Tier**: 10000 requests per hour
- **Enterprise Tier**: Custom limits

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1609459200
```

## Error Handling

Handle API errors appropriately:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request is missing required fields",
    "details": {
      "field": "customer.address",
      "reason": "required"
    }
  }
}
```

Common error codes:
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Rate Limit Exceeded
- `500` - Internal Server Error

## Best Practices

1. **Secure API Keys** - Never expose API keys in client-side code
2. **Error Handling** - Implement robust error handling
3. **Rate Limiting** - Respect rate limits and implement retry logic
4. **Webhooks** - Use webhooks for real-time updates instead of polling
5. **Idempotency** - Use idempotency keys for critical operations
6. **Logging** - Log all API interactions for debugging
7. **Testing** - Test integrations thoroughly before production

## SDKs and Libraries

Ondi provides SDKs for popular languages:

- **JavaScript/TypeScript** - `npm install @ondi/sdk`
- **Python** - `pip install ondi-sdk`
- **PHP** - `composer require ondi/sdk`
- **Ruby** - `gem install ondi-sdk`

## Testing

Use the sandbox environment for testing:

```
https://api-sandbox.ondi.io/v1
```

Sandbox API keys are available in your dashboard under API Key Management.

## Documentation

For complete API documentation:

- Visit [API Documentation](https://api-docs.ondi.io)
- Explore interactive API explorer
- Review code examples and tutorials
- Check changelog for updates

## Next Steps

1. **Get API Keys** - Set up your API keys in the dashboard
2. **Review Documentation** - Read the complete API reference
3. **Test Integration** - Use the sandbox environment
4. **Implement Webhooks** - Set up real-time notifications
5. **Go Live** - Deploy your integration

For more information, visit our [API Documentation](https://api-docs.ondi.io) or check the [API Key Management guide](/settings/api-key-management/overview).

