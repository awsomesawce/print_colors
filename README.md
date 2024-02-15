# print_colors deno module

Print text (_objects coming soon_) to stdout **in color** using multiple implementations.

## std colors or cliffy colors

Cliffy's version of the `colors.ts` module allows for chaining.
<<<<<<< Updated upstream

## Builtin coloring

The `console.log` method has builtin coloring capabilities illustrated [here](https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions) and on [deno by example][dbn]

[dbn]: https://github.com/denoland/denobyexample
||||||| Stash base
=======

## Contributing

I use [**xc**](https://xcfile.dev) as my main task runner.  **xc** reads tasks straight from
your README.md.

## Tasks

### MD

This is configured to print this README.md to the console, but pretty.
Using [charmd](https://deno.land/x/charmd).

```
deno run -A MD.ts
```

### writeInfo

Write a `dinfo.json` file from the output of `deno info --json`

```
deno info --json > dinfo.json
```
>>>>>>> Stashed changes
