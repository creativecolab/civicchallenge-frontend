const express  = require("express"),
      router   = express.Router(),
      controller  = require("../controllers/activate");



router.route("/:token")
    .get(controller.index)

module.exports = router;