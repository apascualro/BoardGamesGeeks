const db = require("../models");
const Juego = db.juegos;
const Op = db.Sequelize.Op;

// Create and Save a new Juego
exports.create = (req, res) => {
	// Validate request
	if (!req.body.nombre) {
		res.status(400).send({
			message: "Content can not be emptyy!"
		});
		return;
	}

  // Create a Juego
  const juego = {
  	nombre: req.body.nombre,
  	subtitulo: req.body.subtitulo,
  	es_activo: req.body.es_activo ? req.body.es_activo : false
  };

  // Save Juego in the database
  Juego.create(juego)
  .then(data => {
  	res.send(data);
  })
  .catch(err => {
  	res.status(500).send({
  		message:
  		err.message || "Some error occurred while creating the Juego."
  	});
  });
  
};

// Retrieve all Juegos from the database.
exports.findAll = (req, res) => {
	const nombre = req.query.nombre;
	var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

	Juego.findAll({ where: condition })
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message:
			err.message || "Some error occurred while retrieving juegos."
		});
	});

};

// Find a single Juegos with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Juego.findByPk(id)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving Juego with id=" + id
		});
	});

};

// Update a Juegos by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;

	Juego.update(req.body, {
		where: { id: id }
	})
	.then(num => {
		if (num == 1) {
			res.send({
				message: "Juego was updated successfully."
			});
		} else {
			res.send({
				message: `Cannot update Juego with id=${id}. Maybe Juego was not found or req.body is empty!`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Error updating Juego with id=" + id
		});
	});

};

// Delete a Juegos with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Juego.destroy({
		where: { id: id }
	})
	.then(num => {
		if (num == 1) {
			res.send({
				message: "Juego was deleted successfully!"
			});
		} else {
			res.send({
				message: `Cannot delete Juego with id=${id}. Maybe Juego was not found!`
			});
		}
	})
	.catch(err => {
		res.status(500).send({
			message: "Could not delete Juego with id=" + id
		});
	});

};

// Delete all Juegos from the database.
exports.deleteAll = (req, res) => {
	Juego.destroy({
		where: {},
		truncate: false
	})
	.then(nums => {
		res.send({ message: `${nums} Juego were deleted successfully!` });
	})
	.catch(err => {
		res.status(500).send({
			message:
			err.message || "Some error occurred while removing all juegos."
		});
	});
};

exports.findAllActive = (req, res) => {
	Juego.findAll({ where: { es_activo: true } })
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message:
			err.message || "Some error occurred while retrieving juegos."
		});
	});
};