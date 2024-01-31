{ pkgs }: {
  deps = [
    pkgs.sptk
    pkgs.deno
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}