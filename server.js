import express from "express";

const app = express();
const Port = 8000;

//api endpoints
import taskRouter from "./src/routers/taskRouters.js";

app.use(express.json());
app.use("/api/v1/task", taskRouter);

// //read data from database and return to the client
// app.get("/api/v1/task", (req, res) => {
//   res.json({
//     message: "todo do get method",
//   });
// });

// //receive data from client and create new record into database
// app.post("/api/v1/task", (req, res) => {
//   res.json({
//     message: "todo do post method",
//   });
// });

// //update record into the database base on information receive
// app.put("/api/v1/task", (req, res) => {
//   res.json({
//     message: "todo do put method",
//   });
// });

// //delete one or many record from the database based on the information received
// app.delete("/api/v1/task", (req, res) => {
//   res.json({
//     message: "todo do delete method",
//   });
// });

//routers

app.listen(Port, (error) => {
  error
    ? console.log(error.message)
    : console.log(`server is running on port ${Port}`);
});

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server running successfully",
  });
});
console.log("test html");
