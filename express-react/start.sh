#!/bin/bash

printf '\e[1;34m%-6s\e[m' "







                                        EZ










"


JOBS=(
  "webpack --debug --watch --hide-modules --define process.env.NODE_ENV='\"development\"'"
  "NODE_ENV=development nodemon -q --ignore static/** -w ./app ./app/server.js"
  "nodemon -q --watch src/** --ext js --ext jsx -x 'eslint --color --ext .js --ext .jsx ./src; echo'"
  "nodemon -q --watch src/** --ext js --ext jsx -x 'flow; echo'"
)
NAMES="WebP,Node,Lint,Flow"
COLORS="bgGreen.black,bgYellow.black,bgMagenta.black,bgBlue.black"

IFS='%'
concurrently -k --prefix name --names "$NAMES" --prefix-colors "$COLORS" ${JOBS[*]}
unset IFS