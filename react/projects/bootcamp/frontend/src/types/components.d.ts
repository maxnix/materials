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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'bootcamp.activity': BootcampActivity;
    }
  }
}
