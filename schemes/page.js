module.exports = {
  required: true,
  type: 'object',
  properties: {
    components: { required: true, type: 'array' },
    settings: {
      required: true,
      type: 'object',
      properties: {
        fontFamily: { required: true, type: 'string' },
        shadow: {
          required: true,
          type: 'object',
          properties: {
            name: { required: true, type: 'string' },
            value: { required: true, type: 'string' }
          }
        },
        mainColor: { required: true, type: 'string' },
        shape: {
          required: true,
          type: 'object',
          properties: {
            name: { required: true, type: 'string' },
            value: { required: true, type: 'string' }
          }
        },
        background: {
          required: true,
          type: 'object',
          properties: {
            src: { required: true },
            type: { required: true, type: 'string' },
            color: { required: true, type: 'string' }
          }
        }
      }
    },
    fromTemplate: { required: true },
    structureVersion: { required: true, type: 'string' }
  }
};
