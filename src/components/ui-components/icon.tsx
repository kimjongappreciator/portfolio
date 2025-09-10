import { useT } from "@/store/i18n";

interface DesktopIconProps {
  icon: string;
  label: string;
  iconType?: string;
  onClick: () => void;
}

export function Icon({ icon, label, onClick, iconType }: DesktopIconProps) {
  const t = useT();

  if (iconType === "desktop") {
    return (
      <div
        className="flex flex-col w-[75px] items-center cursor-pointer hover:bg-blue-600 hover:bg-opacity-30 p-2 rounded select-none"
        onClick={onClick}
        onDoubleClick={onClick} // También funciona con doble clic
      >
        <img src={icon} alt={label} className="w-12 h-12" />
        <span className="text-sm mt-1 text-center leading-tight text-white">
          {t(label)}
        </span>
      </div>
    );
  } else {
    return (
      <div
        className="group flex flex-col w-[75px] items-center cursor-pointer hover:bg-blue-600 hover:bg-opacity-30 p-2 rounded select-none"
        onClick={onClick}
        onDoubleClick={onClick}
      >
        <img src={icon} alt={label} className="w-12 h-12" />
        <span className="text-sm mt-1 text-center leading-tight text-black group-hover:text-white">
          {t(label)}
        </span>
      </div>
    );
  }
}
