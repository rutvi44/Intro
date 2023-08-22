
const express = require('express');
const path = require('path');

const webPage = express();

webPage.use(express.static(path.join(__dirname, 'Public')));

webPage.set('views', path.join(__dirname, 'Views'));
webPage.set('view engine', 'ejs');

webPage.get('/', (req, res) => {
    res.render('Pages/profile');
});

const port = process.env.PORT || 3834;
webPage.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
