All commmands executable with npm or yarn.

first, located into the express-react folder

```sh
cd express-react
```


## install

```sh
npm install
```

## dev

Run Tools and Watch (Linter, Flow, Babel, Webpack, Server)
```sh
npm start
```

The default port is 3333 and can be changed by passing PORT in the package json "serve" script

## build
Run sequentially: Webpack -p, babel
```sh
npm run build
```

Run example deployment (install, build, serve with node)
```sh
npm install;
npm run build;
npm run serve;
```

For more detailed tooling calls, consult the "scripts" section of the package.json.
