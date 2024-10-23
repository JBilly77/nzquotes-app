import express from "express";
import morgan from 'morgan';


const app = express();
const PORT = 4000;

// setup
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.static('public'));
app.use(morgan('dev')); // logger
app.use(express.urlencoded({ extended: true }));

//=======================QUOTES APP===================//

//LOGIN
// Route for home page
app.get('/', (req, res) => {
    res.render('home');
  });
  
  // Route for login form submission
  app.post('/login', (req, res) => {
    const { name, email } = req.body;
    res.render('quotes', { name, email });
  });

  //=================================================//

// routes
// app.get('/', (req, res) => {
//      res.render('home');
// });

// app.get('/catalog', (req, res) => {
//     res.render('catalog', {name: 'Love'});
// });

// app.get('/about', (req, res) => {
//     res.render('about')
// });

// app.post('/catalog', (req, res) => {
//     const caText = req.body.text1
//     res.render('catalog', {text1:caText});
//     console.log("Success!");
// });

// app.get('/download', (req, res) => {
//     res.download('./public/tnnovation.png')
// });


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));