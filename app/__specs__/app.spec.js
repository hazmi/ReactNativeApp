import React from "react";
import { shallow } from "enzyme";

import App from "../app";


describe("./app", () => {
  it("wrapped with Redux's Provider", () => {
    let component = <App />;
    let wrapper = shallow(component);
    // console.log(typeof wrapper );

    // expect( wrapper.find('Text').at(0).contains( 'League Title' ) ).to.equal( true );
  });
});
