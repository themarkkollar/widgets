import "./WidgetCard.scss";
import { IWidget, WidgetColor } from "../../types/widget.interface";
import WidgetHeader from "../WidgetHeader/WidgetHeader";
import iconInfo from "../../assets/icon-info.svg";
import Checkbox from "../Checkbox/Checkbox";
import Toggle from "../Toggle/Toggle";
import ColorSelect from "../ColorSelect/ColorSelect";
import Popover from "../Popover/Popover";

type WidgetCardProps = {
  widget: IWidget;
  onToggleActive: (id: number, active: boolean) => void;
  onToggleLinked: (id: number, linked: boolean) => void;
  onSelectColor: (id: number, color: WidgetColor) => void;
};

const WidgetCard = ({
  widget,
  onToggleActive,
  onToggleLinked,
  onSelectColor,
}: WidgetCardProps) => {
  return (
    <div className="widget-card">
      <WidgetHeader widget={widget} />
      <div className="widget-card__content">
        <div className="widget-card__content-item">
          <div>
            <span className="widget-card__content-item-text">
              Link to Public Profile
            </span>
            <span className="widget-card__content-item-icon">
              <Popover
                children={<img src={iconInfo} alt="info" />}
                popoverContent={
                  <div className="widget-card__popover-content">
                    <span className="widget-card__popover-content-text">
                      This widget links directly to your public profile so that
                      you can easily share your impact with your customers. Turn
                      it off here if you do not want the badge to link to it.
                    </span>
                    <a href="#" className="widget-card__popover-content-link">
                      View Public Profile
                    </a>
                  </div>
                }
              />
            </span>
          </div>
          <Checkbox
            isChecked={widget.linked}
            onChange={(checked) => onToggleLinked(widget.id, checked)}
          />
        </div>
        <div className="widget-card__content-item">
          <span className="widget-card__content-item-text">Badge colour</span>
          <ColorSelect
            selectedColor={widget.selectedColor}
            onSelectColor={(color) => onSelectColor(widget.id, color)}
          />
        </div>
        <div className="widget-card__content-item">
          <span className="widget-card__content-item-text">Active badge</span>
          <Toggle
            isChecked={widget.active}
            onChange={(checked) => onToggleActive(widget.id, checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
