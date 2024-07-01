import jwt from "jsonwebtoken";

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    // console.log("No token found");
    return res.status(401).send({ message: 'Unauthorized', status: false });
  }

  jwt.verify(token, 'JWT_SECRET', (err, user) => {
    if (err) {
      // console.error("JWT verification failed:", err);
      return res.status(403).send({ message: 'Forbidden', status: false });
    }
    // console.log("User authenticated:", user);
    req.user = user;
    next();
  });
}
