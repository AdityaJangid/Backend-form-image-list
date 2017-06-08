'use strict';

var Student = require('../model/student').Student;

/** create function to create Student. */
exports.create = function (req, res) {
    Student.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};


exports.getAll = function (req, res) {
    Student.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};


/** getStudent function to get Student by id. */
exports.get = function (req, res) {
    Student.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateStudent function to get Student by id. */
exports.update = function (req, res) {
    Student.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeStudent function to get Student by id. */
exports.delete = function (req, res) {
    Student.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}
