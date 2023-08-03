const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['https://collegeweb-backend-6tic.onrender.com','http://localhost:3444', 'https://localhost:4200', ];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    if(whitelist.indexOf(req.header('origin') !== -1)){
        corsOptions = { origin: true }
    }
    else{
        corsOptions = { origin: false }
    }
    callback(null, corsOptions);
}

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);