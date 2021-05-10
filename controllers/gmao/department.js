var base = require('../../app');
var Department = require('../../models').departments;

base.app.post('/department', function (req, res) {   
    try {
        const o = req.body;
        if(req.body.department_id){ //update
            Department.update(o, {
                where: { department_id: req.body.department_id}
              }).then(data => {
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send({error: err});
            });
        } else { //create
            Department.create(o).then(data => {
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send({error: err});
            });
        }   
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});

base.app.get('/department/:id', function (req, res) {
    try {
        Department.findByPk(req.params.id).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({error: err});
        });
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});

base.app.get('/departments', function (req, res) {
    console.log(Department);
    try {
        Department.findAndCountAll({
            where: {},
            offset: req.body.offset,
            limit: req.body.limit
        }).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({error: err});
        });;
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});

base.app.delete('/department/:id', function (req, res) {
    try {
        Department.destroy({
            where: { department_id: req.params.id}
        }).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({error: err});
        });;
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});