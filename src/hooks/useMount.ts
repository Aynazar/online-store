//@ts-nocheck
import { useEffect, useState } from "react";

const useMount = ({ isOpen }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (isOpen && !mount) {
      setMount(true);
    } else if (!isOpen && mount) {
      setTimeout(() => {
        setMount(false);
      }, 200);
    }
  }, [isOpen]);

  return {
    mount,
  };
};

export default useMount;
