module.exports = {
  required: true,
  properties: {
    components: { required: true },
    settings: {
      required: true,
      properties: {
        fontFamily: { required: true },
        shadow: {
          required: true,
          properties: { name: { required: true }, value: { required: true } }
        },
        mainColor: { required: true },
        shape: {
          required: true,
          properties: { name: { required: true }, value: { required: true } }
        },
        background: {
          required: true,
          properties: {
            src: { required: true },
            type: { required: true },
            color: { required: true }
          }
        }
      }
    },
    fromTemplate: { required: true },
    status: { required: true },
    structureVersion: { required: true }
  }
};
