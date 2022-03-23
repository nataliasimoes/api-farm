const express = require('express');
const rotasLocal = require('./local.js');
const rotasAnimal = require('./animal.js');

const router = express.Router();

router.use("/animal",rotasAnimal);
router.use("/local",rotasLocal);

module.exports = router;