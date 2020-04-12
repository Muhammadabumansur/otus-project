import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathBinaryOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [FIRST, SECOND, THIRD] = mathPriorities;

export const highPrioritiesCalc = (
  stack: ParsedLineType,
  priority: number
): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === priority) {
      if (!mathBinaryOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathBinaryOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const lowestPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (
      mathOperatorsPriorities[item] === FIRST ||
      mathOperatorsPriorities[item] === SECOND
    ) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      result = mathBinaryOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));

export const calc = (stack: ParsedLineType, priority: number): any => {
  if (priority === THIRD) {
    return lowestPrioritiesCalc(stack);
  }
  return highPrioritiesCalc(stack, priority);
};
