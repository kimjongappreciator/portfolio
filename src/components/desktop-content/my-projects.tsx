import { useState } from "react";
import { Icon } from "../ui-components/icon";
import { ExplorerBar } from "../ui-components/explorer-bar";
import folder from "@/assets/desktop-icons/folder.png";
import html_icon from "@/assets/desktop-icons/html.png";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WindowComponent } from "../ui-components/window";
import { ProjectDialog } from "../projects/project-dialog";
import type { ContentModel } from "../models/content-model";
import {
  credsUpdtData,
  financeData,
  graphDemoData,
  kanbanData,
  signAppData,
  threeDemoData,
  weatherAppData,
} from "../models/project-data";

const financeContent: ContentModel = financeData;
const threeDemoContent: ContentModel = threeDemoData;
const credsupdtContent: ContentModel = credsUpdtData;
const graphDemoContent: ContentModel = graphDemoData;
const kanbanContent: ContentModel = kanbanData;
const weatherContent: ContentModel = weatherAppData;
const signappContent: ContentModel = signAppData;

type DialogType =
  | "montly_expenses"
  | "three_demo"
  | "kanban_board"
  | "graph_demo"
  | "signapp"
  | "weather_app"
  | "creds_updt"
  | null;

export function MyProjects() {
  const [activeDialog, setActiveDialog] = useState<DialogType>(null);

  const handleIconClick = (dialogType: Exclude<DialogType, null>) => {
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
                onClick={() => handleIconClick("montly_expenses")}
              />
              <Icon
                icon={html_icon}
                label="three_demo"
                onClick={() => handleIconClick("three_demo")}
              />
              <Icon
                icon={html_icon}
                label="kanban_board"
                onClick={() => handleIconClick("kanban_board")}
              />
              <Icon
                icon={html_icon}
                label="graph_demo"
                onClick={() => handleIconClick("graph_demo")}
              />
              <Icon
                icon={html_icon}
                label="signapp"
                onClick={() => handleIconClick("signapp")}
              />
              <Icon
                icon={html_icon}
                label="weather_app"
                onClick={() => handleIconClick("weather_app")}
              />
              <Icon
                icon={html_icon}
                label="creds_updt"
                onClick={() => handleIconClick("creds_updt")}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={activeDialog === "montly_expenses"}
        onOpenChange={closeDialog}
      >
        <DialogContent className="dialog-component" showCloseButton={false}>
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="montly_expenses" onClose={closeDialog}>
            <ProjectDialog {...financeContent} />
          </WindowComponent>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "three_demo"} onOpenChange={closeDialog}>
        <DialogContent className="dialog-component" showCloseButton={false}>
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="three_demo" onClose={closeDialog}>
            <ProjectDialog {...threeDemoContent} />
          </WindowComponent>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "kanban_board"} onOpenChange={closeDialog}>
        <DialogContent className="dialog-component" showCloseButton={false}>
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="kanban_board" onClose={closeDialog}>
            <ProjectDialog {...kanbanContent} />
          </WindowComponent>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "graph_demo"} onOpenChange={closeDialog}>
        <DialogContent className="dialog-component" showCloseButton={false}>
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="graph_demo" onClose={closeDialog}>
            <ProjectDialog {...graphDemoContent} />
          </WindowComponent>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "signapp"} onOpenChange={closeDialog}>
        <DialogContent className="dialog-component" showCloseButton={false}>
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="signapp" onClose={closeDialog}>
            <ProjectDialog {...signappContent} />
          </WindowComponent>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "weather_app"} onOpenChange={closeDialog}>
        <DialogContent className="dialog-component" showCloseButton={false}>
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="weather_app" onClose={closeDialog}>
            <ProjectDialog {...weatherContent} />
          </WindowComponent>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "creds_updt"} onOpenChange={closeDialog}>
        <DialogContent className="dialog-component" showCloseButton={false}>
          <DialogTitle hidden={true}></DialogTitle>
          <WindowComponent title="creds_updt" onClose={closeDialog}>
            <ProjectDialog {...credsupdtContent} />
          </WindowComponent>
        </DialogContent>
      </Dialog>
    </>
  );
}
