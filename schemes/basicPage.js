module.exports = {
  required: true,
  properties: {
    components: { required: true, type: 'array' },
    settings: {
      required: true,
      type: 'object',
    },
    fromTemplate: { required: true },
    status: { required: true },
    structureVersion: { required: true }
  }
};
