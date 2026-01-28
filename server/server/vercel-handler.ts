export function pathHandler(req, res, next) {
  if (req.path.startsWith('/api')) {
    return next();
  }
  next();
}
