/* @flow */
type Request = Object;
type Response = Object;
type Markup = string;
type CacheKey = string;
type Next = (string | void) => void;
type Cache = {
  items: { [CacheKey]: string },
  setTTL: number => void,
  getKey: Request => CacheKey,
  set: (Request, Markup) => void,
  get: Request => Markup | void,
  checkRoute: (Request, Response, Next) => void,
};

let timeout: any = null;
const cache: Cache = {
  items: {},
  getKey: ({ originalUrl, method }) => `${method}${originalUrl}`,
  get: req => cache.items[cache.getKey(req)],
  set: (req, markup) => {
    cache.items[cache.getKey(req)] = markup;
  },
  setTTL: (ms) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { cache.items = {}; }, ms);
  },
  checkRoute: (req, res, next) => {
    const cachedMarkup = cache.get(req);

    if (cachedMarkup) res.send(cachedMarkup);
    else next();
  },
};

export default cache;
