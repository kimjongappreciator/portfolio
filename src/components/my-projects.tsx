import { useState } from "react";
import { DesktopIcon } from "./desktop-icon";
import { ExplorerBar } from "./explorer-bar";
import folder from "@/assets/desktop-icons/folder.png";
import html_icon from "@/assets/desktop-icons/html.png";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WindowComponent } from "./window";
import type { text } from "stream/consumers";

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
      <div className="w-full h-[60vh] max-h-[60vh] flex flex-col">
        <ExplorerBar route="C:/Desktop/My Projects" />
        <div className="flex overflow-auto">
          <div className="w-[30%] h-fit border-r border-gray-300 bg-[url(src/assets/projects-folder/explorercorner.jpg)] bg-cover">
            <img src={folder} alt="folder" className="w-10 h-10 m-4" />
            <h2 className="text-lg font-semibold m-4">My Projects</h2>
          </div>
          <div className="flex">
            <DesktopIcon
              icon={html_icon}
              label="about"
              onClick={() => handleIconClick("contact")}
              textStyle="text-black"
              
            />
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
