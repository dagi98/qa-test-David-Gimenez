const express = require('express');
const cors = require('cors');
const seed = require('./data/seed');
const restConfig = require('dotenv-flow').config({
  path: process.env.DOTENV_FLOW_PATH || process.cwd()
}).parsed;

const app = express();
const port_server = restConfig.PORT;
const PORT = process.env.PORT || process.env.port || port_server;
const PATH = '/dev/api/programs';
const programs = [];

const checkKey = function(req, res, next) {
  if (req.headers[restConfig.API_KEY_NAME] !== restConfig.API_KEY_VALUE) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }
  // console.log(req);
  next();
}; 

app.use(cors());
app.use(express.json());
app.use(express.text({type: '*/*'}));

app.get(PATH, checkKey, (req, res) => {
    res.json(programs);
});

app.post(PATH, checkKey, (req, res) => {
    const program = {
      ...seed,
      id: req.body
    };
    programs.push(program);
    res.status(200).json(program);
});

app.delete(PATH, checkKey, (req, res) => {
    programs.pop();
    res.status(200).json(programs);
});

app.listen(PORT, () => console.log(`Running server on port=${PORT}, path=${PATH} and ${restConfig.API_KEY_NAME}=${restConfig.API_KEY_VALUE}`));

module.exports = app;