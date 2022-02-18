const app = require('express')();
const PORT = '8000';
/**
 * making white lists here for CORS issues
 */
var whitelist = [
    'http://localhost:8000',
	'http://localhost:3000'
  ];

  var corsOptions = {
      origin: function (origin, callback) {
          if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
          } else {
              console.log(origin)
              callback(new Error('Not allowed by CORS'))
          }
        },
      // origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true
  }

app.use(require('cors')(corsOptions))
    .listen(PORT, () => { console.log(`Server started on HTTP port: http://localhost:${PORT}`) });

// adding search route here
require('./routes/api/v1/search/index')(app);

app.get('*', function(req, res){
        res.status(404).send({
          error: 'route not valid'
        }).end();
      });