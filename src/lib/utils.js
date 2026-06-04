//'cn' = classNames... This function is used to conditionally join classNames together. It takes in any number of arguments and returns a string of classNames that are truthy.
//Which means that i can add many classNames to an element, and only the ones that are truthy will be included in the final string of classNames. This is useful for conditionally applying styles based on certain conditions, such as whether a component is active or not.
//One thram class names mata liynna puluwn, ewa clsx walin merge lrnna puluwn

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
