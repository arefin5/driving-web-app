import InputLabel from "./InputLabel";

const UserInput = ({
  placeholder,
  label,
  type,
  onchange,
  value = "",
  defaultValue,
}) => {
  return (
    <div className="flex flex-col w-full gap-2 mb-3">
      <InputLabel label={label} />
      <input
        // defaultValue={defaultValue}
        value={defaultValue ? defaultValue : value}
        onChange={onchange}
        required
        type={type}
        placeholder={placeholder}
        className="py-3 px-4 border border-solid rounded border-black/30 outline-0 placeholder:text-black/50 placeholder:text-[12px] dark:text-white dark:placeholder:text-white dark:bg-transparent dark:border-white"
      />
    </div>
  );
};

export default UserInput;
