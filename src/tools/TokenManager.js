import jwt from "jsonwebtoken";

import { environment } from "../config/enviroment.js";

class TokenManager {
    jwt=jwt;
    secret=environment.JWT_SECRET;

    generateToken(user) {
        return this.jwt.sign({ 
            user,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) 
        }, this.secret);
    }

    verifyToken(token) {
        return this.jwt.verify(token, this.secret);
    }
}

export default new TokenManager();