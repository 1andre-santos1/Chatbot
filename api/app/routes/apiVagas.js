//API para a vagas

module.exports = function (app, db) {
    //**************************************************/Métodos CRUD******************************************************************

    //Listar Vagas
    app.get('/api/jobs', function (req, res) {
        db.Jobs.findAll({

        }).then(function (result) {
            res.json(result);
        })
    });

    //Criar Vagas
    app.post('/api/jobs/new', function (req, res) {
        db.Jobs.create({
            name: req.body.name,
            candidateDescript: req.body.candidateDescript,
            remote: req.params.remote,
            formation: req.params.formation,
            travelOtCountrys: req.params.travelOtCountrys,
            shifts: req.params.shifts,
            location: req.body.location,
            area: req.body.area
        }).then(function (results) {
            res.json(results);
        })
    });

    //Atualizar uma Vaga
    app.put('/api/jobs/update/:id', function (req, res) {
        db.Jobs.update({
            name: req.body.name,
            candidateDescript: req.body.candidateDescript,
            remote: req.params.remote,
            formation: req.params.formation,
            travelOtCountrys: req.params.travelOtCountrys,
            shifts: req.params.shifts,
            location: req.body.location,
            area: req.body.area
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
        db.Jobs.destroy({
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
        db.Jobs.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        })
    });

    //Listar vagas com uma dada localização
    app.get('/api/jobs/location/:location', function (req, res) {
        db.Jobs.findAll({
            where: {
                location: req.params.location
            }
        }).then(function (result) {
            res.json(result);
        })
    });


    //Listar vagas com uma dada área
    app.get('/api/jobs/area/:area', function (req, res) {
        db.Jobs.findAll({
            where: {
                area: req.params.area
            }
        }).then(function (result) {
            res.json(result);
        })
    });

}
