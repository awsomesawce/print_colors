#!/usr/bin/env nu
# Nu aliases

alias ll = ls -l

# deno aliases

alias dr = deno run
alias dra = deno run -A
alias drch = deno check

# convenience funcs

def chtsh [query: string] {                                                                             
  curl $"https://cht.sh/($query)"
}