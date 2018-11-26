const fs = require('fs');
const express = require('express');
const envJSON = require('./config.json');
const uuid = require('uuid/v1');

var node_env = process.env.Node_ENV || 'Config';
// var config = envJSON[node_env].PORT;

const file = envJSON[node_env].file;
const version = envJSON[node_env].version;

let app = express();

app.get("/msg=:msg", function(req, res) {
    var promise = new Promise((resolve, reject) => {
        var message = req.params.msg;
        console.log("Message: " + message);
        if (!message) { reject("Error Message"); }

        const _uuid = uuid();
        // console.log(_uuid);

        var write = { sessionId: __uuid, msg: message };
        console.log(write);

        fs.appendFile(file, JSON.stringify(write) + ",\n", "utf8", (err) => {
            if (err) {
                reject("Failed.");
            }
            resolve("Success.");
        });
    });
    promise.then(function(code) {
        res.send(code);
    }, function(code) {
        res.send(code);
    });
});

app.get("/v", function(req, res) {
    var promise = new Promise((resolve, reject) => {
        if (!version) { reject("Error.") } else {
            resolve(version);
        }
    })
    promise.then((code) => {
        res.send("Version: " + code);
    }, (code) => {
        res.send(code);
    });
});

app.listen(3000);