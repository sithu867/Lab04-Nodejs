const fs = require('fs');

fs.writeFile('file.txt', 'Hello from writeFile example!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});