export const addClub = (pos, name, played, gd, pts) => {
  return {
    type: 'ADD_CLUB',
    data: {
      pos,
      name,
      played,
      gd,
      pts
    }
  }
}

export const clearClubs = () => {
  return {
    type: 'CLEAR_CLUBS'
  }
}
export const updateTitle = (title) => {
  return {
    type: 'UPDATE_TITLE',
    title
  }
}

export default { addClub, clearClubs, updateTitle };
