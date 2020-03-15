module.exports = {
  required: true,
  properties: {
    type: { required: true },
    line: {
      required: true,
      properties: {
        dividerLineType: { required: true },
        historicalColors: { required: true },
        styles: {
          required: true,
          properties: {
            width: { required: true },
            color: { required: true },
            margin: { required: true },
            padding: { required: true }
          }
        }
      }
    },
    id: { required: true }
  }
};
