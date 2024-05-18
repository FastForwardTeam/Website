import { IconDownload } from "@tabler/icons-react";
import JsonExtension from "../assets/urlWebStoreExtensions.json";
import { useBrowserInfo } from "../hooks/useBrowserInfo";

export const GetExtensionButton = () => {
  const { isDesktop, typeBrowser, isValidBrowser } = useBrowserInfo();

  const GetURL = (): string => {
    let url = JsonExtension[typeBrowser as keyof typeof JsonExtension];
    return url ? url : "/browser";
  };

  const renderButton = () => {
    const adjustedName = typeBrowser === "edge-chromium" ? "edge" : typeBrowser;

    if (!adjustedName) {
      return <span className="w-32 h-4 rounded-md bg-white/30"></span>;
    }

    return (
      <div className="flex gap-3">
        <IconDownload />
        <p>
          Get for <span className="capitalize">{adjustedName}</span>
        </p>
      </div>
    );
  };

  if (!isDesktop || !isValidBrowser) return "";

  return (
    <a
      href={GetURL()}
      target="_blank"
      className="px-6 border border-white h-12 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center  animate__animated animate__fadeIn"
    >
      {renderButton()}
    </a>
  );
};
