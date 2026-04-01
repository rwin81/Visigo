import https from 'https';

https.get('https://i.ibb.co/FLfp65gD/VISIGO-LOGO.png', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(e);
});
