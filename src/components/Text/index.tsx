import React from "react";

const sizeClasses = {
  txtSFProDisplayMedium14: "font-medium font-sfprodisplay",
  txtInterBold14WhiteA700: "font-bold font-inter",
  txtSFProDisplayMedium14Gray500: "font-medium font-sfprodisplay",
  txtInterRegular14Gray500: "font-inter font-normal",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtSFProDisplayRegular14: "font-normal font-sfprodisplay",
  txtInterMedium14Gray500: "font-inter font-medium",
  txtSFProDisplayRegular12: "font-normal font-sfprodisplay",
  txtInterRegular14WhiteA700cc: "font-inter font-normal",
  txtInterBold22: "font-bold font-inter",
  txtInterBold14WhiteA70099: "font-bold font-inter",
  txtSFProDisplayBold16: "font-bold font-sfprodisplay",
  txtSFProDisplayBold22: "font-bold font-sfprodisplay",
  txtInterBold22WhiteA700: "font-bold font-inter",
  txtInterBold16Gray500: "font-bold font-inter",
  txtInterBold16WhiteA700: "font-bold font-inter",
  txtInterBold12IndigoA200: "font-bold font-inter",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterBold14Gray500: "font-bold font-inter",
  txtSFProDisplayBold1032: "font-bold font-sfprodisplay",
  txtInterBold30Gray900: "font-bold font-inter",
  txtInterBold12Gray500: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterBold30Gray500: "font-bold font-inter",
  txtSFProDisplayBold16Gray900: "font-bold font-sfprodisplay",
  txtInterBold30: "font-bold font-inter",
  txtSFProDisplayBold30: "font-bold font-sfprodisplay",
  txtInterRegular12: "font-inter font-normal",
  txtInterBold12WhiteA700: "font-bold font-inter",
  txtInterRegular14: "font-inter font-normal",
  txtSFProDisplayBold22Gray900: "font-bold font-sfprodisplay",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
