const express = require('express')
const router = express.Router()
// const valid = require('../middleware/validator')
const create = require('../controllers/main')

router.post("/upload", create.upload)

module.exports = router