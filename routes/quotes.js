import express from 'express';
import {quotes} from "../data/quotes.js";

//Creating an Express router
const quotesRouter = express.Router();

//Defining GET routes

// quotesRouter.get((req, res, next) => {
//   console.log(`Quotes Router ${req.url}`);
//   next()
// });

quotesRouter.get('/', (req, res) => {
  res.render('quotes', {quotes});
});

//GET by ID
quotesRouter.get('/:id', (req, res, next) => {
  console.log(req.params);
  const quotes = quotes.find((quotes) => quotes.id === req.params.id);
 
  if (!quotes) {
    res.status(404).json({ message: 'Quote not found' });
  } else {
    res.json(quotes);
  }
});

//POST route
quotesRouter.post("/", (req, res) => {
  console.log(req.body);

  if (req.body.text && req.body.author) {
    if (text.find((u) => u.text == req.body.text)) {
      res.json({ error: "Quote already existed" });
      return;
    }

    const quote = {
      id: quotes[quotes.length - 1].id + 1,
      text: req.body.text,
      author: req.body.author,
      category: req.body.category,
    };

    quotes.push(quote);
    res.json(quotes[quotes.length - 1]);
  }
});

//PUT Request
quotesRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { author, text } = req.body;

  const quoteIndex = quotes.findIndex(q => q.id === id);

  if (quoteIndex !== -1) {
    quotes[quoteIndex] = { id, author, text };
    res.json({ message: 'Quote updated successfully' });
  } else {
    res.status(404).json({ message: 'Quote not found' });
  }
});

//Define a DELETE Request by ID
quotesRouter.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const quoteIndex = quotes.findIndex(q => q.id === id);

  if (quoteIndex !== -1) {
    quotes.splice(quoteIndex, 1);
    res.json({ message: 'Quote deleted successfully' });
  } else {
    res.status(404).json({ message: 'Quote not found' });
  }
});

export default quotesRouter;