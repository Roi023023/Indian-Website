// middlewares/authMiddleware.js = makes user available to views
// use in app.js

//add:
//const attachUser = require('./middlewares/authMiddleware.js');

//app.use(attachUser);

module.exports = (req, res, next) => {
    if (req.session.user) {
      res.locals.user = req.session.user;
    }
    next();
  };
  