const fs = require('fs');
const path = require('path');
const util = require('util');
const example = require('./example.json');

// get correct type name
const getType = v => {
  if (v === null) {
    return null;
  }

  if (Array.isArray(v)) {
    if (!v.length) {
      console.warn(`Array doesn't have any value to detect its type`);
    } if (v.length > 0 && typeof v[0] === 'object') {
      console.warn(`Array has object values inside, be sure you cover it with validation too`);
    }

    return 'array';
  }
  return typeof v;
};

// save scheme
const save = (name, value) => {
  fs.writeFileSync(path.resolve(`${__dirname}/${name}.js`), `module.exports = ${util.inspect(value, false, null)};\n`, 'utf8');
  console.info(`Scheme "${name}" generated.`);
}

const getScheme = (obj) => {
  const scheme = {
    required: true,
  };
  const type = getType(obj);
  // if (type) {
  //   scheme.type = type;
  // }

  if (type === 'object') {
    scheme.properties = {};

    Object.keys(obj).forEach((key) => {
      scheme.properties[key] = getScheme(obj[key]);
    });
  }

  return scheme;
}

// 1. begin with page
const pageScheme = getScheme(example);
save('page', pageScheme);

// 2. generate schemes for components
example.components.forEach((component) => {
  const componentScheme = getScheme(component);

  if (component.type === 'form') {   
    component.components.forEach((subComponent) => {
      const subComponentScheme = getScheme(subComponent);
      save(`form.${subComponent.type}`, subComponentScheme);
    });
  }
  
  save(component.type, componentScheme);
});
