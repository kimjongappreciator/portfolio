import { useState } from "react";
import { Icon } from "./icon";
import { ExplorerBar } from "./explorer-bar";
import folder from "@/assets/desktop-icons/folder.png";
import html_icon from "@/assets/desktop-icons/html.png";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WindowComponent } from "./window";

export function MyProjects() {
  const [activeDialog, setActiveDialog] = useState(null);

  const handleIconClick = (dialogType: any) => {
    setActiveDialog(dialogType);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <>
      <div className="w-auto h-[60vh] max-h-[60vh] flex flex-col">
        <ExplorerBar route="C:/Desktop/My Projects" />
        <div className="flex overflow-auto h-full">
          <div className="w-[30%] h-[30%] border-r border-gray-300 bg-[url(src/assets/projects-folder/explorercorner.jpg)] bg-cover">
            <img src={folder} alt="folder" className="w-10 h-10 m-4" />
            <h2 className="text-lg font-semibold m-4">My Projects</h2>
          </div>
          <div className="flex-1 overflow-auto">
            <a>Nota: estos son solo proyectos publicos.</a>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 p-4">
              <Icon
                icon={html_icon}
                label="montly_expenses"
                onClick={() => handleIconClick("contact")}
              />
              <Icon
                icon={html_icon}
                label="three_demo"
                onClick={() => handleIconClick("contact")}
              />
              <Icon
                icon={html_icon}
                label="kanban_board"
                onClick={() => handleIconClick("contact")}
              />
              <Icon
                icon={html_icon}
                label="graph_demo"
                onClick={() => handleIconClick("contact")}
              />
              <Icon
                icon={html_icon}
                label="signapp"
                onClick={() => handleIconClick("contact")}
              />
              <Icon
                icon={html_icon}
                label="weather_app"
                onClick={() => handleIconClick("contact")}
              />
              <Icon
                icon={html_icon}
                label="cambio_unmsm"
                onClick={() => handleIconClick("contact")}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={activeDialog === "contact"} onOpenChange={closeDialog}>
        <DialogContent className="desktop-icon" showCloseButton={false}>
          {/* Sin esto la consola retorna errores. */}
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="contact" onClose={closeDialog}>
            jijijija
          </WindowComponent>
        </DialogContent>
      </Dialog>
    </>
  );
}
