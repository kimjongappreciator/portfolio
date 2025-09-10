import { IExplorerBar } from "../ui-components/iexplorer-bar";

export function Kanban() {
  return (
    <div className="w-full max-h-[60vh] flex flex-col bg-[#c0c0c0]">
      <IExplorerBar route="https://www.sebastian-chacon.com/about-me" />

      <div className="flex-1 overflow-auto p-4 bg-white"></div>
    </div>
  );
}
