/* @flow *//* eslint-disable no-param-reassign, quote-props, quotes, comma-dangle */
import { createStore } from 'ez-flux';

const apiTestResult = {
  "hits": [
    {
      "id": "800066527",
      "title": "AUDI A3 1.8 TFSI Ambition",
      "subtitle": "CH-AUDI  Gratis_SERVICE - Ambition - Xenon - DAB - Werksgarantie bis 29.09.2018",
      "picture_url": "ricardo-beta-eu-cld-res.cloudinary.com/images/t_450/v1/product/live/800066527_v1_1/limousine-audi-a3-1-8-tfsi-ambition",
      "highlight": false,
      "start_date": "2017-04-12T21:41:00Z",
      "end_date": "2018-04-07T21:40:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "A3 1.8 TFSI Ambition",
      "make": "AUDI",
      "mileage": 20000,
      "registration_year": "2013-10-01T00:00:00Z",
      "power_hp": 180,
      "fuel_id": "1",
      "gear_id": "3",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 29900,
      "price": 29900,
      "seller_id": "404729192"
    },
    {
      "id": "801146833",
      "title": "AUDI SQ5 3.0 TDI Audi Exclusive",
      "subtitle": "--AUDI EXCLUSIVE NARDO GREY--Excellent état--Véhicule suisse--Non fumeur--Repris",
      "highlight": false,
      "start_date": "2017-04-03T00:57:00Z",
      "end_date": "2018-03-29T00:55:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "SQ5 3.0 TDI Audi Exclusive",
      "make": "AUDI",
      "registration_year": "2014-07-01T00:00:00Z",
      "power_hp": 313,
      "fuel_id": "3",
      "gear_id": "3",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 61900,
      "price": 61900,
      "seller_id": "406323669"
    },
    {
      "id": "801025093",
      "title": "AUDI SQ5 3.0 TDI Audi Exclusive",
      "subtitle": "--AUDI EXCLUSIVE NARDO GREY--Excellent état--Véhicule suisse--Non fumeur--Repris",
      "highlight": false,
      "start_date": "2017-03-27T07:45:00Z",
      "end_date": "2018-03-22T08:44:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "SQ5 3.0 TDI Audi Exclusive",
      "make": "AUDI",
      "registration_year": "2014-07-01T00:00:00Z",
      "power_hp": 313,
      "fuel_id": "3",
      "gear_id": "3",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 61900,
      "price": 61900,
      "seller_id": "406255835"
    },
    {
      "id": "801318617",
      "title": "AUDI S1 2.0 TFSI Sport",
      "subtitle": "CH-AUDI mit GRATIS-SERVICE - Glanzpaket schwarz Audi exclusive Navi Vorbereitung",
      "picture_url": "ricardo-beta-eu-cld-res.cloudinary.com/images/t_450/v1/product/live/801318617_v1_1/kombi-audi-s1-2-0-tfsi-sport",
      "highlight": false,
      "start_date": "2017-04-01T20:57:00Z",
      "end_date": "2017-05-31T20:55:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "S1 2.0 TFSI Sport",
      "make": "AUDI",
      "mileage": 1,
      "power_hp": 231,
      "fuel_id": "1",
      "gear_id": "1",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 39999,
      "price": 39999,
      "seller_id": "404729192"
    },
    {
      "id": "800004225",
      "title": "Audi A4 2.0 TDI",
      "subtitle": "Audi A4 2.0 TDI",
      "picture_url": "images.betaqxl.com/2_800004225_v1_450/autos/audi-a4-2-0-tdi.jpg",
      "highlight": false,
      "start_date": "2015-12-28T10:31:00Z",
      "end_date": "2016-12-22T10:31:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "A4 Diesel Modell 2016-",
      "make": "AUDI",
      "mileage": 8000,
      "registration_year": "2015-11-01T00:00:00Z",
      "power_hp": 190,
      "fuel_id": "3",
      "gear_id": "3",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 53400,
      "price": 53400,
      "seller_id": "406572363"
    },
    {
      "id": "800977555",
      "title": "AUDI SQ5 3.0 TDI Audi Exclusive",
      "subtitle": "--AUDI EXCLUSIVE NARDO GREY--Excellent état--Véhicule suisse--Non fumeur--Repris",
      "highlight": false,
      "start_date": "2017-03-25T06:29:00Z",
      "end_date": "2018-03-20T06:28:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "SQ5 3.0 TDI Audi Exclusive",
      "make": "AUDI",
      "registration_year": "2014-07-01T00:00:00Z",
      "power_hp": 313,
      "fuel_id": "3",
      "gear_id": "3",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 61900,
      "price": 61900,
      "seller_id": "405715792"
    },
    {
      "id": "800856703",
      "title": "AUDI SQ5 3.0 TDI Audi Exclusive",
      "subtitle": "--AUDI EXCLUSIVE NARDO GREY--Excellent état--Véhicule suisse--Non fumeur--Repris",
      "highlight": false,
      "start_date": "2017-03-16T21:15:00Z",
      "end_date": "2018-03-11T21:13:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "SQ5 3.0 TDI Audi Exclusive",
      "make": "AUDI",
      "registration_year": "2014-07-01T00:00:00Z",
      "power_hp": 313,
      "fuel_id": "3",
      "gear_id": "3",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 61900,
      "price": 61900,
      "seller_id": "380371326"
    },
    {
      "id": "800004173",
      "title": "Audi A1 1.4 TFSI Sport",
      "subtitle": "Audi A1 1.4 TFSI Sport",
      "picture_url": "images.betaqxl.com/2_800004173_v1_450/autos/audi-a1-1-4-tfsi-sport.jpg",
      "highlight": false,
      "start_date": "2015-12-28T10:31:00Z",
      "end_date": "2016-12-22T10:31:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "A1/S1 SPORTBACK Modell 2015-",
      "make": "AUDI",
      "mileage": 8000,
      "registration_year": "2015-11-01T00:00:00Z",
      "power_hp": 150,
      "fuel_id": "1",
      "gear_id": "3",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 33900,
      "price": 33900,
      "seller_id": "406572363"
    },
    {
      "id": "800004221",
      "title": "Audi A1 1.4 TFSI Sport",
      "subtitle": "Audi A1 1.4 TFSI Sport",
      "picture_url": "images.betaqxl.com/2_800004221_v1_450/autos/audi-a1-1-4-tfsi-sport.jpg",
      "highlight": false,
      "start_date": "2015-12-28T10:31:00Z",
      "end_date": "2016-12-22T10:31:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "A1/S1 SPORTBACK Modell 2015-",
      "make": "AUDI",
      "mileage": 8000,
      "registration_year": "2015-11-01T00:00:00Z",
      "power_hp": 150,
      "fuel_id": "1",
      "gear_id": "3",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 32400,
      "price": 32400,
      "seller_id": "406572363"
    },
    {
      "id": "801184465",
      "title": "AUDI A4 Avant 2.0 TDI",
      "subtitle": "***Audi A4 avant 2.0TDI ab Service und MFK!***",
      "picture_url": "ricardo-beta-eu-cld-res.cloudinary.com/images/t_450/v1/product/live/801184465_v1_1/suv-gelaendewagen-audi-a4-avant-2-0-tdi",
      "highlight": false,
      "start_date": "2017-04-04T08:15:00Z",
      "end_date": "2018-03-30T08:14:00Z",
      "offer_type": "classified",
      "condition": "new",
      "universe": "car",
      "model": "A4 Avant 2.0 TDI",
      "make": "AUDI",
      "registration_year": "2005-06-01T00:00:00Z",
      "power_hp": 140,
      "fuel_id": "3",
      "gear_id": "1",
      "delivery_cost": 0,
      "bid_count": 0,
      "buy_now_price": 0,
      "classified_price": 7995,
      "price": 7995,
      "seller_id": "404800906"
    }
  ],
  "total_count": 13247,
  "cursor": "Vdt6Mq0YQW9JSVFkME9GQ2s0TURBd05qWTFNamM9Cg",
  "facets": {}
};

function camelCaseify(obj): Object {
  return Object
    .entries(obj)
    .reduce((resObj, [key, val]) => {
      if (/_/.test(key)) {
        key = key
          .split('_')
          .reduce((resStr, el, i): string => {
            if (!i) return el;
            return `${resStr}${el.charAt(0).toUpperCase()}${el.slice(1)}`;
          }, '');
      }
      resObj[key] = val;
      return resObj;
    }, {});
}

export type ProductType = {
  id: string,
  title: string,
  subtitle: string,
  pictureUrl?: string,
  highlight: boolean,
  startDate: string,
  endDate: string,
  offerType: string,
  condition: string,
  universe: string,
  model: string,
  mileage: number,
  make: string,
  registrationYear: string,
  powerHp: number,
  fuelId: string,
  gearId: string,
  deliveryCost: number,
  bidCount: number,
  buyNowPrice: number,
  classifiedPrice: number,
  price: number,
  location?: string,
  settlerId: string,
};
type PriceFilter = { from: number, to: number };
type FuelId = string;
type FuelIdMap = { [FuelId]: boolean };
type Filters = { price: PriceFilter, fuel: FuelIdMap };
type APIResult = { hits: ProductType[], totalCont: number, cursor: string, facets: Object };
type PriceFilterUpdate = { key: 'frjom' | 'to', val: number };
export type ProductStateValues = { filters: Filters } & APIResult;


function getMockData(): APIResult {
  const data: APIResult = camelCaseify(apiTestResult);
  data.hits = data.hits.map(camelCaseify);
  return data;
}

const productStore = createStore({
  state: {
    filters: {
      price: {
        from: 0,
        to: Infinity,
      },
      fuel: {
        '1': false,
        '3': false,
      },
    },
    hits: [],
    totalCount: 13247,
    cursor: '',
    facets: {},
  },
  methods: {
    callAPI(): void {
      if (this.hits.length) return;

      const data: ProductStateValues = Object.assign(this.$copy(), getMockData());

      data.filters.price.to = Math.max(...data.hits.map(item => item.price)) || 1e6;
      this.$assign(data);
    },
    toggleFuelFilter(id: string): void {
      const { filters } = this;

      filters.fuel[id] = !filters.fuel[id];
      this.$assign({ filters });
    },
    setPriceFilter({ key, val }: PriceFilterUpdate): void {
      const { filters } = this;

      filters.price[key] = val;
      this.$assign({ filters });
    }
  },
});

if (typeof window !== 'undefined' && window.ezState) {
  productStore.$assign(window.ezState.product);
}

export default productStore;
