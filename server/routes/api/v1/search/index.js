const responseObj = require("./../response");
const axios = require('axios');

module.exports = (app) => {
  /**
   * Dashboard method
   * here we would trace user count here
   */
  app.get("/api/v1/search/index", async(req, res, next) => {
    try {
      axios.get('https://itunes.apple.com/search?term=nirvana')
        .then(function (response) {
          // handle success
          // console.log(response.data.results);
          const getResultData = response.data.results.length;
          res.status(200).send(responseObj.responseFormat("routes found here", true, response.data.results, getResultData));
        })
        .catch(function (error) {
          // handle error
          //console.log(error);
          res.status(417).send(responseObj.responseFormat("exception handled", true, {
            error: error.message
          }, 0));
        })
        .then(function () {
          // always executed
        });
    } catch (err) {
      res.status(417).send(responseObj.responseFormat("exception handled", true, {
        error: err.message
      }, 0));
    }
  });
};