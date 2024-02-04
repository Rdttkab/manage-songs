const router = require("express").Router();
const controller = require("../controller/songController");

router
  .get("/", controller.getAllSong)
  .get("/:id", controller.getSong)
  .post("/", controller.createSong)
  .put("/:id", controller.updateSong)
  .delete("/:id", controller.deleteSong);

module.exports = router;
