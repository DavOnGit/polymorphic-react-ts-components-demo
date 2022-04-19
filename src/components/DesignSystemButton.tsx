import { ElementType, ComponentProps } from "react";

type PolymorphicProps<Element extends React.ElementType, Props> = Props &
  Omit<ComponentProps<Element>, "as"> & {
    as?: Element;
  };

type Props = {
  myProp: number;
  otherProp?: string;
};

const defaultElement = "button";

const DesignSystemButton = <El extends ElementType = typeof defaultElement>(
  props: PolymorphicProps<El, Props>
) => {
  const { as: Component = defaultElement, children, ...rest } = props;
  return <Component {...rest}>{children}</Component>;
};

export default DesignSystemButton;
