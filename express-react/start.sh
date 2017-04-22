#!/bin/bash

printf '\e[1;34m%-6s\e[m' "







                                        EZ










"

JOBS=(
  "webpack --debug --watch --hide-modules --define process.env.NODE_ENV='\"development\"'"
  "NODE_ENV=development nodemon -q --ignore static/** -w ./app ./app/app-entry-points/server/server.js"
  "esw -w --cache --color --ext .js --ext .jsx ./src"
  "nodemon -q --watch src/** --ext js --ext jsx -x 'flow; echo'"
  "babel src --out-dir app/ --watch"
  "jest --watchAll"
)
NAMES="  ,  ,  ,  ,  ,  "
COLORS="bgMagenta.black,bgYellow.black,bgGreen.black,bgBlue.black,bgRed.black,bgCyan.black"

IFS='%'
concurrently -k --prefix name --names "$NAMES" --prefix-colors "$COLORS" ${JOBS[*]}
unset IFS