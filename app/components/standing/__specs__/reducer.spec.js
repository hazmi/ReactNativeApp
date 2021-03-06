/* global expect */
/* eslint-env node, mocha */

import { reducer } from '../reducer';

describe('./standing/reducer', () => {
  it('return empty title, and empty club and refresh state false in the initial state', () => {
    const returnValue = reducer(undefined, {
      type: 'XX',
    });

    const expectedResult = {
      title: '',
      isRefreshing: true,
      clubs: [],
    };

    expect(returnValue).to.deep.equal(expectedResult);
  });

  it('can update title', () => {
    const state = reducer([], {
      type: 'UPDATE_TITLE',
      title: 'Premier League 2016/2017',
    });

    expect(state.title).to.equal('Premier League 2016/2017');
  });

  it('can update refresh state', () => {
    const state = reducer([], {
      type: 'UPDATE_REFRESH_STATE',
      isRefreshing: true,
    });

    expect(state.isRefreshing).to.equal(true);
  });

  it('can add club data to the empty store', () => {
    const state = reducer(undefined, {
      type: 'ADD_CLUB',
      data: {
        pos: '1',
        played: '3',
        gd: '+9',
        name: 'Arsenal',
        pts: '9',
      },
    });

    const expectedResult = [
      {
        pos: '1',
        played: '3',
        gd: '+9',
        name: 'Arsenal',
        pts: '9',
      },
    ];

    expect(state.clubs).to.deep.equal(expectedResult);
  });

  it('can add club data to existing store', () => {
    const originalState = {
      title: '',
      isRefreshing: false,
      clubs: [
        {
          pos: '2',
          played: '3',
          gd: '+8',
          name: 'Leicester',
          pts: '6',
        },
      ],
    };
    const state = reducer(originalState, {
      type: 'ADD_CLUB',
      data: {
        pos: '1',
        played: '3',
        gd: '+9',
        name: 'Arsenal',
        pts: '9',
      },
    });

    const expectedResult = [
      {
        pos: '2',
        played: '3',
        gd: '+8',
        name: 'Leicester',
        pts: '6',
      },
      {
        pos: '1',
        played: '3',
        gd: '+9',
        name: 'Arsenal',
        pts: '9',
      },
    ];

    expect(state.clubs).to.deep.equal(expectedResult);
  });

  it('can clear clubs in existing store', () => {
    const originalState = {
      title: '',
      isRefreshing: false,
      clubs: [
        {
          pos: '2',
          played: '3',
          gd: '+8',
          name: 'Leicester',
          pts: '6',
        },
      ],
    };

    const state = reducer(originalState, {
      type: 'CLEAR_CLUBS',
    });

    expect(state.clubs).to.deep.equal([]);
  });
});
