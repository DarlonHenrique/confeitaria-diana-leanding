import { env } from "@/env.mjs";

const phone = env.NEXT_PUBLIC_CONTACT_PHONE;
const instaUser = env.NEXT_PUBLIC_INSTAGRAM_USER;
export const wppUrl = `https://api.whatsapp.com/send?phone=55${phone}`;
export const instaUrl = `https://www.instagram.com/${instaUser}`;
export const displayInstagramUser = `@${instaUser}`;
export const displayPhone = `(${phone.slice(0, 2)}) ${phone.slice(
  2,
  3
)} ${phone.slice(3, 7)}-${phone.slice(7)}`;
export const address = `R. Prof. Antônio Serralvo Sobrinho, 35, Lençóis Paulistas, SP`;
