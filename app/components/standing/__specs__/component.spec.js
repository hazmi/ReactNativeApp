/* global expect */
/* eslint-env node, mocha */
/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { shallow } from 'enzyme';

import { Standing } from '../component';

describe('./standing/component', () => {
  it('has correct title', () => {
    const data = {
      title: 'League Title',
      isRefreshing: false,
      clubs: [],
    };
    const component = (
      <Standing
        standing={data}
        updateRefreshState={() => {}}
        updateClubs={() => {}}
      />
    );
    const wrapper = shallow(component);

    expect(wrapper.find('Text').at(0).contains('League Title')).to.equal(true);
  });

  it('has custom status bar', () => {
    const component = (
      <Standing
        standing={{ clubs: [] }}
        updateRefreshState={() => {}}
        updateClubs={() => {}}
      />
    );
    const wrapper = shallow(component);

    expect(wrapper.find('StatusBar').length).to.equal(1);
  });

  it('render the correct number of clubs', () => {
    const data = {
      title: 'League Title',
      isRefreshing: false,
      clubs: [
        {
          pos: '1',
          played: '3',
          gd: '+9',
          name: 'Arsenal',
          pts: '9',
        },
        {
          pos: '2',
          played: '3',
          gd: '+8',
          name: 'Leicester',
          pts: '6',
        },
      ],
    };
    const component = (
      <Standing
        standing={data}
        updateRefreshState={() => {}}
        updateClubs={() => {}}
      />
    );
    const wrapper = shallow(component);

    expect(wrapper.find('StandingItem').length).to.equal(2);
  });
});
