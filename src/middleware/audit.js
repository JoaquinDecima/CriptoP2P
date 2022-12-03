import Logger from "pino";
import onFinished from "on-finished";

export default function audit(req, res, next) {
    const init = new Date();
    onFinished(res, (err, res) => {
        Logger().info({
            method: req.method,
            url: req.originalUrl,
            body: req.body,
            query: req.query,
            params: req.params,
            headers: req.headers,
            ip: req.ip,
            protocol: req.protocol,
            secure: req.secure,
            hostname: req.hostname,
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            headersResponse: res.headers,
            bodyResponse: res.body,
            cachableResponse: res.cachable,
            timeOfResponse: `${new Date() - init}ms`
        });
    });
    next();
}