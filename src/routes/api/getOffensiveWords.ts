import express, {
  Request, Response, Router,
} from 'express';
import dbConnect from '../../helpers/dbConnect';

const router: Router = express.Router();

// Get all words
router.get('/', async (req: Request, res: Response) => {
  dbConnect().query('SELECT * from offensiveWords', (err, results) => {
    if (err) {
      res.status(401).json({ err, message: 'Something wrong' });
      throw err;
    }

    res.status(201).json({ results });
  });
});

// Create word by req
router.post('/', async (req: Request, res: Response) => {
  const { word } = req.body;

  dbConnect().query(`INSERT INTO offensiveWords VALUE ('${word}');`, (err) => {
    if (err) {
      res.status(401).json({ err, message: 'This word already exist!' });
      throw err;
    }

    res.status(201).json({
      message: `Word: ${word} saved`,
    });
  });
});

// Delete word by req
router.delete('/', async (req: Request, res: Response) => {
  const { word } = req.body;

  dbConnect().query(`DELETE FROM offensiveWords WHERE word = '${word}';`, (err) => {
    if (err) {
      res.status(401).json({ err, message: 'This word NOT exist!' });
      throw err;
    }

    res.status(200).json({
      message: `Word: ${word} deleted!`,
    });
  });
});

export default router;
