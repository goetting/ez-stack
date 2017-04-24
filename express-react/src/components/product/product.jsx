/* @flow */
import React from 'react';
import { gearLang, fuelLang } from '../../const/ids-to-lang';
import type { ProductType } from '../../state/configs/products.state';

const fallBackImage = 'ricardo-beta-eu-cld-res.cloudinary.com/images/t_450/v1/product/live/801318617_v1_1/kombi-audi-s1-2-0-tfsi-sport';
const getDateLang = date => `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
const getDateTimeLang = date => `${getDateLang(date)}, ${date.getHours()}:${date.getMinutes()}`;

export default class Product extends React.Component {
  state = { image: fallBackImage };

  componentDidMount() {
    if (typeof Image !== 'undefined' && this.props.pictureUrl) {
      const img = new Image();                                                                        // eslint-disable-line no-undef

      img.onload = () => this.setState({ image: this.props.pictureUrl });
      img.src = `http://${this.props.pictureUrl}`;
    }
  }

  props: ProductType;

  render() {
    const item = this.props;
    const milage = `${item.mileage} km`;
    const gearType = gearLang[item.gearId];
    const fuelType = fuelLang[item.fuelId];
    const horsePower = `${item.powerHp} PS`;
    const startDate = getDateLang(new Date(item.startDate));
    const endDate = getDateTimeLang(new Date(item.endDate));
    const image = `http://${this.state.image}`;

    return (
      <div className="ric-article">
        <div className="ric-article__image-container">
          <img role="presentation" className="ric-article__image" src={image} />
        </div>

        <div className="ric-article__info-container">

          <div className="ric-article__main-container">
            <div className="ric-article__name">
              <strong>{item.title}</strong> {item.subtitle}
            </div>
            <div className="ric-article__specs">
              {startDate}, {milage}, {horsePower}, {fuelType}, {gearType}
            </div>
            <div className="ric-article__info" />
            <div className="ric-layout__spacer" />
            <div className="ric-article__extra">
              {item.location &&
                <span className="ric-article__location ric-color__dark-blue--text">
                  <i className="material-icons">pin_drop</i>
                  6311 Müsingen
                </span>
              }
            </div>
          </div>

          <div className="ric-article__pricing">
            <div className="ric-article__end-auction">
              <span><i className="material-icons">access_time</i> Ending </span>
              <span className="ric-article__end-auction-date">{endDate}</span>
            </div>
            <div className="ric-layout__spacer" />
            <div>
              {!!item.bidCount &&
                <div className="ric-article__bid">
                  {item.bidCount} Gebote <span>{item.price}</span>
                </div>
              }
              <div className="ric-article__buy">
                Kaufen <span>{item.buyNowPrice || item.price}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
