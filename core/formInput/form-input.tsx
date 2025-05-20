const FormInput = ({
  Icon,
  placeholder,
  value,
  onChange,
  type,
  label,
  style = {}  // default to empty object
}) => {
  return (
    <div className='flex gap-1 px-4 py-2 w-full flex-col'>
      {label && <p className={style?.label}>{label}</p>}
      <div className={`flex items-center gap-4 justify-between rounded-full border px-4 py-2 w-full ${style?.root}`}>
        <input
          className={`w-full border-none outline-none ${style?.input}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
        />
        {Icon}
      </div>
    </div>
  );
};

export default FormInput;