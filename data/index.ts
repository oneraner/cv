import { fullstack } from "./fullstack";
import { fullstackZh } from "./fullstack-zh";

export const cvs = {
  fullstack,
  "fullstack-zh": fullstackZh,
};

export type CVSlug = keyof typeof cvs;
