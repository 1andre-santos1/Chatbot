//API para a localização

module.exports = function (app, db) {
    //Métodos CRUD

    //Listar localização
    app.get('/api/local', function (req, res) {
        db.Localizacao.findAll({

        }).then(function (result) {
            res.json(result);
        })
    });

    //Criar Localização
    app.post('/api/local/new', function (req, res) {
        db.Localizacao.create({
            nome: req.body.nome,
        }).then(function (results) {
            res.json(results);
        })
    });

    //Atualizar uma Localizção
    app.put('/api/local/update/:id', function (req, res) {
        db.Localizacao.update({
            nome: req.body.nome,

        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result);
            })
    });

    //Apagar Localização
    app.delete('/api/local/delete/:id', function (req, res) {
        db.Localizacao.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

}
