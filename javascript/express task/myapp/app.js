const express = require("express");
const app = express();
const os = require("node:os");
const port = 3000

app.get("/cpu", function(req,res) {
    let cpu = {
        model: os.cpus()[0].model,
    };
    res.send(JSON.stringify(cpu));
})
app.get("/ram", function(req,res) {
    let ram = {
        bytes: os.totalmem(),
        GB: os.totalmem(),
    };
    res.send(JSON.stringify(ram));
})
app.get("/os", function(req,res) {
    let opSys = {
        platform: os.platform(),
        version: os.release(),
    };
    res.send(JSON.stringify(opSys));
});

app.listen(3000, () => console.log("started on port 3000."));