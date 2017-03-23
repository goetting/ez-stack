export default ({ ezState, App }, res) =>
  res.send(
    `<!doctype html>
    <html lang="en">
      <head>
        <title>EZ-APP</title>
        <script type="text/javascript">window.ezState = ${JSON.stringify(ezState)};</script>
      </head>
      <body>
        <div id="ez-app">${App}</div>
        <script type="text/javascript" src="static/client.js"></script>
      </body>
    </html>`,
  );
