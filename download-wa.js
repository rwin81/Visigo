import fs from 'fs';
import https from 'https';

async function download() {
  try {
    // Fetch the HTML page
    const html = await new Promise((resolve, reject) => {
      https.get('https://ibb.co.com/qF7NjyxQ', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }).on('error', reject);
    });

    // Extract the direct image URL
    const match = html.match(/<link rel="image_src" href="([^"]+)"/);
    if (!match) {
      console.error('Could not find image URL');
      return;
    }
    const imageUrl = match[1];
    console.log('Found image URL:', imageUrl);

    // Download the image
    await new Promise((resolve, reject) => {
      https.get(imageUrl, (res) => {
        const fileStream = fs.createWriteStream('/app/applet/public/wa-logo.png');
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log('Downloaded successfully to public/wa-logo.png');
          resolve();
        });
      }).on('error', reject);
    });
  } catch (err) {
    console.error(err);
  }
}

download();
