import { Router } from "express";
import { createTask, deleteTasks, patchTasks, putTasks } from "./tasks.controllers.js";

const router = Router();

router.route('/task')
.post(createTask)

// .get(getAllTasks)
router.route('/task/:id')
.delete(deleteTasks)
.put(putTasks)
.patch(patchTasks)


export default router;