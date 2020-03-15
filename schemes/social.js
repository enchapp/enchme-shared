module.exports = {
  required: true,
  type: 'object',
  properties: {
    type: { required: true, type: 'string' },
    renderedElems: { required: true, type: 'number' },
    icon_1: {
      required: true,
      type: 'object',
      properties: {
        id: { required: true, type: 'string' },
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
        group: { required: true, type: 'string' },
        historicalColors: { required: true, type: 'array' },
        type: { required: true, type: 'string' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            color: { required: true, type: 'string' },
            borderRadius: { required: true, type: 'string' },
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
    },
    icon_2: {
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
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            borderRadius: { required: true, type: 'string' },
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
    },
    icon_3: {
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
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            borderRadius: { required: true, type: 'string' },
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
    },
    icon_4: {
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
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            borderRadius: { required: true, type: 'string' },
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
    },
    icon_5: {
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
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            borderRadius: { required: true, type: 'string' },
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
    },
    icon_6: {
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
        historicalColors: { required: true, type: 'array' },
        styles: {
          required: true,
          type: 'object',
          properties: {
            borderRadius: { required: true, type: 'string' },
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
    },
    id: { required: true, type: 'string' }
  }
};
