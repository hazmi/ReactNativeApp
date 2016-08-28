import React from "react";
import { shallow } from "enzyme";

import Standing from "../component";


describe("./standing/component", () => {
  it("has correct title", () => {
    let data = {
      title: 'League Title',
      isRefreshing: false,
      clubs: []
    };
    let component = <Standing standing={ data } />;
    let wrapper = shallow(component);

    expect( wrapper.find('Text').at(0).contains( 'League Title' ) ).to.equal( true );
  });

  it("has custom status bar", () => {
    let component = <Standing standing={ {clubs: []} } />;
    let wrapper = shallow(component);
    expect( wrapper.find('StatusBar').length ).to.equal( 1 );
  });

  it("render the correct number of clubs", () => {
    let data = {
      title: 'League Title',
      isRefreshing: false,
      clubs: [
        {
          pos: "1",
          played: "3",
          gd: "+9",
          name: "Arsenal",
          pts: "9"
        },
        {
          pos: "2",
          played: "3",
          gd: "+8",
          name: "Leicester",
          pts: "6"
        }
      ]
    };
    let component = <Standing standing={ data } />;
    let wrapper = shallow(component);

    expect( wrapper.find('StandingItem').length ).to.equal( 2 );
  });
});
