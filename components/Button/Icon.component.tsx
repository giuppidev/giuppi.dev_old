import clsx from "clsx";
import Link from "next/link";
import { forwardRef } from "react";

import type { ButtonHTMLAttributes } from "react";

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export const Icon = forwardRef<HTMLButtonElement, IconProps>(function Icon(
  { children, className, onClick, href, ...rest },
  ref
) {
  if (href) {
    return (
      <Link
        className={clsx(
          "inline-flex items-center justify-center w-full sm:w-auto bg-gray-50/75 hover:bg-gray-100/75 hover:text-gray-500 dark:bg-gray-900/75 dark:hover:bg-gray-800/75 dark:border-gray-300 dark:text-white dark:hover:text-primary-400 backdrop-filter backdrop-blur-sm saturate-200 text-gray-900 font-medium  rounded-lg cursor-pointer default-transition default-focus p-2 ",
          className
        )}
        href={href || ""}
        passHref
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      ref={ref}
      className={clsx(
        "group",
        "relative inline-flex items-center px-3 py-2 bg-gray-50 hover:(bg-gray-100 text-gray-700) dark:(bg-gray-900 hover:bg-gray-700 hover:text-white) text-gray-400 rounded-lg text-sm font-medium default-transition default-focus focus:ring-0",
        className
      )}
      onClick={(e): void => onClick && onClick(e)}
      {...rest}
    >
      {children}
    </button>
  );
});
