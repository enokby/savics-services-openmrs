var base = require('../../app');
var Medecine = require('../../models/gmao/medecine');

base.app.post('/medecine', function (req, res) {   
    try {
        const o = req.body;
        if(req.body.medecine_id){ //update
            o.last_modified_date = new Date();
            Medecine.update(o, {
                where: { medecine_id: req.body.medecine_id}
              }).then(data => {
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send({error: err});
            });
        } else { //create
            Medecine.create(o).then(data => {
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

base.app.get('/medecine/:id', function (req, res) {
    try {
        Medecine.findByPk(req.params.id).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({error: err});
        });
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});

base.app.get('/medecines', function (req, res) {
    try {
        Medecine.findAndCountAll({
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

base.app.delete('/medecine/:id', function (req, res) {
    try {
        Medecine.destroy({
            where: { medecine_id: req.params.id}
        }).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({error: err});
        });
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});