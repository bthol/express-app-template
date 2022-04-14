const express = require(`express`)
const router = express();

const dataModel1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//index route
router.get(`/`, (req, res) => {
    // res.send(`controller1 index`)
    res.render(`./1/index.ejs`, {
        dataModel1: dataModel1
    })
})

module.exports = router