module.exports = {
  required: true,
  type: 'object',
  properties: {
    type: { required: true, type: 'string' },
    embed: {
      required: true,
      type: 'object',
      properties: {
        mediaUrl: { required: true, type: 'string' },
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            border: {
              required: true,
              type: 'object',
              properties: {
                color: { required: true, type: 'string' },
                thick: { required: true, type: 'number' }
              }
            },
            shadow: {
              required: true,
              type: 'object',
              properties: {
                active: { required: true, type: 'boolean' },
                color: { required: true, type: 'string' },
                positionX: { required: true, type: 'number' },
                positionY: { required: true, type: 'number' },
                blur: { required: true, type: 'number' },
                spread: { required: true, type: 'number' }
              }
            }
          }
        }
      }
    },
    id: { required: true, type: 'string' }
  }
};
