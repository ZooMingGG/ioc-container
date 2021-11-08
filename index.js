let createContainer = require('./createContainer');

let container = createContainer();

let app = container.AppService;

app.start()
