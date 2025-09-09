import { ExplorerBar } from "./explorer-bar";
import folder from "@/assets/desktop-icons/folder.png"

export function MyProjects() {
  return (
    <>
      <div className="w-full h-[60vh] max-h-[60vh] flex flex-col">
        <ExplorerBar route="C:/Desktop/My Projects"/>
        <div className="flex overflow-auto">
          <div className="w-[30%] h-fit border-r border-gray-300 bg-[url(src/assets/projects-folder/explorercorner.jpg)] bg-cover">
            <img src={folder} alt="folder" className="w-10 h-10 m-4"/>
            <h2 className="text-lg font-semibold m-4">My Projects</h2>
          </div>
          <div className="flex">
            
          </div>
        </div>
      </div>
    </>
  );
}
