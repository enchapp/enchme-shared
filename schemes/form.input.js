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
        text: { required: true, type: 'string' },
        historicalColors: { required: true, type: 'array' },
        placeholder: { required: true, type: 'string' },
        inputType: { required: true, type: 'string' },
        relation: { required: true, type: 'string' },
        name: { required: true, type: 'string' },
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
            textDecoration: { required: true, type: 'string' },
            color: { required: true, type: 'string' },
            borderRadius: { required: true, type: 'string' },
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
    }
  }
};
