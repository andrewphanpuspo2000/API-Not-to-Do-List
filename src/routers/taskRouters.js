import express from "express";

const router = express.Router();

let task = [
  {
    task: "watching movie",
    hr: 22,
    type: "entry",
    _id: "wawaw",
  },
  {
    task: "playing football",
    hr: 22,
    type: "entry",
    _id: "node",
  },
  {
    task: "Dancing",
    hr: 22,
    type: "entry",
    _id: "dadsa",
  },
  {
    task: "Sleep",
    hr: 22,
    type: "entry",
    _id: "friend",
  },
];

//read data from database and return to the client
router.get("/", (req, res) => {
  res.json({
    message: "todo do get method",
    task: task,
  });
});

//receive data from client and create new record into database
router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  task.push(body);
  res.json({
    message: "object has been added",
  });
});

//update record into the database base on information receive
router.put("/", (req, res) => {
  res.json({
    message: "todo do put method",
  });
});

//delete one or many record from the database based on the information received
router.delete("/", (req, res) => {
  const body = req.body.id;
  const filterTask = task.filter((item) => item._id !== body);

  task = filterTask;
  res.json({
    message: "task deleted successfully",
  });
});

export default router;
