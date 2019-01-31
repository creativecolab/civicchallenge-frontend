const express  = require("express"),
      router   = express.Router(),
      controller  = require("../controllers/landing");



router.route("/")
    .get(controller.index)

module.exports = router;