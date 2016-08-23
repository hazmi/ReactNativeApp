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

export default { addClub, clearClubs };
