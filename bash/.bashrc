DEV_HOME=$HOME/Developer
REPO_HOME=$DEV_HOME/repositories
IS_OSX="$OSTYPE" == "darwin"*
IS_WIN="$OSTYPE" == "win"* -o "$OSTYPE" == "msys"

[ -f $HOME/.alias ] &&	source $HOME/.alias
[ -f $HOME/git-completion.bash ] && source $HOME/git-completion.bash
[ -f $HOME/git-prompt.sh ] && source $HOME/git-prompt.sh
[ -f $HOME/git-prompt.sh ] && PS1='[\u@\h \W$(__git_ps1 " (%s)")]\$ '
[ -f $HOME/.git-shortcuts ] && source $HOME/.git-shortcuts
[ -f $HOME/.ssh-env ] && source $HOME/.ssh-env

# Windows bash files
if [ "$OSTYPE" == "win"* -o "$OSTYPE" == "msys" ]; then
  [ -f $HOME/.bash_rc.v1.win ] && source $HOME/.bashrc.v1.win
fi

# added by travis gem
[ -f /Users/andrewsmith/.travis/travis.sh ] && source /Users/andrewsmith/.travis/travis.sh

# Docker
eval "$(docker-machine env default)"

# Android SDK
export ANDROID_HOME=/usr/local/opt/android-sdk
