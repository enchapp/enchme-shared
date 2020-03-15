module.exports = {
  required: true,
  type: 'object',
  properties: {
    type: { required: true, type: 'string' },
    buttonType: { required: true, type: 'string' },
    id: { required: true, type: 'string' },
    button: {
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
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            fontFamily: { required: true, type: 'string' },
            fontSize: { required: true, type: 'string' },
            textColor: { required: true, type: 'string' },
            fontWeight: { required: true, type: 'string' },
            textDecoration: { required: true, type: 'string' },
            fontStyle: { required: true, type: 'string' },
            color: { required: true, type: 'string' },
            buttonStyle: { required: true, type: 'string' },
            padding: { required: true, type: 'string' },
            borderRadius: { required: true, type: 'string' },
            justifyContent: { required: true, type: 'string' },
            align: {
              required: true,
              type: 'object',
              properties: {
                swap: { required: true, type: 'boolean' },
                align: { required: true, type: 'string' },
                union: { required: true, type: 'boolean' }
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
            },
            border: {
              required: true,
              type: 'object',
              properties: {
                color: { required: true, type: 'string' },
                thick: { required: true, type: 'number' }
              }
            }
          }
        }
      }
    }
  }
};
