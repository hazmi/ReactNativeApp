/* global expect */
/* eslint-env node, mocha */

import { Standing, mapStateToProps } from '../container';

describe('./standing/container', () => {
  it('has state.standing in mapStateToProps', () => {
    const state = {
      standing: {
        title: 'League Title',
      },
    };

    const returnValue = mapStateToProps(state);

    expect(returnValue).to.deep.equal(state);
  });

  it('wrapped standing component', () => {
    expect(Standing.WrappedComponent.name).to.equal('Standing');
  });
});
