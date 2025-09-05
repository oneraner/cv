import { frontend } from "./frontend";
import { fullstack } from "./fullstack";

export const cvs = {
  fullstack,
  frontend,
};

export type CVSlug = keyof typeof cvs;
