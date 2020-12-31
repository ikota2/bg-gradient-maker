export function getSvg(value) {
  const namespaced = addNameSpace(value);
  const escaped = encodeSVG(namespaced);
  return `data:image/svg+xml,${escaped}`;
}

function addNameSpace(data) {
  if (data.indexOf(`http://www.w3.org/2000/svg`) < 0) {
    data = data.replace(/<svg/g, `<svg xmlns="http://www.w3.org/2000/svg"`);
  }

  return data;
}

function encodeSVG(data) {
  // Use single quotes instead of double to avoid encoding.
  data = data.replace(/"/g, `'`);

  data = data.replace(/>\s{1,}</g, `><`);
  data = data.replace(/\s{2,}/g, ` `);

  // Using encodeURIComponent() as replacement function
  // allows to keep result code readable
  const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;

  return data.replace(symbols, encodeURIComponent);
}

// Get quotes for levels
// ----------------------------------------
