export const addClub = (pos, name, played, gd, pts) => ({
  type: 'ADD_CLUB',
  data: {
    pos,
    name,
    played,
    gd,
    pts,
  },
});

export const clearClubs = () => ({
  type: 'CLEAR_CLUBS',
});

export const updateTitle = (title) => ({
  type: 'UPDATE_TITLE',
  title,
});

export const updateRefreshState = (isRefreshing) => ({
  type: 'UPDATE_REFRESH_STATE',
  isRefreshing,
});

export default {
  addClub,
  clearClubs,
  updateTitle,
  updateRefreshState,
};
