import { Spinner } from "@nextui-org/react";
import { IoArrowForwardSharp } from "react-icons/io5";
const PrimaryButton = ({ value, isLoading }) => {
  return (
    <button
      type="submit"
      className="bg-secondaryGradiant justify-center gap-[10px]  mt-6 !w-full py-3 rounded text-white font-semibold flex items-center"
    >
      {value}{" "}
      {isLoading ? (
        <Spinner
          size="sm"
          className="text-white"
          color="white"
          classNames={{ base: "text-white" }}
        />
      ) : (
        <IoArrowForwardSharp size={24} />
      )}
    </button>
  );
};

export default PrimaryButton;
