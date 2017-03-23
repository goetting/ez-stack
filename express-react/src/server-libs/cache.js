/* @flow */
import sendIndex from './index-responder';


type CachedItem = { ezState: Object, App: string };
type Request = Object;
type Response = Object;
type EZState = Object;
type cacheKey = string;
type Next = (string | void) => void;
type Cache = {
  items: { [cacheKey]: CachedItem },
  setTTL: number => void,
  getKey: Request => cacheKey,
  set: (Request, EZState, App: string) => void,
  get: Request => CachedItem | void,
  middleWare: (Request, Response, Next) => void,
};

let timeout: any = null;
const cache: Cache = {
  items: {},
  getKey: ({ originalUrl, method }) => `${method}${originalUrl}`,
  get: req => cache.items[cache.getKey(req)],
  set: (req, ezState, App) => {
    cache.items[cache.getKey(req)] = { ezState, App };
  },
  setTTL: (ms) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { cache.items = {}; }, ms);
  },
  middleWare: (req, res, next) => {
    const cached = cache.get(req);

    if (cached) sendIndex(cached, res);
    else next();
  },
};

export default cache;
