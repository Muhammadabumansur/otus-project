import { isNumber } from "./helpers";
import { mathBinaryOperators, mathUnaryOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

const unaryOperatorsCalc = (operand: string): string => {
  let unaryOperator = "";
  Object.keys(mathUnaryOperators).forEach((operator: string): void => {
    if (operand.includes(operator)) {
      unaryOperator = operator;
    }
  });
  if (unaryOperator !== "") {
    return String(
      mathUnaryOperators[unaryOperator](
        Number(operand.slice(0, -unaryOperator.length))
      )
    );
  }
  return operand;
};

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1] && unaryOperatorsCalc(stack[key - 1]);

    item = unaryOperatorsCalc(item);

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathBinaryOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
