const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(
    `???`
  );
  return next(error);
};

module.exports = notFound;
