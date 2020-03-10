module.exports = {
  required: true,
  type: 'object',
  properties: {
    settings: {
      required: true,
      type: 'object'
    },
    components: {
      required: true,
      type: 'array'
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
