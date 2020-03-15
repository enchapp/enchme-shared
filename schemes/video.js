module.exports = {
  required: true,
  properties: {
    type: { required: true },
    video: {
      required: true,
      properties: {
        mediaUrl: { required: true },
        historicalColors: { required: true },
        styles: {
          required: true,
          properties: {
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
