var base = require('../../app');
var Equipment = require('../../models').equipments;

base.app.post('/equipment', function (req, res) {   
    try {
        const o = req.body;
        if(req.body.equipment_id){ //update
            o.last_modified_date = new Date();
            Equipment.update(o, {
                where: { equipment_id: req.body.equipment_id}
              }).then(data => {
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send({error: err});
            });
        } else { //create
            Equipment.create(o).then(data => {
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

base.app.get('/equipment/:id', function (req, res) {
    try {
        Equipment.findByPk(req.params.id).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({error: err});
        });
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});

base.app.get('/equipments', function (req, res) {
    try {
        Equipment.findAndCountAll({
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

base.app.delete('/equipment/:id', function (req, res) {
    try {
        Equipment.destroy({
            where: { equipment_id: req.params.id}
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