const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  const token = req.cookies.user_access_token;

  if (!token) {
    return res.status(403).send({
      message: 'Not authorized, no token',
    });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;

    next();
  } catch (error) {
    res.status(403).send({
      message: 'Not authorized, token failed',
    });
  }
};

module.exports = { protect };
