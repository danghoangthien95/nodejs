var fs = require('fs');

fs.unlink('./public/images/background/16500156_th.jpg', (err) => {
  if (err) throw err;
  console.log('successfully deleted');
});