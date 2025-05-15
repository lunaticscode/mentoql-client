import { FC, DetailedHTMLProps } from "react";
type NavigatorDirections = "prev" | "next";
interface NavigatorButtonProps
  extends Pick<
    DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onClick" | "disabled" | "className"
  > {
  direction: NavigatorDirections;
}

const NavigatorButton: FC<NavigatorButtonProps> = (props) => {
  const { direction, ...htmlProps } = props;

  return (
    <button className={"paginator-basic-navigator-button"} {...htmlProps}>
      {direction}
    </button>
  );
};

export default NavigatorButton;
