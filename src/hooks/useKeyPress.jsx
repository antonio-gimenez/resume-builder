import { useEffect, useCallback } from "react";

function useKeyPress({ key, handler }) {
  const keyDownListener = useCallback(
    (event) => {
      if (event.key === key) {
        handler(event);
      }
    },
    [key, handler]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownListener);
    return () => {
      document.removeEventListener("keydown", keyDownListener);
    };
  }, [keyDownListener]);
}

export default useKeyPress;
