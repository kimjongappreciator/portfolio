import { useT } from "@/store/i18n";
import type { ReactNode } from "react";

interface WindowProps {
  title: string;
  children: ReactNode;
  onClose?: () => void;
}

export function WindowComponent({ title, children, onClose }: WindowProps) {
    const t = useT();
  return (
    <div className="w-80 border border-main-border bg-white 
                    shadow-[2px_2px_0px_black,-1px_-1px_0px_white]
                    flex flex-col"
    >
      {/* Barra de título */}
      <div className="flex justify-between items-center px-2 py-1 window-bar text-sm font-bold">
        <span>{t(title)}</span>
        <div className="flex gap-1">
          <button className="w-4 h-4 bg-[var(--taskbar-bg)] win-raised border border-[var(--taskbar-border)] text-black font-bold leading-none">
            _
          </button>
          <button className="w-4 h-4 bg-[var(--taskbar-bg)] win-raised border border-[var(--taskbar-border)] text-black font-bold leading-none">
            ☐
          </button>
          <button
            className="w-4 h-4 bg-[var(--taskbar-bg)] win-raised border border-[var(--taskbar-border)] text-black font-bold leading-none"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>

      {/* Contenido dinámico */}
      <div className="flex-1 p-3 bg-main-bg">{children}</div>
    </div>
  );
}
