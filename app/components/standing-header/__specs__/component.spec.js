import React from "react";
import { shallow } from "enzyme";

import { StandingHeader } from "../component";


describe("./standing-header/component", () => {
  it("has 5 headers with the correct order", () => {
    let component = <StandingHeader />;
    let wrapper = shallow(component);

    expect( wrapper.children().length ).to.equal( 5 );
    expect( wrapper.find('Text').at(0).contains( 'Pos' ) ).to.equal( true );
    expect( wrapper.find('Text').at(1).contains( 'Club' ) ).to.equal( true );
    expect( wrapper.find('Text').at(2).contains( 'Pl' ) ).to.equal( true );
    expect( wrapper.find('Text').at(3).contains( 'GD' ) ).to.equal( true );
    expect( wrapper.find('Text').at(4).contains( 'Pts' ) ).to.equal( true );
  })
});
