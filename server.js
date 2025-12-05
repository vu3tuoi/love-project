const express = require("express");
const app = express();
const fs = require("fs");

app.get("/log", (req, res) => {
    const click = req.query.press;
    const time = new Date().toLocaleString();

    const line = `Người dùng bấm: ${click} — ${time}\n`;

    fs.appendFileSync("log.txt", line);

    console.log(line);

    res.send("Đã ghi!");
});

app.listen(3000, () => {
    console.log("Server chạy tại http://localhost:3000");
});
