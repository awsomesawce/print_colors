#!/usr/bin/env -S deno run -A

import * as md from "https://deno.land/x/charmd@v0.0.2/mod.ts";
import { demoText } from "https://deno.land/x/charmd@v0.0.2/example.ts";

export const renderFile = async (pth: string): Promise<void> => {
  const str = await Deno.readTextFile(pth);
  const rendered = md.renderMarkdown(str);
  console.log(rendered);
};

if (import.meta.main) {
  await renderFile("README.md");
}
