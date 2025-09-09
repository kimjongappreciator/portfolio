import { ExplorerBar } from "./explorer-bar";

export function MyProjects() {
  return (
    <>
      <div className="w-full max-h-[60vh] flex flex-col bg-[#c0c0c0]">
        <ExplorerBar route="C:/Desktop/My Projects"/>
      </div>
    </>
  );
}
