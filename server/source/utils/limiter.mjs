import rateLimiter from "express-rate-limit"

export const limiter = (maxRequests, resTime) => rateLimiter({
    windowMs: resTime,
    max: maxRequests,
    headers: true,
})