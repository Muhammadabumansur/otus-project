import React from "react";
import renderer from "react-test-renderer";
import HelloWorld from "./HelloWorld";

test("HelloWorld", () => {
  const component = renderer.create(<HelloWorld user="John" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
