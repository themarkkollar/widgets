import { WidgetColor } from "../../types/widget.interface";
import "./ColorSelect.scss";

interface ColorSelectProps {
  selectedColor: WidgetColor;
  onSelectColor: (color: WidgetColor) => void;
}

const ColorSelect = ({ selectedColor, onSelectColor }: ColorSelectProps) => {
  return (
    <div className="color-select">
      {Object.values(WidgetColor).map((color) => (
        <div
          key={color}
          className={`color-select__item color-select__item--${color.toLowerCase()} ${
            selectedColor === color ? "selected" : ""
          }`}
          onClick={() => onSelectColor(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorSelect;
