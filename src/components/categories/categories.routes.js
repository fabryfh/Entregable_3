import { Router } from "express";
import { addCategoryToTask, createCategory, deleteCategories, getAllCategories, patchCategories, putCategories } from "./categories.controllers.js";


const router = Router();

router.route('/categories')
.post(createCategory)
.get(getAllCategories)

router.route('/categories/:id')
.put(putCategories)
.patch(patchCategories)
.delete(deleteCategories)

router.post('/categories/categoryTask', addCategoryToTask)


export default router;