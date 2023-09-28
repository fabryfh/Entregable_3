import Category from "../../models/categories.model.js";
import Task from "../../models/tasks.model.js";
import User from "../../models/users.model.js";

export const createTask = async (req, res) => {
    try {
        const { id, category, ...task } = req.body;
        const getUser = await User.findOne({
            where: {id}
        });
        const createTask = await Task.create(task)
        const [createCategory, create] = await Category.findOrCreate({
            where:{name :category},
            defaults:{category}
        });
        await getUser.addTask(createTask);
        await createTask.addCategory(createCategory);
        res.status(201).end();
    } catch (error) {
        res.status(400).json(error)
    }
};

export const deleteTasks = async (req, res) => {
    try {
        const {id} = req.params;
        await Task.destroy({
            where: {id},
        });
        res.status(204).end();
    } catch (error) {
        res.status(400).json(error);
    }
};

export const putTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        await Task.update(body, {
            where: {id},
        });
        res.status(204).end();
    } catch (error) {
        res.status(400).json(error)
    }
};

export const patchTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        await Task.update(body, {
            where: {id},
        });
        res.status(204).end();
    } catch (error) {
        res.status(400).json(error)
    }
};