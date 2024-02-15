# Explanation
  
  When calling things like `Deno.cwd()`, it is the current working directory of the _process_,
  not the file it was called from.
  
  To get that value, you must use `import.meta.url` and the `fromFileUrl` function
  from the **path** module.
  
  Here are the values:
  