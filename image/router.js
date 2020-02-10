const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/images", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.send(images);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
