var async = require('async');
var request = require('request');

const ATTRACTMODE_API = 'http://localhost:3002/attract';

/**
 * Get top categories and display them in the layout.
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.index = function(req, res) {
    async.parallel({
        categories: function(callback) {
            request.get({
                url: ATTRACTMODE_API + '/categories/all',
            }, function(error, response, body){
                if(error) {
                    callback(true, '{"error":"' + error + '"}');
                } else {
                    callback(null, body);
                }
            });    
        },
    }, function(err, results){
        if(err) {
            res.render('error', { message: JSON.parse(results.systems)});
        } else {
            res.render('index-slick', { 
                categories: JSON.parse(results.categories) 
            });
        }
    });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getSystemsInCategory = function(req, res) {
    async.parallel({
        systems: function(callback) {
            request.get({
                url: ATTRACTMODE_API + '/collection/' + req.params.category,
            }, function(error, response, body){
                if(error) {
                    callback(true, '{"error":"' + error + '"}');
                } else {
                    callback(null, body);
                }
            });    
        },
    }, function(err, results){
        if(err) {
            res.render('error', { message: JSON.parse(results.systems)});
        } else {
            res.send(results.systems);
        }
    });
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getGamesInSystem = function(req, res) {
    async.parallel({
        systems: function(callback) {
            request.get({
                url: ATTRACTMODE_API + '/games/' + req.params.system,
            }, function(error, response, body){
                if(error) {
                    callback(true, '{"error":"' + error + '"}');
                } else {
                    callback(null, body);
                }
            });    
        },
    }, function(err, results){
        if(err) {
            res.render('error', { message: JSON.parse(results.systems)});
        } else {
            res.send(results.systems);
        }
    });

}

