module.exports = {
  required: true,
  type: 'object',
  properties: {
    type: { required: true, type: 'string' },
    components: { required: true, type: 'array' },
    id: { required: true, type: 'string' }
  }
};
