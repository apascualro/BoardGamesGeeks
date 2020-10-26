module.exports = app => {
  const juegos = require("../controllers/juego.controller.js");

  const router = require("express").Router();

  // const middlewareCors = require("../middlewares/cors.js");

  // Create a new Tutorial
  router.post("/", juegos.create);

  // Retrieve all Tutorials
  router.get("/", juegos.findAll);

  // Retrieve all published Tutorials
  router.get("/activo", juegos.findAllActive);

  // Retrieve a single Tutorial with id
  router.get("/:id", juegos.findOne);

  // Update a Tutorial with id
  router.put("/:id", juegos.update);

  // Delete a Tutorial with id
  router.delete("/:id", juegos.delete);

  // Delete all Juegos
  router.delete("/", juegos.deleteAll);

  app.use('/api/juegos', router);
};