import reducer from "../reducer";

describe("./standing/reducer", () => {
  it("can add club data to the empty store", () => {
    let returnValue = reducer([], {
      type: "ADD_CLUB",
      data: {
        pos: "1",
        played: "3",
        gd: "+9",
        name: "Arsenal",
        pts: "9"
      }
    });

    const expectedResult = [
      {
        pos: "1",
        played: "3",
        gd: "+9",
        name: "Arsenal",
        pts: "9"
      }
    ];

    expect( returnValue ).to.deep.equal( expectedResult );
  });
  it("can add club data to existing store", () => {
    let returnValue = reducer([{
        pos: "2",
        played: "3",
        gd: "+8",
        name: "Leicester",
        pts: "6"
    }], {
      type: "ADD_CLUB",
      data: {
        pos: "1",
        played: "3",
        gd: "+9",
        name: "Arsenal",
        pts: "9"
      }
    });

    const expectedResult = [
      {
        pos: "2",
        played: "3",
        gd: "+8",
        name: "Leicester",
        pts: "6"
      },
      {
        pos: "1",
        played: "3",
        gd: "+9",
        name: "Arsenal",
        pts: "9"
      }
    ];

    expect( returnValue ).to.deep.equal( expectedResult );
  })

  it("can clear clubs in existing store", () => {
    let returnValue = reducer([{
        pos: "2",
        played: "3",
        gd: "+8",
        name: "Leicester",
        pts: "6"
    }], {
      type: "CLEAR_CLUBS"
    });

    const expectedResult = [];

    expect( returnValue ).to.deep.equal( expectedResult );
  })
});


