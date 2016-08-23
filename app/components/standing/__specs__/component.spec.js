import React from "react";
import { shallow } from "enzyme";

import Standing from "../component";


describe("./standing/component", () => {
  it("has correct title", () => {
    let component = <Standing standing={[]} />;
    let wrapper = shallow(component);

    expect( wrapper.find('Text').at(0).contains( 'Premier League 2016/2017' ) ).to.equal( true );
  })
});

