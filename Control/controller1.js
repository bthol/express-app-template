const express = require(`express`)
const router = express();

//model
// const model1 = require(`../Models/model1`)
const model1 = [1, 2, 3, 4, 5]

//index route
router.get(`/`, (req, res) => {
    // res.send(`controller1 index`)
    res.render(`./1/index.ejs`, {
        model1: model1
    })
})

//new route
router.get('/pokemon/new', (req, res) => {
    res.render('./1/new.ejs')
});

//create route
router.post(`/`, (req, res) => {
    
})


module.exports = router