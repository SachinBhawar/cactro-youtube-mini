// middleware/logger.js
const logger = async (req, res, next) => {
    const start = Date.now();

    await next();

    const log = {
        method: req.method,
        path: req.path,
        duration: Date.now() - start,
        timestamp: new Date(),
        metadata: {
            ip: req.ip,
            userAgent: req.get("User-Agent"),
        },
    };

    await AuditLog.create(log);
};
