/* @flow */
import React from 'react';
import ezFlux from '../state/ez-flux';
import { connectClass } from 'ez-react';

type DocProps = { onRoute: () => Promise<Object> };

export default class Doc extends React.PureComponent {
  componentDidMount() {
    this.props.onRoute();
  }

  props: DocProps;

  render() {
    return (
      <div>
        <div>I am Doc</div>
        <div>{ezFlux.state.test.hello}</div>
      </div>
    );
  }
}
