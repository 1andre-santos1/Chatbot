//API para a localização

module.exports = function (app, db) {
    //Métodos CRUD

    //Listar localização
    app.get('/api/locations', function (req, res) {
        db.Locations.findAll({

        }).then(function (result) {
            res.json(result);
        })
    });

    //Criar Localização
    app.post('/api/location/new', function (req, res) {
        db.Locations.create({
            name: req.body.name,
        }).then(function (results) {
            res.json(results);
        })
    });

    //Atualizar uma Localizção
    app.put('/api/location/update/:id', function (req, res) {
        db.Locations.update({
            name: req.body.name,

        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result);
            })
    });

    //Apagar Localização
    app.delete('/api/location/delete/:id', function (req, res) {
        db.Locations.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //Listar localização pelo seu ID
    app.get('/api/location/:id', function(req, res){
        db.Locations.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(result){
            res.json(result);
        })
    });


}
