import express from 'express';
const loginRouter = express.Router();

//Login route handler
loginRouter.post('/login', async (req, res) => {
  try {
    const { name, email } = req.body;

    //Validate user input
    if (!name || !email) {
      res.status(400).send({ message: 'Please enter your name and your email!' });
      return;
    }

    res.redirect('/quotes');
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export default loginRouter;