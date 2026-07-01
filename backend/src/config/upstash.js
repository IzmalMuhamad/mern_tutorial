// This file sets up a rate limiter using Upstash Redis to limit the number of requests to the API.

import { Redis } from "@upstash/redis";
import {Ratelimit} from "@upstash/ratelimit";
import dotenv from "dotenv";

dotenv.config();

// only limit to 10 requests per minute
const rateLimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(50, "1 m"), // 5 requests per 10 seconds
});
  
export default rateLimiter;
