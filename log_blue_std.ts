#!/usr/bin/env -S deno run -A
/** 
 * @module log_blue_std
 * @author Carl Capodice
 * @remarks Use built-in deno functionality
 * to log colors
 *
 * @see {@link https://examples.deno.land/color-logging}
 */


/** 
 * Log to console in blue
 * @param str - string to log
 * @see https://examples.deno.land/color-logging
 */
export default function logBlue(str: string): void {
  if (typeof str !== "string") {
    throw new TypeError("Must be of type \"string\"");
  }
  console.log("%cHello World", "color: blue");
}

if (import.meta.main) {
  logBlue("Hello World.  I have the blues.");
}