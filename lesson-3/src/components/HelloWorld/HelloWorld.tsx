import React from "react";

type Props = {
  user: string;
};

export default function HelloWorld({ user }: Props) {
  return <div>Hello World, {user}</div>;
}
