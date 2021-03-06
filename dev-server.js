// this file was created for an alternate dev server because the npm run dev doesnt expose the port on local area network for some reason, but express server exposes it.
// on code update npm run build is required and no need to restart the server

const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use((req, res, next) => {
  res.set({
    // 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Cache-Control': 'max-age=604800, public',
    'Strict-Transport-Security': 'max-age=31536000; preload',
    'X-Frame-Options': 'deny',
    'X-XSS-Protection': '1; mode=block'
  });
  return next();
});

app.use(function(req,res,next) {
  // if(req.headers["x-forwarded-proto"] == "http") {
  //   res.redirect("https://www.eraswap.life" + req.url);
  // } else {
    return next();
  // }
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

// app.get("*", function(request, response){
//   response.redirect("https://" + request.headers.host + request.url);
// });

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on PORT ${port}`));
