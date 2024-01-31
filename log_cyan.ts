/**
 * @module log_cyan
 * @author Carl Capodice
 * @remarks
 *
 * Print text in the color cyan to console.
 *
 * @see {@link https://deno.land/std/fmt/colors.ts|stdlib colors}
 * @see {@link https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts|cliffy colors}
 */

import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";

export function logCyan(str: string): void {
  if (typeof str === "string") {
    console.log(colors.cyan(str))
  } else {
    throw new TypeError("Must be of type \"string\"");
    
  }
}