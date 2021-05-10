var base = require('../../app');
var Provider = require('../../models').providers;

base.app.post('/provider', function (req, res) {   
    try {
        const o = req.body;
        if(req.body.provider_id){ //update
            o.last_modified_date = new Date();
            Provider.update(o, {
                where: { provider_id: req.body.provider_id}
              }).then(data => {
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send({error: err});
            });
        } else { //create
            Provider.create(o).then(data => {
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

base.app.get('/provider/:id', function (req, res) {
    try {
        Provider.findByPk(req.params.id).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({error: err});
        });
    } catch(err) {
        console.error(err);
        res.status(500).send({error: err});
    }    
});

base.app.get('/providers', function (req, res) {
    try {
        Provider.findAndCountAll({
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

base.app.delete('/provider/:id', function (req, res) {
    try {
        Provider.destroy({
            where: { provider_id: req.params.id}
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