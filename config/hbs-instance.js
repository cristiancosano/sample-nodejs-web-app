let hbs = require('express-handlebars')

let instance = hbs.create({
    helpers:{
        getYear : () => new Date().getFullYear(),
    },    
    extname: '.hbs'
})

module.exports = {
    instance
}