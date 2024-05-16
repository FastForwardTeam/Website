import { useBrowserInfo } from "../hooks/useBrowserInfo";
import JsonExtension from "../assets/urlWebStoreExtensions.json";

export const GetExtensionButton = () => {
  const { isDesktop, typeBrowser, isValidBrowser } = useBrowserInfo();

  const GetURL = (): string => {
    let url = JsonExtension[typeBrowser as keyof typeof JsonExtension];
    return url ? url : "/browser";
  };

  const renderButton = () => {
    const adjustedName = typeBrowser === "edge-chromium" ? "edge" : typeBrowser;

    if (!adjustedName) {
      return <span className="w-32 h-4 rounded-md bg-purple-900/30"></span>;
    }

    if (!isDesktop || !isValidBrowser) return <p>View supported browsers</p>;

    return (
      <p>
        Get for <span className="capitalize">{adjustedName}</span>
      </p>
    );
  };

  return (
    <a
      href={GetURL()}
      target="_blank"
      className="px-6 border border-purple-900 h-12 rounded-full hover:bg-purple-950 transition-colors flex items-center justify-center "
    >
      {renderButton()}
    </a>
  );
};
