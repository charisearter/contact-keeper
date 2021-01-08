const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET  api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(contacts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
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
