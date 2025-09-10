import { useT } from "@/store/i18n";

export function ExplorerBar({route}: {route?: string}) {
  const t = useT();
  return (
    <div className="win-raised p-1">
      <div className="flex items-center gap-1 mb-2">
        
        <button className="explorer-bar-button" title={t?.("back") || "Back"}>
          ←
        </button>
        
        <button
          className="explorer-bar-button"
          title={t?.("forward") || "Forward"}
        >
          →
        </button>
        
        <button className="explorer-bar-button" title={t?.("stop") || "Stop"}>
          up
        </button>
        
        <div className="w-px h-5 bg-[#808080] shadow-[1px_0_0_0_white] mx-1"></div>

        <button
          className="explorer-bar-button"
          title={t?.("refresh") || "Refresh"}
        >
          cut
        </button>
        
        <button className="explorer-bar-button" title={t?.("home") || "Home"}>
          copy
        </button>
               
        <button
          className="explorer-bar-button"
          title={t?.("search") || "Search"}
        >
          paste
        </button>
        
        <button
          className="explorer-bar-button"
          title={t?.("history") || "History"}
        >
          undo
        </button>
        
        <div className="w-px h-5 bg-[#808080] shadow-[1px_0_0_0_white] mx-1"></div>

        <button
          className="explorer-bar-button"
          title={t?.("favorites") || "Favorites"}
        >
          Delete
        </button>
        <button
          className="explorer-bar-button"
          title={t?.("favorites") || "Favorites"}
        >
          Properties
        </button>
      </div>

      {/* Address Bar Row */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-black font-normal whitespace-nowrap">
          {t?.("address") || "Address"}:
        </span>
        <div className="flex-1 flex">
          <input
            type="text"
            defaultValue={route || "https://www.example.com/about-me"}
            className="
              flex-1 h-5 px-1 text-xs text-black bg-white
              border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white
              focus:outline-none focus:bg-white
              font-mono
            "
            disabled
          />
        </div>
      </div>
    </div>
  );
}
