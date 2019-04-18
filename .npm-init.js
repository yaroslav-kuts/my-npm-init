const fs = require('fs');

const cwd = process.cwd();
const name = cwd.split('/').pop();
const main = 'index.js';

(async () => {
    await fs.promises.writeFile(`${cwd}/${main}`, 'console.log("Hello World!")');
})();

module.exports = {
  name,
  version: '1.0.0',
  main,
  scripts: {
    start: 'node index.js',
    test: 'echo \"Error: no test specified\" && exit 1',
  },
  author: 'Yaroslav Kuts',
  license: 'MIT',
}
