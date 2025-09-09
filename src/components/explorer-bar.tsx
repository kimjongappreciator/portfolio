import { useT } from "@/store/i18n";

export function ExplorerBar() {
  const t = useT();
  return (
    <div className="win-raised p-1">
      <div className="flex items-center gap-1 mb-2">
        {/* Back Button */}
        <button className="explorer-bar-button" title={t?.("back") || "Back"}>
          ←
        </button>

        {/* Forward Button */}
        <button
          className="explorer-bar-button"
          title={t?.("forward") || "Forward"}
        >
          →
        </button>

        {/* Stop Button */}
        <button className="explorer-bar-button" title={t?.("stop") || "Stop"}>
          ✕
        </button>

        {/* Refresh Button */}
        <button
          className="explorer-bar-button"
          title={t?.("refresh") || "Refresh"}
        >
          ↻
        </button>

        {/* Home Button */}
        <button className="explorer-bar-button" title={t?.("home") || "Home"}>
          🏠
        </button>

        {/* Separator */}
        <div className="w-px h-5 bg-[#808080] shadow-[1px_0_0_0_white] mx-1"></div>

        {/* Search Button */}
        <button
          className="explorer-bar-button"
          title={t?.("search") || "Search"}
        >
          🔍
        </button>

        {/* History Button */}
        <button
          className="explorer-bar-button"
          title={t?.("history") || "History"}
        >
          📋
        </button>

        {/* Favorites Button */}
        <button
          className="explorer-bar-button"
          title={t?.("favorites") || "Favorites"}
        >
          ⭐
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
            defaultValue="C:\My Documents"
            className="
              flex-1 h-5 px-1 text-xs text-black bg-white
              border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white
              focus:outline-none focus:bg-white
              font-mono
            "
          />
        </div>
      </div>
    </div>
  );
}
