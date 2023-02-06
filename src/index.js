const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const path = require('path');
const rootPath = path.normalize(path.join(__dirname, '../'));

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
//app.use('/files', express.static("files"));
app.use(express.static(path.normalize(path.join(rootPath, '/files'))))

require("./config/mongoose.js")(app);
require('./app/routerHandler')(app);

app.get('/', (req, res) => {
    res.json({
        message: 'Test'
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});

