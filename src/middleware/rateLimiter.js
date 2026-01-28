import { ratelimit } from "../config/upstash.js"

export const rateLimiter = async (req, res, next) => {
  try {
    // can put userid instead of 'my-rate-limit' if theres users
    const { success } = await ratelimit.limit('my-rate-limit'); // identifier
    if (!success) {
      return res.status(429).json({ message: 'Too many request pls try again later' });
    }

    next();

  } catch (error) {
    console.log('Rate limit error', error);
    next(error);
  }
};
