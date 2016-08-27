const initialState = {
  title: '',
  isRefreshing: false,
  clubs: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return Object.assign({}, state, {
        title: action.title
      });

    case "ADD_CLUB":
      const { pos, name, played, gd, pts } = action.data;
      return Object.assign({}, state, {
        clubs: [
          ...state.clubs,
          {
            pos,
            name,
            played,
            gd,
            pts
          }
        ] 
      });



    case "CLEAR_CLUBS":
      return Object.assign({}, state, {
        clubs: []
      });

    default:
      return state;
  }
}

export default reducer;

