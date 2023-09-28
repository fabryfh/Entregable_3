import Category from "../../models/categories.model.js";
import Task from "../../models/tasks.model.js";
import User from "../../models/users.model.js";

export const createUser = async (req, res) => {
  try {
    const { body } = req;
    await User.create(body);
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Task,
          attributes: ["id", "title", "description", "complete" ],
          include: { 
            model: Category, 
            through: { attributes: [] }
           },
        },
      ]
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

 export const getUsersById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findOne({
          where:{ id },
          include: [
            {
              model: Task, 
              attributes: ["id", "title", "description", "complete"],              
              include: { 
                model: Category,
              through: {attributes:[]}
              },
            },
          ]
        });
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json(error);
      }
 };

 export const deleteUsers = async (req, res) => {
    try {
        const {id} = req.params;
        await User.destroy({
          where:{ id },
        });
        res.status(204).end();
      } catch (error) {
        res.status(400).json(error);
      }
 };

 export const putUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const { body } = req;
        await User.update(body, {
          where:{ id },
        });
        res.status(204).end();
      } catch (error) {
        res.status(400).json(error);
      }
 };

 export const patchUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const { body } = req;
        await User.update(body, {
          where:{ id },
        });
        res.status(204).end();
      } catch (error) {
        res.status(400).json(error);
      }
 };


