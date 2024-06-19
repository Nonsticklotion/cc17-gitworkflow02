const errorMiddleware = (err, req, res, next) => {
  err.statusCode(401).json({ message: "error" });
};

module.exports = errorMiddleware;
