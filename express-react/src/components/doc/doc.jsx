/* @flow */
import React from 'react';
import ezFlux from '../../state/ez-flux';

type DocProps = { onRoute: () => Promise<Object> };

export default class Doc extends React.PureComponent {
  defaultProps: DocProps = {
    onRoute: () => new Promise(res => res({})),
  };

  componentDidMount() {
    this.props.onRoute();
  }

  props: DocProps;

  render() {
    return (
      <div className="doc">
        <div>I am Doc</div>
        <div>{ezFlux.state.test.hello}</div>
      </div>
    );
  }
}
