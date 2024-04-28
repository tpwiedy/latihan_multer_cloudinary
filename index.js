const express = require('express');
const router = require('./src/routes/router');

const app = express();
const port = process.env.PORT || 3000;

app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  return res
    .status(err.status || 500)
    .send(err.message || 'Internal Server Error');
});

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
