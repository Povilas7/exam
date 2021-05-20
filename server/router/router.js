const express = require('express')
const router = express.Router()
const valid = require('../middleware/validator')
const user = require('../controllers/main')

router.post("/upload", valid.check, user.upload)
router.get("/getAllUsers", user.getAllUsers)

module.exports = router