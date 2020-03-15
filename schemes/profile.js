module.exports = {
  required: true,
  properties: {
    type: { required: true },
    profileImage: {
      required: true,
      properties: {
        mediaUrl: { required: true },
        resourceType: { required: true },
        styles: {
          required: true,
          properties: {
            align: {
              required: true,
              properties: {
                swap: { required: true },
                align: { required: true },
                union: { required: true }
              }
            },
            borderRadius: { required: true },
            height: { required: true },
            width: { required: true },
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
    },
    title: {
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
            textAlign: { required: true },
            textColor: { required: true },
            fontFamily: { required: true },
            fontSize: { required: true },
            lineHeight: { required: true },
            fontStyle: { required: true },
            fontWeight: { required: true },
            textDecoration: { required: true }
          }
        }
      }
    },
    body: {
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
            textAlign: { required: true },
            textColor: { required: true },
            fontFamily: { required: true },
            fontSize: { required: true },
            lineHeight: { required: true },
            fontStyle: { required: true },
            fontWeight: { required: true },
            textDecoration: { required: true }
          }
        }
      }
    },
    id: { required: true }
  }
};
