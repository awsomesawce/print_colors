Import-Module posh-git

sal fe foreach

function Run-Deno {
  [CmdletBinding()]
  param (
      [Parameter(ValueFromRemainingArguments)]
      [string[]]
      $dargs
  )
  if ($dargs.Count -eq 0) {
    Write-Debug "Zero args"
  }
  deno run $dargs[0] $dargs[1] $dargs[2] $dargs[3] 
}

set-alias dr Run-Deno -Option AllScope