module.exports = {
  required: true,
  type: 'object',
  properties: {
    globalSettings: {
      required: true,
      type: 'object'
    },
    components: {
      required: true,
      type: 'array'
    },
    showEnchLogo: {
      required: true,
      type: 'boolean'
    },
    source: {
      required: true,
      type: 'string',
    },
    fromTemplate: {
      required: true,
    },
    structureVersion: {
      required: true,
      type: 'string',
    },
  },
};
