import { useT } from "@/store/i18n";

interface DesktopIconProps {
  icon: string;
  label: string;
  textStyle?: string;
  onClick: () => void;
}

export function DesktopIcon({ icon, label, onClick, textStyle }: DesktopIconProps) {
  const t = useT();
  return (
    <div
      className="flex flex-col w-[75px] items-center cursor-pointer hover:bg-blue-600 hover:bg-opacity-30 p-2 rounded select-none"
      onClick={onClick}
      onDoubleClick={onClick} // También funciona con doble clic
    >
      <img src={icon} alt={label} className="w-12 h-12" />
      <span
        className={`text-sm mt-1 text-center leading-tight ${textStyle || "text-white"}`}
      >
        {t(label)}
      </span>
    </div>
  );
}
