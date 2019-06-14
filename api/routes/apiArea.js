//API para a área

module.exports = function (app, db) {
    //*****************************************Métodos CRUD****************************************************************************

    /**
     * @api {get} /api/areas Pedido das informações das Áreas
     * @apiGroup Areas 
     * 
     * @apiSuccess {Object[]} areas Lista de Áreas
     * @apiSuccess {Number} id ID da Área
     * @apiSuccess {String} name  Nome da Área
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     *[
            {
                "id": 1,
                "name": "Consultorias",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-14T11:04:02.000Z"
            },
            {
                "id": 2,
                "name": "Infraestruturas",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-13T15:24:13.000Z"
            },
            {
                "id": 3,
                "name": "Consultorias",
                "createdAt": "2019-06-13T15:24:13.000Z",
                "updatedAt": "2019-06-14T11:28:30.000Z"
            },
            {
                "id": 4,
                "name": "Base de Dados",
                "createdAt": "2019-06-14T10:54:16.000Z",
                "updatedAt": "2019-06-14T10:54:16.000Z"
            },
            {
                "id": 6,
                "name": "Base de dados",
                "createdAt": "2019-06-14T11:29:39.000Z",
                "updatedAt": "2019-06-14T11:29:39.000Z"
            }
        ]
     */
    app.get('/api/areas', function (req, res) {
        db.Areas.findAll({

        }).then(function (results) {
            res.json(results);
        }).catch(function(err){
            console.error("Erro get Áreas", err)
            res.status(500).json({ erro: "Erro na query" })
        
    });
    });
        
    /**
     * @api {post} /api/areas/new Criação de uma nova área
     * @apiGroup Areas
     * 
     * @apiSuccess {Number} id ID da Área
     * @apiSuccess {String} name  Nome da Área
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * 
     * {
     *   "id": 6,
     *   "name": "Base de dados",
     *   "updatedAt": "2019-06-14T11:29:39.738Z",
     *   "createdAt": "2019-06-14T11:29:39.738Z"
     * }
     * 
     */
    app.post('/api/areas/new', function (req, res) {
        db.Areas.create({
            name: req.body.name,
        }).then(function (results) {
           res.json(results);
        });
    });

     /**
     * @api {put} /api/areas/update/:id Atualização de uma Área
     * @apiGroup Areas
     * 
     * @apiSuccess {String} message Mensagem que informa que a Área foi atualizada 
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * {
        "message": "Área Atualizada"
       }
     */
    app.put('/api/areas/update/:id', function (req, res) {
        db.Areas.update({
            name: req.body.name,
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json({message : "Área Atualizada!"});
            })
    });

     /**
     * @api {delete} /api/areas/delete/:id Eliminação de uma Área
     * @apiGroup Areas
     * 
     * @apiSuccess {String} message Nome da Área que foi eliminada 
     * 
     @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * {
        "message": "Área Eliminada!"
       }
     */
    app.delete('/api/areas/delete/:id', function (req, res) {
        db.Areas.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json({message: "Área Eliminada!!"});
        });
    });

   /**
     * @api {get} /api/areas/new Criação de uma nova área
     * @apiGroup Areas
     * 
     * @apiSucess {Object[]} area Mostra a área com um determinado ID
     * @apiSuccess {Number} id ID da Área
     * @apiSuccess {String} name  Nome da Área
     * @apiSuccess {DateTime} createdAt Data da criação da Área
     * @apiSuccess {DateTime} updatedAt Data da última atualização da Área
     * 
     * @apiSuccessExample {json} Sucesso
     *     HTTP/1.1 200 OK
     * 
     * [
     *  {
     *      "id": 6,
     *      "name": "Base de dados",
     *      "updatedAt": "2019-06-14T11:29:39.738Z",
     *      "createdAt": "2019-06-14T11:29:39.738Z"
     *  }
     * ]
     * 
     */
    app.get('/api/areas/:id', function (req, res) {
        db.Areas.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            console.log(results);

            function isEmpty(results) {
                // null é "empty"
                if (results == null) return true;
                // Suponhamos que se tenha uma propriedade length com um valor diferente de zero
                // Essa proriedade será verdadeira
                if (results.length > 0)    return false;
                console.log(results.length);
                if (results.length === 0)  return true            
                return true;
            }

            //se o array dos resultados for vazio
            if(isEmpty(results)==true){
                res.status(404).json({ erro: "Não é possível encontrar a Vaga!" });
            }
            else{
                res.json(results);
            }
          
            
           
        });
    });


}
