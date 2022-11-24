import express, { Application } from 'express';
import path from 'path';

const app: Application = express();

// port
const port = process.env.PORT || 5000;

// serve the client
app.get('/*', (req, res) => {
  res.send('hI');
});

// start express server on port 5000
app.listen(port, () => {
  console.info(`server started on port ${port}`);
});

export default app;
