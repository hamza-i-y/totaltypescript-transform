/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

type A = //Discriminated union

    | {
        type: "a";
        a: string;
      }
    | {
        type: "b";
        b: string;
      }
    | {
        type: "c";
        c: string;
      };

type B = "a" | "b" | "c"; //Union

enum C { //Enum
  A = "a",
  B = "b",
  C = "c",
}

export {};
