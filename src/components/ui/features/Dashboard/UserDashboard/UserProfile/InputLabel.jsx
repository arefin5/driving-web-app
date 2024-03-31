const InputLabel = ({ label }) => {
  return (
    <label className="" htmlFor="">
      <span className="text-base font-semibold primary-text-color dark:text-white">
        {label}
      </span>{" "}
      <span className="second-text-color dark:text-white">*</span>
    </label>
  );
};

export default InputLabel;
