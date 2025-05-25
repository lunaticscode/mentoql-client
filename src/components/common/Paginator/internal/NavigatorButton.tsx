import { FC, DetailedHTMLProps } from "react";
import { paginatorNavigator } from "../../../../styles/components/paginator.css.ts";
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
    <button className={paginatorNavigator} {...htmlProps}>
      {direction}
    </button>
  );
};

export default NavigatorButton;