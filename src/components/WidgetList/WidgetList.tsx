import "./WidgetList.scss";
import { IWidget, WidgetColor } from "../../types/widget.interface";
import WidgetCard from "../WidgetCard/WidgetCard";
type WidgetListProps = {
  widgets: IWidget[];
  onToggleActive: (id: number, active: boolean) => void;
  onToggleLinked: (id: number, linked: boolean) => void;
  onSelectColor: (id: number, color: WidgetColor) => void;
};

const WidgetList = ({
  widgets,
  onToggleActive,
  onToggleLinked,
  onSelectColor,
}: WidgetListProps) => {
  return (
    <section className="widget-list">
      <h1>Per product widgets</h1>
      <hr className="widget-list__divider" />
      <div className="widget-list__container">
        {widgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            onToggleActive={onToggleActive}
            onToggleLinked={onToggleLinked}
            onSelectColor={onSelectColor}
          />
        ))}
      </div>
    </section>
  );
};

export default WidgetList;
