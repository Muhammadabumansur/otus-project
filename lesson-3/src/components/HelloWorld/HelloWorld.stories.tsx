import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import HelloWorld from "./HelloWorld";

export default {
  title: "HelloWorld",
  decorators: [withKnobs],
};

export const HelloWorldStories = () => (
  <HelloWorld onClick={action("HelloWorld click")} user="John" />
);
