/* @flow */
import React from 'react';
import ezFlux from '../ez-flux';

type DocProps = { loadData: () => Promise<Object> };

export default class Doc extends React.PureComponent {
  componentDidMount() {
    this.props.callOnRoute();
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
