import { useEffect } from "react";

export default function usePreventBack() {
  useEffect(() => {
    // Push a new state into the history stack
    window.history.pushState(null, document.title, window.location.href);

    const handleBack = () => {
      // Push state again if user tries to go back
      window.history.pushState(null, document.title, window.location.href);
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);
}
