// middleware/requestAuth.js = blocks inauthentic requests, used once per route

module.exports = (req, res, next) => {
  if (!req.session || !req.session.user) {
    return res.redirect('/login'); 
    // or return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};