import { useEffect, useState } from "react";
import { BrowserInfo, detect } from "detect-browser";

export const useBrowserInfo = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [typeBrowser, setTypeBrowser] = useState("");
  const [isValidBrowser, setIsValidBrowser] = useState(false);

  useEffect(() => {
    // Get Browser Info
    const browserInfo = detect();
    const { name } = browserInfo as BrowserInfo;

    // Verify if is a Mobile or Desktop
    setIsDesktop(
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );

    // Set the type of browser
    setTypeBrowser(name);

    // Verify if the browser is valid
    const validBrowsers = ["edge-chromium", "chrome", "firefox", "opera"];
    setIsValidBrowser(validBrowsers.includes(name));
  }, []);

  return { isDesktop, typeBrowser, isValidBrowser };
};
