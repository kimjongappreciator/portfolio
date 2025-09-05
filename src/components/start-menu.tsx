import { useT } from "@/store/i18n";

export function StartMenu() {
  const t = useT();

  return (
    <div className="win-raised w-56 p-2 font-sans text-sm">
      <div className="flex flex-col gap-0.5">
        <button className="flex items-center gap-2 px-2 py-1 text-left hover:bg-[navy] hover:text-white">
          <img src="src/assets/programs.png" className="w-6 h-6" />
          <span>{t("programs")}</span>
        </button>

        <button className="flex items-center gap-2 px-2 py-1 text-left hover:bg-[navy] hover:text-white">
          <img src="src/assets/documents.png" className="w-6 h-6" />
          <span>{t("documents")}</span>
        </button>

        <button className="flex items-center gap-2 px-2 py-1 text-left hover:bg-[navy] hover:text-white">
          <img src="src/assets/settings.png" className="w-6 h-6" />
          <span>{t("settings")}</span>
        </button>

        <div className="border-t border-gray-400 my-1"></div>

        <button className="flex items-center gap-2 px-2 py-1 text-left hover:bg-[navy] hover:text-white">
          <img src="src/assets/shut_down.png" className="w-6 h-6" />
          <span>{t("shutdown")}</span>
        </button>
      </div>
    </div>
  );
}
