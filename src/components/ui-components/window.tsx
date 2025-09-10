import { useT } from "@/store/i18n";
import type { ReactNode } from "react";
import close_icon from "@/assets/close-icon.png";
import maximize_icon from "@/assets/maximize.png";
import minimize_icon from "@/assets/minimize.png";
import { WindowToolbar } from "./window-toolbar";
interface WindowProps {
  title: string;
  children: ReactNode;
  onClose?: () => void;
}

export function WindowComponent({ title, children, onClose }: WindowProps) {
  const t = useT();
  return (
    <div
      className="w-fit max-h-[80vh] border border-main-border bg-white 
                    shadow-[2px_2px_0px_black,-1px_-1px_0px_white]
                    flex flex-col "
    >
      {/* Barra de título */}
      <div className="flex justify-between items-center px-2 py-1 window-bar text-sm font-bold">
        <span>{t(title)}</span>
        <div className="flex gap-1">
          <button className="w-4 h-4 bg-[var(--taskbar-bg)] win-raised border border-[var(--taskbar-border)] text-black font-bold leading-none">
            <div className="flex justify-center items-center">
              <img src={minimize_icon} alt="minimize" className="w-4 h-3" />
            </div>
          </button>
          <button className="w-4 h-4 bg-[var(--taskbar-bg)] win-raised border border-[var(--taskbar-border)] text-black font-bold leading-none">
            <div className="flex justify-center items-center">
              <img src={maximize_icon} alt="maximize" className="w-4 h-3" />
            </div>
          </button>
          <button
            className="w-4 h-4 bg-[var(--taskbar-bg)] win-raised border border-[var(--taskbar-border)] text-black font-bold leading-none"
            onClick={onClose}
          >
            <div className="flex justify-center items-center">
              <img src={close_icon} alt="close" className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
      <WindowToolbar />
      

      {/* Contenido dinámico */}
      <div className="flex-1 bg-main-bg">{children}</div>
    </div>
  );
}
