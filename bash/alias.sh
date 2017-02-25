#!/usr/bin/env bash

# Git related aliases
alias push='git push'
alias mt='git mergetool'
alias df='git difftool'
alias fa='git fetch --all'
alias st='git status'
alias glg="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
alias rbi='git rebase -i'
alias rbc='git rebase --continue'
alias rbs='git rebase --skip'
alias rba='git rebase --abort'
alias co='git checkout'
# GitHub [Hub](https://github.com/github/hub); OSX and Windows
if [ ${IS_OSX} ] && [ -f /usr/local/bin/hub ]; then
  alias git=hub
elif [ ${IS_WIN} ] && [ -f ${TOOLS_HOME}/hub/bin/hub.exe ]; then
  export PATH=$PATH:${TOOLS_HOME}/hub/bin
  eval "$(hub alias -s)"
fi
# [GitX](http://gitx.frim.nl/user_manual.html); OSX only
[ ${IS_OSX} ] && [ -f /usr/local/bin/gitx ] && alias gui=gitx

