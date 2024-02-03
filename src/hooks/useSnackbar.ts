import { useCallback, useState } from "react";
import { SnackbarType } from "@/components/ui/types";

/* How to use?
 * const {set, isOpen, message, type} = useSnackbar()
 *
 * set(open, "aaa", Snackbar.SUCCESS)
 *
 * <Snackbar isOpen message type/>
 * */

const useSnackbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<SnackbarType>(SnackbarType.__DEF__);

  const set = useCallback(
    (
      initialOpen: boolean,
      initialMessage: string,
      initialType: SnackbarType,
    ) => {
      setIsOpen(initialOpen);
      setMessage(initialMessage);
      setType(initialType);
    },
    [isOpen, message, type],
  );

  const onClose = useCallback(() => {
    setIsOpen(false);
    setMessage("");
    setType(SnackbarType.__DEF__);
  }, []);

  return {
    isOpen,
    message,
    type,
    set,
    onClose,
  };
};

export default useSnackbar;
