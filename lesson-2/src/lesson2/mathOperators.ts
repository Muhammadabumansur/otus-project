export type ScalarBinaryOperationType = (
  first: number,
  second: number
) => number;
export type ScalarUnaryOperationType = (first: number) => number;

export const mul: ScalarBinaryOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarBinaryOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarBinaryOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarBinaryOperationType = (
  first: number,
  second: number
): number => first - second;

export const exp: ScalarBinaryOperationType = (
  first: number,
  second: number
): number => first ** second;

export const pow: ScalarUnaryOperationType = (argument: number): number =>
  argument ** 2;

export const fact: ScalarUnaryOperationType = (argument: number): number =>
  argument === 0 ? 1 : argument * fact(argument - 1);

export const mathBinaryOperators: {
  [key: string]: ScalarBinaryOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": exp,
};

export const mathUnaryOperators: { [key: string]: ScalarUnaryOperationType } = {
  "**": pow,
  "!": fact,
};

export const mathPriorities: number[] = [1, 2, 3];

const [FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
  "**": FIRST,
};
