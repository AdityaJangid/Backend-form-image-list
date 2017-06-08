var Student= require('../controller/student');

// API Server Endpoints
module.exports = function(router){
	router.post('/student', Student.create),
	router.get('/student/all', Student.getAll),
	router.get('/student/:id', Student.get),
	router.put('/student/:id', Student.update),
	router.delete('/student/:id', Student.delete)
}
