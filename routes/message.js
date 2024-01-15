const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No messages found!";
    }
    res.send(`
        ${data}
        <form
        action="/"
        method="POST"
        onSubmit="document.getElementById('username').value = localStorage.getItem('username')"
      >
        <input type="text" id="message" name="message" placeholder="Type your message here...!" />
        <input type="hidden" id="username" name="username" />
        <button type="submit">Submit</button>
      </form>`);
  });
});

router.post("/", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
  fs.writeFile(
    "message.txt",
    `${req.body.username} : ${req.body.message} `,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});

module.exports = router;