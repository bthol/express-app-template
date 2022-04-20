const express = require(`express`)
const router = express();

//model
// const model1 = require(`../Model/model1`)
const model1 = [1, 2, 3, 4, 5]

//index route
router.get(`/`, (req, res) => {
    // res.send(`controller1 index`)
    res.render(model1)
    // res.render(`./1/index.ejs`, {
    //     model1: model1
    // })
})

//create route
router.post(`/`, (req, res) => {

})


module.exports = router