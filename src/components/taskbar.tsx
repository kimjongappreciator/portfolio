import { ClockComponent } from "./clock";
import { StartMenu } from "./start-menu";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { useT, useI18nStore } from "@/store/i18n";
import startIcon from "@/assets/start_icon.png";

export function Taskbar() {
  const { locale, setLocale } = useI18nStore();
  const t = useT();
  return (
    <div
      className="bg-[var(--taskbar-bg)] border-t-2 border-[var(--taskbar-border)]
                    w-full fixed bottom-0 h-fit flex items-center px-[2px] shadow-inner z-50 py-[1px]"
    >
      {/* Start Button */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap- px-1 py-1 mr-2
                       w-fit
                       h-[28px]
                       border border-[var(--taskbar-border)]
                       win-raised"
          >
            <img
              src={startIcon}
              alt="Start"
              className="w-6 h-5 px-[-5px]"
            />
            <span className="text-sm font-bold">{t("start")}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="start"
          className="w-fit p-2 bg-[var(--taskbar-bg)] border border-[var(--taskbar-border)]
                     rounded-none mb-1
                     shadow-[2px_2px_0px_black,-1px_-1px_0px_white]"
          sideOffset={2}
        >
          <StartMenu />
        </PopoverContent>
      </Popover>

      {/* Separator */}
      <div className="w-px h-8 bg-gray-400 mr-2"></div>

      {/* Task Buttons Area - Flex grow para ocupar espacio disponible */}
      <div className="flex-1 flex items-center gap-1 px-1 min-w-0">
        {/* Aquí irían los botones de aplicaciones abiertas */}
      </div>

      {/* System Tray Area */}
      <div className="flex items-center gap-1">
        <div className="w-px h-8 bg-gray-400 mr-2"></div>

        <button
          onClick={() => setLocale(locale === "en" ? "es" : "en")}
          className="px-2 py-1.5 text-sm win-sunken"
        >
          <p className="font-semibold text-xs ">{locale.toUpperCase()}</p>
        </button>

        {/* Clock placeholder */}
        <ClockComponent></ClockComponent>
      </div>
    </div>
  );
}
