const express = require("express");
const router = express.Router();

// @route   GET  api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
	res.send("Get all contacts");
});

// @route   POST  api/contacts
// @desc    Add new contacts
// @access  Private
router.post("/", (req, res) => {
	res.send("Add contact");
});

// @route   POST  api/contacts/:id
// @desc    Update specific contact
// @access  Private
router.put("/:id", (req, res) => {
	res.send("Update specific contact");
});

// @route   DELETE  api/contacts/:id
// @desc    Delete a specific contact
// @access  Private
router.delete("/:id", (req, res) => {
	res.send("Delete a specific contact");
});

module.exports = router;
