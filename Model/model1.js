const mongoose = require(`mongoose`)
const Schema = mongoose.Schema;

const schema = new Schema ({
    arr: {type: [Number] },
    date: { type: Date, default: Date.now }
}, {timeStamps: false});

const model1 = mongoose.model('model1', schema);

module.exports = model1
