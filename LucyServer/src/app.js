'use strict';

import express from 'express';
var app = express();

import IpService from './services/IpService.js';

app.get('/ip', function (req, res) {
    IpService.getIpDetails().then((ipDetails) => {
        res.send(ipDetails);
    });

});

app.listen(3000);