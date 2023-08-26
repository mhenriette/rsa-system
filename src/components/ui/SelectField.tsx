import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  placeholder: string;
  options: string[];
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, placeholder, options, className, name, ...props }) => {
    return (
      <div className="w-full">
        <label className="label" htmlFor={name}>
          {label}
        </label>
        <select
          name={name}
          id={name}
          defaultValue=""
          {...props}
          className="border-[#C9C9C9] rounded mt-1 border px-5 py-2 w-full"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

SelectField.displayName = "InputField";

export default SelectField;
