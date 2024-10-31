import express from "express";
import morgan from 'morgan';
import quotesRouter from './routes/quotes.js';
import loginRouter from './routes/login.js'


const app = express();
const PORT = 4000;

// setup
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.static('public'));
app.use(morgan('dev')); // logger
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/login', (req, res) => {
  const { name, email } = req.body;

  // Validate user input
  if (!name || !email) {
    res.status(400).send('Please fill all fields');
    return;
  }

  // Authenticate user (add your authentication logic)
  // For demo purposes, redirect to quotes page
  res.redirect('/quotes');
});

//====================API Routes=====================//
app.use('/quotes', quotesRouter);
app.use('/auth', loginRouter);

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(404).send(error.message);
    next();
  });

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));