import TokenManager from '../tools/TokenManager.js';

export default function isAuthenticated(req, res, next) {
    console.info(TokenManager.verifyToken(req.headers.token))
	try {
		if(TokenManager.verifyToken(req.headers.token)){
            req.headers.user = TokenManager.verifyToken(req.headers.token).user;
			next();
		}else{
			res.status(401).send({
				error: 'Unauthorized',
				message: 'client failed to authenticate with the server'
			});
		}
	} catch(error) {
		res.status(409).send({
			error: 'Unauthorized',
			message: error
		});
	}
}