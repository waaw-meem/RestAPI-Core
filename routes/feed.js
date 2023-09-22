const express = require('express')
const feedController = require("../controller/feed")

const router = express.Router()

router.get('/posts',feedController.getPosts)

exports.router = router