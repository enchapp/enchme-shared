module.exports = {
  required: true,
  type: 'object',
  properties: {
    type: { required: true, type: 'string' },
    line: {
      required: true,
      type: 'object',
      properties: {
        dividerLineType: { required: true, type: 'string' },
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            width: { required: true, type: 'number' },
            color: { required: true, type: 'string' },
            margin: { required: true, type: 'string' },
            padding: { required: true, type: 'string' }
          }
        }
      }
    },
    id: { required: true, type: 'string' }
  }
};
