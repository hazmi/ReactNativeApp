import Standing, { mapStateToProps } from "../container";


describe("./standing/container", () => {
  it("has state.standing in mapStateToProps", () => {
    let state = { standing: { title: 'League Title' } };
    let returnValue = mapStateToProps( state );

    expect( returnValue ).to.deep.equal( { standing: { title: 'League Title' } } );
  });

  it("wrapped standing component", () => {
    expect( Standing.WrappedComponent.name ).to.equal( 'Standing' );
  });

});


