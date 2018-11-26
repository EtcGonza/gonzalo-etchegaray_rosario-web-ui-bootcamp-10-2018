const fs = require('fs');
const express = require('express');
// const _uuid = require('uuid/v1')

var data = fs.readFileSync('words.json');
var artists = JSON.parse(data);
let app = express();
var count = 0;


app.listen(3000, () => { console.log("Server Started!"); });

app.get('/get', getArtists);

// function getArtists(request, response) {
//     response.send(artists);
// }


app.get('/add/:name', addArtist);

// function addArtist(request, response) {
//     var data = request.params;
//     var artist = data.type;
//     var name = String(data.name);
//     var reply;

//     if (!name) {
//         var reply = {
//             msg: "Name is required"
//         }
//         response.send(reply);
//     } else {
//         uuid = _uuid();
//         artists[uuid] = name;
//         var data = JSON.stringify(artists, null, 2);
//         fs.writeFile('words.json', data, error => {
//             console.log("Writing");
//         });
//     }
// }

//FUNCTIONS
function getArtists(request, response) {
    var promise = new Promise(function(resolve, reject) {
        if (artists != undefined) {
            resolve("Resolved");
        } else {
            reject("Rejected");
        }
    });

    promise.then(function() {
        console.log("Everything is Fine!");
        response.send(artists);
    }, function() {
        console.log("Ups");
    });
}

function addArtist(request, response) {

    var data = request.params;
    var name = String(data.name);
    var reply;

    var promise = new Promise(function(resolve, reject) {
        if (!name) {
            reject("Rejected");
        } else {
            response.send(name);
            resolve("Resolved");
        }
    });

    promise.then(function() {
        artists["artist_" + name] = name;
        var data = JSON.stringify(artists, null, 2);
        fs.writeFile("words.json", data, error => {
            console.log("Writing");
        });
    }, function() {
        console.log("Ups");
    });
}