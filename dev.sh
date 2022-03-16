which -s fswatch
if [[ $? != 0 ]] ; then
  echo "fswatch is not found, trying to install it with brew: https://github.com/emcrisostomo/fswatch";
  brew install fswatch;
fi

fswatch -o ./src | xargs -n1 -I{} bash ./build.sh
