import express, { Application } from 'express';
import path from 'path';
import dbConnect from './helpers/dbConnect';
import getOffensiveWords from './routes/api/getOffensiveWords';
import getReportedWords from './routes/api/getReportedWords';

const app: Application = express();

// Port
const port = process.env.PORT || 5000;

// Connect to the DB
// dbConnect();

// Add routes
app.use(express.json());
// app.use('/api/get-offensive-words', getOffensiveWords);
// app.use('/api/get-reported-words', getReportedWords);

// Serve the client
app.use(express.static(path.join(path.resolve(), 'client', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'client', 'dist', 'index.html'));
});

// Start express server on port 5000
app.listen(port, () => {
  console.info(`server started on port ${port}`);
});

export default app;
