const AssistantV1 = require('ibm-watson/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

const service = new AssistantV1({
    version: '2019-02-28',
    iam_apikey: 'mijQYQvn3AEqTB3TYjNZygMIq6jtHroyWF4Vcv3APpOJ',
    url: 'https://gateway-lon.watsonplatform.net/assistant/api'

});


app.post('/conversation/', (req, res) => {
    const { text} = req.body;
  
    const params = {
      input: { text },
      workspace_id: '3ac865fb-c816-4c2a-9608-b5b68a588885'
    };
  
    service.message(params, (err, response) => {
      if (err) {
        console.error(err);
        res.status(500).json(err);
      } else {
        res.json(response);
      }
    });
  });
  
  app.listen(port, () => console.log(`Running on port ${port}`));
  