const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.put("/:idperson", userController.updateUser);
router.delete("/:idperson", userController.deleteUser);

module.exports = router;
