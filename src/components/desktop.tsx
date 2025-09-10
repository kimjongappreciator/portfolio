import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WindowComponent } from "./window";
import note_pad from "@/assets/desktop-icons/notepad.png";
import folder from "@/assets/desktop-icons/folder.png";
import html_icon from "@/assets/desktop-icons/html.png";
import { AboutMe } from "./about-me";
import { ContactMe } from "./contact-me";
import { MyProjects } from "./my-projects";
import { Icon } from "./icon";



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
      <div className="grid grid-cols-6 gap-6">
        <Icon
          icon={html_icon}
          label="about"
          onClick={() => handleIconClick("about")}
          iconType="desktop"
        />
        <Icon
          icon={folder}
          label="projects"
          onClick={() => handleIconClick("projects")}
          iconType="desktop"
        />
        <Icon
          icon={note_pad}
          label="contact"
          onClick={() => handleIconClick("contact")}
          iconType="desktop"
        />
      </div>

      {/* Dialog para Sobre mí */}
      <Dialog open={activeDialog === "about"} onOpenChange={closeDialog}>
        <DialogContent className="desktop-icon" showCloseButton={false}>
          {/* Sin esto la consola retorna errores. */}
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="about" onClose={closeDialog}>
            <AboutMe />
          </WindowComponent>
        </DialogContent>
      </Dialog>

      {/* Dialog para Proyectos */}
      <Dialog open={activeDialog === "projects"} onOpenChange={closeDialog}>
        <DialogContent className="desktop-icon" showCloseButton={false}>
          {/* Sin esto la consola retorna errores. */}
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="projects" onClose={closeDialog}>
            <MyProjects />
          </WindowComponent>
        </DialogContent>
      </Dialog>

      {/* Dialog para Contacto */}
      <Dialog open={activeDialog === "contact"} onOpenChange={closeDialog}>
        <DialogContent className="desktop-icon" showCloseButton={false}>
          {/* Sin esto la consola retorna errores. */}
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="contact" onClose={closeDialog}>
            <ContactMe />
          </WindowComponent>
        </DialogContent>
      </Dialog>
    </div>
  );
}
