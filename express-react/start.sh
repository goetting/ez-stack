#!/bin/bash

printf '\e[1;34m%-6s\e[m' "







                                        EZ










"
npm run babel;
npm run webpack;

JOBS=(
  "npm run webpack:watch"
  "npm run babel:watch"
  "npm run lint:watch"
  "npm run flow:watch"
  "npm run serve:watch"
)
NAMES="WebP,Babl,Lint,Flow,Node,  "
COLORS="bgMagenta.black,bgYellow.black,bgGreen.black,bgBlue.black,bgRed.black,bgCyan.black"

IFS='%'
concurrently -k --prefix name --names "$NAMES" --prefix-colors "$COLORS" ${JOBS[*]}
unset IFS