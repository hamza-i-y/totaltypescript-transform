import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

type TMyFunc = typeof myFunc;

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<TMyFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
