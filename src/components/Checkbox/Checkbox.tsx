import "./Checkbox.scss";

export type CheckboxProps = {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ isChecked, onChange }: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
          className={isChecked ? "checked" : ""}
        />
      </label>
    </div>
  );
};

export default Checkbox;
