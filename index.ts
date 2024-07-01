import express from "express";

const moduleToFetch = require("./databaseModule");
const getDatabase = moduleToFetch.getDatabase;
const newEntryToDatabase = moduleToFetch.newEntryToDatabase;

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello My guy!");
});

app.get("/test", (req, res) => {
  res.send("This is my test!");
});

// CHQ: the endpoint of URL/users returns the database entries in JSON format
app.get("/users", async (req: any, res: any) => {
  const users = await getDatabase();
  res.json(users);
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
