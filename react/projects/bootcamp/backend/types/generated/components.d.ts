import type { Schema, Attribute } from '@strapi/strapi';

export interface BootcampActivity extends Schema.Component {
  collectionName: 'components_bootcamp_activities';
  info: {
    displayName: 'Activity';
    icon: 'briefcase';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

export interface StripeProduct extends Schema.Component {
  collectionName: 'components_stripe_products';
  info: {
    displayName: 'Product';
    icon: 'archive';
  };
  attributes: {
    payment_link: Attribute.String;
    product_id: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'bootcamp.activity': BootcampActivity;
      'stripe.product': StripeProduct;
    }
  }
}
