module.exports = (req, res, next) => {
    if (!req.session.user) {
        res.send("pas autorisé!");
        return;
    }
    //else continue
    res.send("pas autorisé!");
    // next();
};