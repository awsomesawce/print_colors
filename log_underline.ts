import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";

/**
 * Log an underlined string to console.
 * @param s String to underline
 */
export function logUnderline(s: string): void {
  if (typeof s !== "string") {
    throw new TypeError("Must be of type \"string\"");
    
  }
  console.log(colors.underline(s))
}
