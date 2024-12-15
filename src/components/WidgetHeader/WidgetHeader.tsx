import "./WidgetHeader.scss";
import {
  IWidget,
  WidgetAction,
  WidgetColor,
} from "../../types/widget.interface";
import iconDark from "../../assets/icon-dark.svg";
import iconLight from "../../assets/icon-light.svg";

type WidgetHeaderProps = {
  widget: IWidget;
};

const WidgetHeader = ({ widget }: WidgetHeaderProps) => {
  const topTexts = {
    [WidgetAction.COLLECTS]: "This product collects",
    [WidgetAction.PLANTS]: "This product plants",
    [WidgetAction.OFFSETS]: "This product offsets",
  };

  const bottomTexts = `${widget.amount} ${widget.type}`;

  const textColorClass = {
    [WidgetColor.BLUE]: "text-white",
    [WidgetColor.GREEN]: "text-white",
    [WidgetColor.BEIGE]: "text-black",
    [WidgetColor.BLACK]: "text-white",
    [WidgetColor.WHITE]: "text-black",
  };

  const imageType = {
    [WidgetColor.BLUE]: "icon-light",
    [WidgetColor.GREEN]: "icon-light",
    [WidgetColor.BEIGE]: "icon-dark",
    [WidgetColor.BLACK]: "icon-light",
    [WidgetColor.WHITE]: "icon-dark",
  };

  const textColor = textColorClass[widget.selectedColor];
  const imgType = imageType[widget.selectedColor];

  return (
    <div className={`widget-header ${widget.selectedColor}`}>
      <img
        src={imgType === "icon-light" ? iconLight : iconDark}
        alt={widget.type}
        className="widget-header__img"
      />
      <div className="widget-header__texts">
        <span className={`${textColor} widget-header__top-text`}>
          {topTexts[widget.action]}
        </span>
        <span className={`${textColor} widget-header__bottom-text`}>
          {bottomTexts}
        </span>
      </div>
    </div>
  );
};

export default WidgetHeader;
