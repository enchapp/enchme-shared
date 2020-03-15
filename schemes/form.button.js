module.exports = {
  required: true,
  properties: {
    type: { required: true },
    buttonType: { required: true },
    id: { required: true },
    button: {
      required: true,
      properties: {
        link: {
          required: true,
          properties: {
            value: { required: true },
            type: { required: true },
            action: { required: true },
            placeholder: { required: true }
          }
        },
        text: { required: true },
        historicalColors: { required: true },
        styles: {
          required: true,
          properties: {
            fontFamily: { required: true },
            fontSize: { required: true },
            textColor: { required: true },
            fontWeight: { required: true },
            textDecoration: { required: true },
            fontStyle: { required: true },
            color: { required: true },
            buttonStyle: { required: true },
            padding: { required: true },
            borderRadius: { required: true },
            justifyContent: { required: true },
            align: {
              required: true,
              properties: {
                swap: { required: true },
                align: { required: true },
                union: { required: true }
              }
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
            },
            border: {
              required: true,
              properties: { color: { required: true }, thick: { required: true } }
            }
          }
        }
      }
    }
  }
};
