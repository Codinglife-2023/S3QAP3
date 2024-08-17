const express = require('express');
const methodOverride = require('method-override');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.redirect('/books');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
