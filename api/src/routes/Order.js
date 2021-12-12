const { Router } = require("express");
const router = Router();
const express = require("express");
router.use(express.json());
const { deleteOrder, getOrder} = require("../Controllers/Order.js");

router.get("/", getOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
