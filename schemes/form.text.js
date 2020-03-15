module.exports = {
  required: true,
  properties: {
    type: { required: true },
    id: { required: true },
    text: {
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
        relation: { required: true },
        historicalColors: { required: true },
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
            textDecoration: { required: true }
          }
        }
      }
    }
  }
};
