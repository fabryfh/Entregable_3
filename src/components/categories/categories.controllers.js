import Category from "../../models/categories.model.js";
import Task from "../../models/tasks.model.js";


export const createCategory = async (req, res) => {
    try {
        const { body } = req
        await Category.findOrCreate({
            where:{name:body.name},
            defaults:body
        });
        res.status(201).end();
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json(error)
    }
};

export const addCategoryToTask = async (req, res) => {
    try {
        const {idTask, ...category} = req.body;
        const getTask = await Task.findOne({
            where: {id:idTask}
        });
        const [newCategory, create] = await Category.findOrCreate({
            where: {name: category.name},
            defaults: category,
        });
        await newCategory.addTask(getTask);
        res.status(201).end();
        
    } catch (error) {
        res.status(400).json(error);
    }
};

export const patchCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        await Category.update(body, {
            where :{ id },
        });
       res.status(204).end();
    } catch (error) {
        res.status(400).json(error);
    }
};

export const putCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        await Category.update(body, {
            where :{ id },
        });
       res.status(204).end();
    } catch (error) {
        res.status(400).json(error);
    }
};

export const deleteCategories = async (req, res) => {
    try {
        const {id} = req.params;
        await Category.destroy({
            where :{ id },
        });
       res.status(204).end();
    } catch (error) {
        res.status(400).json(error);
    }
};
