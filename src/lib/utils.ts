import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = "https://stepandemianenko.dev";

export const contact = {
  email: "stepan.demyanenko30@gmail.com",
  github: "https://github.com/sneri12pic",
  linkedin: "https://www.linkedin.com/in/stepan-demianenko-397579298/",
  location: "Edinburgh, UK - open to relocation"
};
