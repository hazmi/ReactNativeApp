import store from "../store";

describe("./store", () => {
  it("has standing state", () => {
    expect( typeof store.getState().standing ).to.equal( 'object' );
  });

});
