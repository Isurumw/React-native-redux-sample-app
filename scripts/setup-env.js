const fs = require('fs');
let env = process.argv[2];

if (!env) {
  env = 'qa';
}

let envData = fs.readFileSync(`env/.${env}.env`);

fs.writeFileSync('.env', envData);
