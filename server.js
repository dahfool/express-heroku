const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const app = express();

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('vew engine', 'hbs')
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  var now = new Date().toString()
  console.log(`${now}: ${req.method} ${req.url}`)

  next()
})


app.use((req, res, next) => {
  res.render('maintenance.hbs')
})

hbs.registerHelper('getCurrentYear', () => (
  new Date().getFullYear()
));


app.get('/', (req, res) => {

  res.render('home.hbs', {
    title: 'Home',
    welcomeMessage: 'welcome to our site'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About',
  })
})

app.get('/bad', (req, res) => {
  res.send({
    error: 'error message'
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});