export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  { name: "strapi::body", config: { includeUnparsed: true } }, // add this  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
