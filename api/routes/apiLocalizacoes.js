//API para a localização

module.exports = function (app, db) {
    //Métodos CRUD

    /**
     * @api {get} /api/locations Pedido das informações das Localizações
     * @apiGroup Locations 
     * 
     * @apiSuccess {Object[]} areas Lista de Localizações
     * @apiSuccess {Number} id ID da Localização
     * @apiSuccess {String} name  Nome da Localização
     * @apiSuccess {DateTime} createdAt Data da criação da Localização
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Localização
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * [
         {
            "id": 1,
            "name": "Tomar",
            "createdAt": "2019-06-13T15:24:13.000Z",
            "updatedAt": "2019-06-13T15:24:13.000Z"
        },
        {
            "id": 2,
            "name": "Lisboa",
            "createdAt": "2019-06-13T15:24:13.000Z",
            "updatedAt": "2019-06-13T15:24:13.000Z"
        },
        {
            "id": 3,
            "name": "Viseu",
            "createdAt": "2019-06-13T15:24:13.000Z",
            "updatedAt": "2019-06-13T15:24:13.000Z"
        },
        {
            "id": 4,
            "name": "Porto",
            "createdAt": "2019-06-13T15:24:13.000Z",
            "updatedAt": "2019-06-13T15:24:13.000Z"
        },
        {
            "id": 5,
            "name": "Coimbra",
            "createdAt": "2019-06-13T15:24:13.000Z",
        "updatedAt": "2019-06-13T15:24:13.000Z"
        }
       ]
     */

    //Listar localização
    app.get('/api/locations', function (req, res) {
        db.Locations.findAll({

        }).then(function (result) {
            res.json(result);
        }).catch(function(err){
            console.error("Erro get Localizações", err)
            res.status(500).json({ erro: "Erro em get Localizações" })
        
    });
    });

    /**
     * @api {post} /api/location/new Pedido das informações das Localizações
     * @apiGroup Locations 
     *
     * @apiSuccess {Number} id ID da Localização
     * @apiSuccess {String} name  Nome da Localização
     * @apiSuccess {DateTime} createdAt Data da criação da Localização
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Localização
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
         {
            "id": 6,
            "name": "Santarém",
            "createdAt": "2019-06-13T15:24:13.000Z",
            "updatedAt": "2019-06-13T15:24:13.000Z"
        }
     */
    app.post('/api/location/new', function (req, res) {
        db.Locations.create({
            name: req.body.nome,
        }).then(function (results) {
            res.json(results);
        })
    });


    
    /**
     * @api {put} /api/location/update/:id Permite atualizar uma Localização
     * @apiGroup Locations 
     * 
     *  @apiSuccess {String} message Mensagem que informa que a Localização foi atualizada 
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * {
        "message": "Localização Atualizada"
       }
     */
    app.put('/api/location/update/:id', function (req, res) {
        db.Locations.update({
            name: req.body.name,

        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json({message: "Localização Atualizada!"});
            })
    });

    /**
     * @api {delete} /api/location/delete/:id Permite eliminar uma Localização
     * @apiGroup Locations 
     * 
     *  @apiSuccess {String} message Mensagem que informa que a Localização foi eliminada 
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * {
        "message": "Localização Eliminada!"
       }
     */
    app.delete('/api/location/delete/:id', function (req, res) {
        db.Locations.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    /**
     * @api {get} /api/location/:id Pedido das informações de uma Localização
     * @apiGroup Locations 
     * 
     * @apiSuccess {Object[]} locations Lista de Localizações
     * @apiSuccess {Number} id ID da localização
     * @apiSuccess {String} name  Nome da Localização
     * @apiSuccess {DateTime} createdAt Data da criação da Localização
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Localização
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * [
         {
            "id": 2,
            "name": "Lisboa",
            "createdAt": "2019-06-13T15:24:13.000Z",
            "updatedAt": "2019-06-13T15:24:13.000Z"
        }
       ]
     */
    app.get('/api/location/:id', function (req, res) {
        db.Locations.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        })
    });


}
