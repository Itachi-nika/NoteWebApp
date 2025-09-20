import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {

    try {
        const {success} = await ratelimit.limit("my-limit-key"); // you can use req.ip to identify user

        if(!success){
            return res.status(429).json({message:"Too many requests"});
        }
        next();
    } catch (error) {
        console.log("Rate Limiter Error:", error);
        next(error);
        
    }
}

export default rateLimiter;