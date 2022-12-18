import { useEffect } from "react";

function useKey({ key, handler }) {
  useEffect(
    () => {
      const listener = (event) => {
        if (event.key === key) {
          handler(event);
        }
      };

      document.addEventListener("keydown", listener);

      return () => {
        document.removeEventListener("keydown", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.

    [key, handler]
  );
}

export default useKey;
