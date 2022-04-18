const express = require(`express`)
const router = express();

//model
const model1 = require(`../Model/model1`)

//index route
router.get(`/`, (req, res) => {
    // res.send(`controller1 index`)
    try {
        res.render(`./1/index.ejs`, {
            model1: model1
        })
    } catch(error) {
        res.send({
            message: error
        })
    }
})

//create route
router.post(`/`, (req, res) => {

})


module.exports = router