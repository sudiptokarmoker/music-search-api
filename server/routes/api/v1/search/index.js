const e = require("connect-flash");
const db = require("../../../../config/db");
const responseObj = require("./response");
const { requiresLogin } = require("../../../../middleware/users/admin_user");
//const dashhboardModel = require("../../../../models/dashboard");

module.exports = (app, passport, jwt) => {
  /**
   * Dashboard method
   * here we would trace user count here
   */
  app.get("/api/v1/dashboard/index", requiresLogin, async(req, res, next) => {
    try {
        /**
         * get total user without admin type user
         */
        const getTotalUser = await db.query("SELECT COUNT(*) FROM users WHERE (status = 'free' or status = 'free_trial' or status = 'premium') AND roles IS NULL", []);
        /**
         * get free type user
         */
        const getFreeTypeUser = await db.query("SELECT COUNT(*) FROM users WHERE status = 'free' AND roles IS NULL", []);
         //res.send(getFreeTypeUser.rows);
         /**
          * get free trail type user
          */
          const getFreeTrialTypeUser = await db.query("SELECT COUNT(*) FROM users WHERE status = 'free_trial' AND roles IS NULL", []);
          /**
          * get prium type user
          */
          const getPremiumTypeUser = await db.query("SELECT COUNT(*) FROM users WHERE status = 'premium' AND roles IS NULL", []);
        //res.status(200).send(execuateUserQuery.rows[0]["count"]);
        const data = {
          'totalUser': getTotalUser.rows && getTotalUser.rows[0]['count'] > 0 ? getTotalUser.rows[0]['count']: 0,
          'totalFreeUser': getFreeTypeUser.rows && getFreeTypeUser.rows[0]['count'] > 0 ? getFreeTypeUser.rows[0]['count']: 0,
          'totalFreeTrialUser': getFreeTrialTypeUser.rows && getFreeTrialTypeUser.rows[0]['count'] > 0 ? getFreeTrialTypeUser.rows[0]['count']: 0,
          'totalPremimumUser': getPremiumTypeUser.rows && getPremiumTypeUser.rows[0]['count'] > 0 ? getPremiumTypeUser.rows[0]['count']: 0,
        };
        res.status(200).send(responseObj.responseFormat("user count data", true, data, 1));
        /*
        if(getTotalUser.rows && getTotalUser.rows[0]['count'] > 0){
            res.status(200).send(responseObj.responseFormat("Found user", true, getTotalUser.rows[0], 1));
        } else {
            res.status(200).send(responseObj.responseFormat("Not found any user", true, {}, 0));
        }
        */
    } catch (err) {
      res.status(417).send(responseObj.responseFormat("exception handled", true, {
        error: err.message
      }, 0));
    }
  });
};