import { jsx } from 'react/jsx-runtime';
import { c as cn } from './Layout_DR_bg9XB.mjs';
import 'react';

function Title({
  children,
  className
}) {
  return /* @__PURE__ */ jsx(
    "h2",
    {
      className: cn(
        "md:text-5xl text-2xl  uppercase  font-bold group relative w-fit p-5  overflow-hidden bg-neutral-800 rounded-b-md ",
        className
      ),
      children
    }
  );
}

export { Title as T };
