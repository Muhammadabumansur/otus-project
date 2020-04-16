import React from "react";

type HelloWorldProps = {
  user: string;
};

export default function HelloWorld({ user }: HelloWorldProps) {
  return <div>Hello World, {user}</div>;
}
