const router = require('express').Router();
const notesHandling = require('./notesAPI');

router.use(notesHandling);

module.exports = router;