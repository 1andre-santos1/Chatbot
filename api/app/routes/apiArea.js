//API para a área

module.exports = function (app, db) {
    //Métodos CRUD

    //Listar Área
    app.get('/api/areas', function (req, res) {
        db.Areas.findAll({

        }).then(function (result) {
            res.json(result);
        })
    });

    //Criar Área
    app.post('/api/areas/new', function (req, res) {
        db.Areas.create({
            name: req.body.name,
        }).then(function (results) {
            res.json(results);
        })
    });

    //Atualizar uma Área
    app.put('/api/areas/update/:id', function (req, res) {
        db.Areas.update({
            name: req.body.name,

        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result);
            })
    });

    //Apagar Área
    app.delete('/api/areas/delete/:id', function (req, res) {
        db.Areas.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //Listar areas pelo seu ID
    app.get('/api/areas/:id', function (req, res) {
        db.Areas.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        })
    });



}
