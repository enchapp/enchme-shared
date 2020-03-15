module.exports = {
  required: true,
  properties: {
    type: { required: true },
    id: { required: true },
    text: {
      required: true,
      properties: {
        text: { required: true },
        historicalColors: { required: true },
        placeholder: { required: true },
        inputType: { required: true },
        relation: { required: true },
        name: { required: true },
        styles: {
          required: true,
          properties: {
            fontSize: { required: true },
            fontFamily: { required: true },
            textColor: { required: true },
            textAlign: { required: true },
            lineHeight: { required: true },
            fontWeight: { required: true },
            fontStyle: { required: true },
            textDecoration: { required: true },
            color: { required: true },
            borderRadius: { required: true },
            border: {
              required: true,
              properties: { color: { required: true }, thick: { required: true } }
            },
            shadow: {
              required: true,
              properties: {
                active: { required: true },
                color: { required: true },
                positionX: { required: true },
                positionY: { required: true },
                blur: { required: true },
                spread: { required: true }
              }
            }
          }
        }
      }
    }
  }
};
