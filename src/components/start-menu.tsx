import {useT } from "@/store/i18n";

export function StartMenu(){
    const t = useT();
    return(
        <>
        <div className="flex flex-col gap-1 font-sans">
            <button className="text-left px-2 py-1 hover:bg-blue-600 hover:text-white">
              {t("programs")}
            </button>
            <button className="text-left px-2 py-1 hover:bg-blue-600 hover:text-white">
              {t("documents")}
            </button>
            <button className="text-left px-2 py-1 hover:bg-blue-600 hover:text-white">
              {t("settings")}
            </button>
            <button className="text-left px-2 py-1 hover:bg-blue-600 hover:text-white">
              {t("shutdown")}
            </button>            
          </div>
        </>
    )
}