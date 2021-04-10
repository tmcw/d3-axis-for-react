import React from "react";
import renderer from "react-test-renderer";
import { Axis, Orient } from "../src/index";
import { scaleLinear } from "d3";

test("axis with default options", async () => {
  const scale = scaleLinear().domain([0, 1]).range([0, 1]);
  const component = renderer.create(<Axis<number> scale={scale} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("axis with top orientation", async () => {
  const scale = scaleLinear().domain([0, 1]).range([0, 1]);
  const component = renderer.create(
    <Axis<number> orient={Orient.top} scale={scale} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
