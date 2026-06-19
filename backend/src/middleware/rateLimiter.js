// This file defines a middleware function for rate limiting API requests using Upstash Redis. It checks if the number of requests from a user or IP address exceeds the defined limit and responds with an error if it does.

import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("my-rate-limit-key"); // Use a unique key for each user or IP address
    if (!success) {
      return res
        .status(429)
        .json({ error: "Too many requests. Please try again later." });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error in rateLimit middleware:", error);
    res.status(500).json({ error: "Internal server error" });

    next(error); // Pass the error to the next middleware (if any) for further handling
  }
};

export default rateLimiter;
