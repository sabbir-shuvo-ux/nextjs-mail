const InputBox = ({
  inputId,
  labelText,
  inputType,
  placeholderText,
  isTextArea,
  val,
  handleChange,
  ...rest
}) => {
  const inputClass =
    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light";
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {labelText}
      </label>
      {isTextArea ? (
        <textarea
          onChange={handleChange}
          value={val}
          name={inputId}
          type={inputType}
          id={inputId}
          className={inputClass}
          placeholder={placeholderText}
          required
          {...rest}
        />
      ) : (
        <input
          value={val}
          onChange={handleChange}
          type={inputType}
          id={inputId}
          name={inputId}
          className={inputClass}
          placeholder={placeholderText}
          required
        />
      )}
    </div>
  );
};

export default InputBox;
