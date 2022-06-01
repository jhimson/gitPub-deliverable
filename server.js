const express = require('express');
const app = require('liquid-express-views')(express());
const port = 3000;

const drinks = require('./models/drinks');

app.get('/', (req, res) => {
  res.send(`Welcome to the Gitpub App`);
});

app.get('/drinks', (req, res) => {
  const updatedDrinks = drinks.map((drink) => {
    const result = drink.name.replace(
      drink.name[0],
      drink.name.charAt(0).toUpperCase()
    );
    drink.name = result;
    return drink;
  });
  res.render('index', { drinks:updatedDrinks });
});

app.get('/drinks/:id', (req, res) => {
    let id = req.params.id;
    const updatedDrinks = drinks.map((drink) => {
        const result = drink.name.replace(
          drink.name[0],
          drink.name.charAt(0).toUpperCase()
        );
        drink.image = `${drink.image}.png`
        drink.name = result;
        return drink;
      });
      res.render('show', { drink: updatedDrinks[id] });
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
