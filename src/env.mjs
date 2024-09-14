import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CONTACT_PHONE: z.string().min(1),
    NEXT_PUBLIC_INSTAGRAM_USER: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    NEXT_PUBLIC_INSTAGRAM_USER: process.env.NEXT_PUBLIC_INSTAGRAM_USER,
  },
});
