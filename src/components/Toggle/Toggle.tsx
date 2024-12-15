import "./Toggle.scss";

type ToggleProps = {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

const Toggle = ({ isChecked, onChange }: ToggleProps) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="switch" />
    </label>
  );
};

export default Toggle;
