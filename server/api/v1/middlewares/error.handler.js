// eslint-disable-next-line no-unused-vars, no-shadow
export default function errorHandler(err, req, res, next) {
  // const errors = err.errors || { status: false, msg: err.message };
  // res.status(err.status || 200).json({ errors });
  res.status(err.status || 200).json({ status: false, msg: err.message });
}
