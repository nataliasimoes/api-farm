const Animal = require("./animal.js");
const Local = require("./local.js");


const modelos = {
  Animal,
  Local
};

Object.entries(modelos).forEach(([name,model]) => {
  model.sync();
  model.associate(modelos);
  console.log(name);
})


module.exports = {
  Animal,
  Local
}