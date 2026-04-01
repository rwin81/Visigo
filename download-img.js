import https from 'https';
import fs from 'fs';

const file = fs.createWriteStream('/app/applet/public/logo.png');
https.get('https://i.ibb.co/FLfp65gD/VISIGO-LOGO.png', (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download complete');
  });
}).on('error', (err) => {
  fs.unlink('/app/applet/public/logo.png', () => {});
  console.error('Error downloading:', err.message);
});
