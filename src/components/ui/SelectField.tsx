import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  placeholder: string;
  options: string[] | ({ label: string; value: string })[];
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, placeholder, options, className, required, name, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="label" htmlFor={name}>
          <span className="label-text">
            {label} {required && <small className="text-red-500 text-sm">*</small>}
          </span>
        </label>
        <select
          name={name}
          id={name}
          defaultValue=""
          {...props}
          className="border-[#C9C9C9] rounded mt-1 border px-5 py-2 w-full"
          ref={ref}
          required={required}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option value={typeof option === "object" ? option.value : option} key={index}>
              {typeof option === "object" ? option.label : option} 
            </option>
          ))}
        </select>
      </div>
    );
  }
);

SelectField.displayName = "InputField";

export default SelectField;
