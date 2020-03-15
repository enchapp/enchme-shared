module.exports = {
  required: true,
  properties: {
    type: { required: true },
    image: {
      required: true,
      properties: {
        mediaUrl: { required: true },
        link: {
          required: true,
          properties: {
            value: { required: true },
            type: { required: true },
            action: { required: true },
            placeholder: { required: true }
          }
        },
        historicalColors: { required: true },
        styles: {
          required: true,
          properties: {
            aspect: { required: true },
            height: { required: true },
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
    },
    id: { required: true }
  }
};
