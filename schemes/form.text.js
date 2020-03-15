module.exports = {
  required: true,
  type: 'object',
  properties: {
    type: { required: true, type: 'string' },
    id: { required: true, type: 'string' },
    text: {
      required: true,
      type: 'object',
      properties: {
        link: {
          required: true,
          type: 'object',
          properties: {
            value: { required: true, type: 'string' },
            type: { required: true, type: 'string' },
            action: { required: true, type: 'string' },
            placeholder: { required: true, type: 'string' }
          }
        },
        text: { required: true, type: 'string' },
        relation: { required: true, type: 'string' },
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            fontSize: { required: true, type: 'string' },
            fontFamily: { required: true, type: 'string' },
            textColor: { required: true, type: 'string' },
            textAlign: { required: true, type: 'string' },
            lineHeight: { required: true, type: 'string' },
            fontWeight: { required: true, type: 'string' },
            fontStyle: { required: true, type: 'string' },
            textDecoration: { required: true, type: 'string' }
          }
        }
      }
    }
  }
};
