import React from 'react';

type FormInputProps = {
  Icon?: React.ReactNode;
  placeholder?: string;
  type?: string;
  label?: string;
  style?: {
    label?: string;
    input?: string;
    root?: string;
  };
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ Icon, placeholder = '', type = 'text', label, style = {}, error, ...rest }, ref) => {
    return (
      <div className={`flex gap-1 px-4 py-2 w-full flex-col ${error && 'text-red-500'}`}>
        {label && <p className={style?.label}>{label}</p>}
        <div
          className={`flex items-center gap-4 justify-between rounded-full border px-4 py-2 w-full ${
            style?.root || ''
          }`}
        >
          <input
            ref={ref}
            className={`w-full border-none outline-none placeholder:text-slate-200 ${style?.input || ''}`}
            placeholder={placeholder}
            type={type}
            {...rest} 
          />
          {Icon}
        </div>
        {error && <p className="text-xs text-red-500 font-[400]">{error}</p>}
      </div>
    );
  }
);

export default FormInput;
