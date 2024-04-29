import type { Equal, Expect } from "@type-challenges/utils";

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

/* _____________ Test Cases _____________ */

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
        author: string;
    };
}
// @ts-expect-error
Todo1.title = "Hello";
