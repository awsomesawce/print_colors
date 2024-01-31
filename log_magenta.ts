import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";

/**
 * Log a string to console in magenta color.
 * @param s String to log
 * 
 * @version 0.0.1
 * 
 * @remarks Type check changed to be first.
 */
export function logMagenta (s: string): void {
  // * Check if param is a string.
  if (typeof s !== 'string') {
      throw new TypeError("Has to be string")

  } else {
    // TODO: get rid of first line, merge with second.
    const res = colors.magenta(s)
    console.log(res)
  }
}


if (import.meta.main) {
  logMagenta("This shall be in fabulous logging output.")
}
