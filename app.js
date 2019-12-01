const express = require('express')
const app = express();
const {instance} = require('./config/hbs-instance')
var homeRouter = require('./routes/home');
var aboutRouter = require('./routes/about');


app.use(express.static(__dirname+'/public'))

app.engine('.hbs', instance.engine);
app.set('view engine', '.hbs')

app.use('/', homeRouter);
app.use('/about', aboutRouter);

app.listen(3000, () => {
    console.log("App listening on port 3000")
})