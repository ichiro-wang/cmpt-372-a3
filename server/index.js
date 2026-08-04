import express from "express";

const app = express();
const PORT = 3000;

// app.set("trust proxy", 1);

app.get("/app", (req, res) => {
  res.send(`
        <h1>CMPT 372 Assignment 3</h1>
        <p>Page for Part 3</p>
    `);
});

app.get("/app/info", (req, res) => {
  res.json({
    ip: req.ip,
    protocol: req.protocol,
    hostname: req.hostname,
  });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
