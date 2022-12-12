exports.handle404Errors = (req, res, next) => {
    res.status(404).send({msg: 'No such path found. Try again...'});
}