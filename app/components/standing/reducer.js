const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CLUB":
      const { pos, name, played, gd, pts } = action.data;
      return [
        ...state,
        {
          pos,
          name,
          played,
          gd,
          pts
        }
      ];

    case "CLEAR_CLUBS":
      return [];

    default:
      return state;
  }
}

export default reducer;

