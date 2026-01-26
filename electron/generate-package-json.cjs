const fs = require('fs');
const path = require('path');

const dest = path.join(__dirname, '../dist-electron/package.json');
const content = { type: 'commonjs' };

// Ensure the directory exists
if (!fs.existsSync(path.dirname(dest))) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
}

fs.writeFileSync(dest, JSON.stringify(content, null, 2));
console.log('Generated dist-electron/package.json with type: commonjs');
