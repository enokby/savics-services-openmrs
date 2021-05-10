var base = require('../../app');
var EquipmentType = require('../../models').equipmentTypes;

base.app.post('/equipmentType', function (req, res) {   
    try {
        const o = req.body;
        if(req.body.equipment_type_id){ //update
            EquipmentType.update(o, {
                where: { equipment_type_id: req.body.equipment_type_id}
              }).then(data => {
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send({error: err});
            });
        } else { //create
            EquipmentType.create(o).then(data => {
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

base.app.get('/equipmentType/:id', function (req, res) {
    try {
        EquipmentType.findByPk(req.params.id).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({error: err});
        });
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});

base.app.get('/equipmentTypes', function (req, res) {
    try {
        EquipmentType.findAndCountAll({
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

base.app.delete('/equipmentType/:id', function (req, res) {
    try {
        EquipmentType.destroy({
            where: { equipment_type_id: req.params.id}
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