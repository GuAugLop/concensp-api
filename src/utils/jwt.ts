import jsonwebtoken from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET!;

const jwt = {
  sign(payload: any) {
    return jsonwebtoken.sign(payload, JWT_SECRET);
  },
  verify(token: string) {
    return jsonwebtoken.verify(token, JWT_SECRET);
  },
};

export default jwt;
