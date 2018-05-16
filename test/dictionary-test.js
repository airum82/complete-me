const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

import fs from 'fs';