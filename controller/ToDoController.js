import sequelize from "../db/index.js"; 

export const getToDos = async (req, res) => {
  const toDos = await sequelize.models.todo.findAll();
  res.send(toDos);
};

export const saveToDo = (req, res) => {
  const { toDo } = req.body;

  sequelize.models.todo.create({ ...toDo })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

export const updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  sequelize.models.todo.update(
    { ...toDo },
    { where: { _id: id } }
  )
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

export const deleteToDo = (req, res) => {
  const { id } = req.params;

  sequelize.models.todo.destroy({ where: { _id: id } })
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
