import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WindowComponent } from "./window";
import { useT } from "@/store/i18n";
import note_pad from "@/assets/notepad.png"
import briefcase from "@/assets/briefcase.png"
import html_icon from "@/assets/html.png"

interface DesktopIconProps {
  icon: string;
  label: string;
  onClick: () => void;
}

function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
    const t = useT();
  return (
    <div
      className="flex flex-col w-[75px] items-center cursor-pointer hover:bg-blue-600 hover:bg-opacity-30 p-2 rounded select-none"
      onClick={onClick}
      onDoubleClick={onClick} // También funciona con doble clic
    >
      <img src={icon} alt={label} className="w-12 h-12" />
      <span className="text-white text-sm mt-1 text-center leading-tight">
        {t(label)}
      </span>
    </div>
  );
}

export function Desktop() {
  const [activeDialog, setActiveDialog] = useState(null);

  const handleIconClick = (dialogType: any) => {
    setActiveDialog(dialogType);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <div className="h-screen w-screen bg-[var(--desktop-bg)] p-4">
      {/* Escritorio */}
      <div className="grid grid-cols-6 gap-6">
        <DesktopIcon
          icon={note_pad}
          label="about"
          onClick={() => handleIconClick("about")}
        />
        <DesktopIcon
          icon={briefcase}
          label="projects"
          onClick={() => handleIconClick("projects")}
        />
        <DesktopIcon
          icon={html_icon}
          label="contact"
          onClick={() => handleIconClick("contact")}
        />
        {/* Más iconos cuando los necesites... */}
      </div>

      {/* Dialog para Sobre mí */}
      <Dialog open={activeDialog === "about"} onOpenChange={closeDialog}>
        <DialogContent
          className="p-0 m-0 border-0 bg-transparent shadow-none max-w-none w-auto h-auto"
          showCloseButton={false}
        >
          {/* DialogContent necesita un DialogTitle para funcionar correctamente. */}
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="about" onClose={closeDialog}>
            {/* contenido */}
            <div>Contenido de Sobre mí...</div>
          </WindowComponent>
        </DialogContent>
      </Dialog>

      {/* Dialog para Proyectos */}
      <Dialog open={activeDialog === "projects"} onOpenChange={closeDialog}>
        <DialogContent
          className="p-0 m-0 border-0 bg-transparent shadow-none max-w-none w-auto h-auto"
          showCloseButton={false}
        >
          {/* DialogContent necesita un DialogTitle para funcionar correctamente. */}
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="projects" onClose={closeDialog}>
            {/* contenido */}
            <div>Contenido de Proyectos...</div>
          </WindowComponent>
        </DialogContent>
      </Dialog>

      {/* Dialog para Contacto */}
      <Dialog open={activeDialog === "contact"} onOpenChange={closeDialog}>
        <DialogContent
          className="p-0 m-0 border-0 bg-transparent shadow-none max-w-none w-auto h-auto"
          showCloseButton={false}
        >
          {/* DialogContent necesita un DialogTitle para funcionar correctamente. */}
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="contact" onClose={closeDialog}>
            {/* contenido */}
            <div>Contenido de Contacto...</div>
          </WindowComponent>
        </DialogContent>
      </Dialog>
    </div>
  );
}
