const express  = require("express"),
      router   = express.Router(),
      controller  = require("../controllers/signup");



router.route("/")
    .post(controller.index)

module.exports = router;