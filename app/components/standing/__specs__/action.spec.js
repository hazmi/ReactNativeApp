import actions from "../action";

describe('./standing/action', () => {
  describe('#addClub', () => {
    it('should create an action to add a club', () => {
      const pos = "1";
      const name = "Arsenal";
      const played = "3";
      const gd = "+9";
      const pts = "9";

      const expectedResult = {
        type: 'ADD_CLUB',
        data: {
          pos: "1",
          name: "Arsenal",
          played: "3",
          gd: "+9",
          pts: "9"
        }
      };

      expect( actions.addClub(pos, name, played, gd, pts) ).to.deep.equal( expectedResult );
    });
  });
  describe('#clearClub', () => {
    it('should create an action to clear clubs', () => {

      const expectedResult = {
        type: 'CLEAR_CLUBS'
      };

      expect( actions.clearClubs() ).to.deep.equal( expectedResult );
    });
  });
})

