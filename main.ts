#!/usr/bin/env -S deno run -A

import { walk } from "https://deno.land/std@0.212.0/fs/walk.ts";

import * as cli from "$std/cli/mod.ts"

export async function listItems(pth: string): Promise<void> {
  for await (const entry of walk(pth)) {
    console.log(entry.path);
  }
}

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  
  //console.log("Add 2 + 3 =", add(2, 3));
  //await listItems('.')
  console.log(cli);
}
