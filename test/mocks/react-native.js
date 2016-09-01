/* eslint react/prefer-es6-class: 0, react/prefer-stateless-function: 0 */

import React from 'react';

const RN = React;

export const PropTypes = React.PropTypes;

RN.StyleSheet = {
  create: (style) => style,
};

const createComponent = (type) =>
  React.createClass({
    displayName: type,
    propTypes: {
      children: React.PropTypes.node,
    },
    render() {
      return <div {...this.props}>{this.props.children}</div>;
    },
  });


RN.View = createComponent('View');
RN.Text = createComponent('Text');
RN.ScrollView = createComponent('ScrollView');
RN.StatusBar = createComponent('StatusBar');
RN.TouchableHighlight = createComponent('TouchableHighlight');

export default RN;
