import { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string | undefined;
  name: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, className, error, errorMessage, required, name, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="label text-lg" htmlFor={name}>
          {label} {required && <small className="text-red-500 text-sm">*</small>}
        </label>
        <input
          type={props.type ?? "text"}
          name={name}
          placeholder={props.placeholder}
          className="border-[#C9C9C9] rounded mt-1 border px-5 py-2 w-full"
          ref={ref}
          required={required}
          {...props}
        />
        {error && errorMessage && (
          <p className="ml-0.5 mt-1 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
