import { parser } from "./parser";

import { calc } from "./engine";

import { mathPriorities } from "./mathOperators";
const [FIRST, SECOND, THIRD] = mathPriorities;

export const runner = (line: string): number => {
  const stack = parser(line);

  console.log(stack);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const firstPrioritiesRes = calc(stack, FIRST);

  console.log(firstPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  const secondPrioritiesRes = calc(firstPrioritiesRes, SECOND);

  console.log(secondPrioritiesRes);

  if (secondPrioritiesRes.length === 1) {
    return Number(secondPrioritiesRes[0]);
  }

  return calc(secondPrioritiesRes, THIRD);
};
