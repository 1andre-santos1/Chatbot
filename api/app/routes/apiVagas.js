//API para a vagas

module.exports = function (app, db) {
    //**************************************************/Métodos CRUD******************************************************************

    //Listar Vagas
    app.get('/api/jobs', function (req, res) {
        db.Vagas.findAll({

        }).then(function (result) {
            res.json(result);
        })
    });

    //Criar Vagas
    app.post('/api/jobs/new', function (req, res) {
        db.Vagas.create({
            nome: req.body.nome,
            descricaoCandidato: req.body.descricaoCandidato,
            localizacao: req.body.localizacao,
            area: req.body.area
        }).then(function (results) {
            res.json(results);
        })
    });

    //Atualizar uma Vaga
    app.put('/api/jobs/update/:id', function (req, res) {
        db.Vagas.update({
            nome: req.body.nome,
            descricaoCandidato: req.body.descricaoCandidato,
            localizacao: req.body.localizacao,
            area: req.body.area,
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result);
            })
    });

    //Apagar Vaga
    app.delete('/api/jobs/delete/:id', function (req, res) {
        db.Vagas.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //**************************************************LISTAR VAGAS*********************************************************************/
    //Listar vagas pelo seu ID
    app.get('/api/jobs/:id', function (req, res) {
        db.Vagas.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        })
    });

    //Listar vagas com uma dada localização
    app.get('/api/jobs/location/:location', function (req, res) {
        db.Vagas.findAll({
            where: {
                localizacao: req.params.location
            }
        }).then(function (result) {
            res.json(result);
        })
    });


    //Listar vagas com uma dada área
    app.get('/api/jobs/area/:area', function (req, res) {
        db.Vagas.findAll({
            where: {
                area: req.params.area
            }
        }).then(function (result) {
            res.json(result);
        })
    });

}
