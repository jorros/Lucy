'use strict';

var http = require('http');
var iplocation = require('iplocation')

class IpService {
    getIp() {
        return new Promise((resolve, reject) => {
            http.get('http://bot.whatismyipaddress.com', function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    resolve(chunk);
                })
            });
        });
    }

    getIpDetails() {
        return new Promise((resolve, reject) =>
        {
            this.getIp().then((ip) => {
                var location = iplocation(ip, (err, res) => {
                    resolve(
                        {
                            "code": res["country_code"],
                            "name": res["country_name"],
                            "ip": ip
                        });
                });
            });
        })
    }
}

export default new IpService();