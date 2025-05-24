import { DetailedHTMLProps, FC } from "react";
import { paginatorPageButton } from "../../../../styles/components/paginator.css.ts";

interface PageButtonProps
  extends Pick<
    DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onClick" | "disabled"
  > {
  page: number;
  active?: boolean;
}
const PageButton: FC<PageButtonProps> = (props) => {
  const { page, active, ...htmlProps } = props;
  return (
    <button data-active={active} className={paginatorPageButton} {...htmlProps}>
      {page}
    </button>
  );
};
export default PageButton;
