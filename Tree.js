const mongoose = require('mongoose');


const treeSchema = new Schema({
    treeName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      
    },
});

schema.pre("save", async function (next) {
  this.treeName= this.treeName + "." + Date.now();
  next();
});

module.exports = mongoose.model('Tree', treeSchema);