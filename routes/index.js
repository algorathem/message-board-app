const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// GET index route
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// GET new message form route
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// POST new message route
router.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect("/");
});

// GET message details route
router.get("/message/:id", (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { title: "Message Details", message: message });
});

module.exports = router;
