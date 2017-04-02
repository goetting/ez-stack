#!/bin/bash

printf '\e[1;34m%-6s\e[m' "







                                        EZ










"


JOBS=(
  #"NODE_ENV=development nodemon -q --ignore static/** -w ./app ./app/app-entry-points/express/express.js"
  "NODE_ENV=development node ./app/app-entry-points/express/express.js"
  "nodemon -q --watch src/** --ext js --ext jsx -x 'eslint --color --ext .js --ext .jsx ./src; echo'"
  "nodemon -q --watch src/** --ext js --ext jsx -x 'flow; echo'"
  "babel src --out-dir app/ --watch"
)
NAMES="Node,Lint,Flow,Babl,WebP"
COLORS="bgYellow.black,bgGreen.black,bgBlue.black,bgRed.black,bgMagenta.black"

IFS='%'
concurrently -k --prefix name --names "$NAMES" --prefix-colors "$COLORS" ${JOBS[*]}
unset IFS