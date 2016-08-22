import React from "react";
import { shallow } from "enzyme";

import { StandingItem } from "../component";

describe("./standing-item/component", () => {
  it("render 5 content with the correct order", () => {
    let wrapper = shallow( 
      <StandingItem data={{
          pos: '1',
          played: '1',
          gd: '+2',
          pts: '3'
      }}>Arsenal</StandingItem>
    );

    expect( wrapper.children().length ).to.equal( 5 );
    expect( wrapper.find('Text').at(0).contains( '1' ) ).to.equal( true );
    expect( wrapper.find('Text').at(1).contains( 'Arsenal' ) ).to.equal( true );
    expect( wrapper.find('Text').at(2).contains( '1' ) ).to.equal( true );
    expect( wrapper.find('Text').at(3).contains( '+2' ) ).to.equal( true );
    expect( wrapper.find('Text').at(4).contains( '3' ) ).to.equal( true );
  })
});

