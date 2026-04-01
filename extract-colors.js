import { Jimp } from 'jimp';

async function getColors() {
  const image = await Jimp.read('/app/applet/public/logo.png');
  const colors = {};
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const a = this.bitmap.data[idx + 3];
    
    if (a > 10) {
      const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
      colors[hex] = (colors[hex] || 0) + 1;
    }
  });

  const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 20);
  console.log(sorted);
}

getColors().catch(console.error);
