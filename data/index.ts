import { frontend } from "./frontend";
import { fullstack } from "./fullstack";
import { frontendZh } from "./frontend-zh";

export const cvs = {
  fullstack,
  frontend,
  "frontend-zh": frontendZh,
};

export type CVSlug = keyof typeof cvs;
