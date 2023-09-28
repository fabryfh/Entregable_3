import { Router } from "express";
import { createUser, deleteUsers, getAllUsers, getUsersById, patchUsers, putUsers } from "./users.controllers.js";


const router = Router();

router.route('/user')
.post(createUser)
.get(getAllUsers);

router.route('/user/:id')
.get(getUsersById)
.delete(deleteUsers)
.put(putUsers)
.patch(patchUsers)



export default router;