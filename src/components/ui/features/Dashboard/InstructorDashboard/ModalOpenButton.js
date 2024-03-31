import { Button } from "@nextui-org/react";

const ModalOpenButton = ({ value, Icon, onclick }) => {
  return (
    <Button
      onPress={onclick}
      className="flex justify-center items-center gap-[10px] px-7 !py-5 rounded bg-loginButton text-white font-semibold text-base font-liador capitalize "
    >
      {value} {Icon && <Icon size={24} />}
    </Button>
  );
};

export default ModalOpenButton;
