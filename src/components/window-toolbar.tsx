import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function WindowToolbar() {
  return (
    <Menubar className="bg-[#c0c0c0] border-0 rounded-none h-6 p-0 shadow-none win-raised">
      <MenubarMenu>
        <MenubarTrigger className="
          px-2 py-0 h-6 
          bg-[#c0c0c0] text-black text-xs font-normal
          border-0 rounded-none
          hover:bg-[#0078d4] hover:text-white 
          active:bg-[#005a9e] active:text-white
          data-[state=open]:bg-[#0078d4] data-[state=open]:text-white
          focus:outline-none focus:ring-0
          shadow-none
        ">
          File
        </MenubarTrigger>
        <MenubarContent className="
          bg-[#c0c0c0] 
          border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
          rounded-none shadow-none min-w-[120px] p-1
        ">
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            New Tab <MenubarShortcut className="text-xs opacity-70">Ctrl+T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            New Window
          </MenubarItem>
          <MenubarSeparator className="
            h-px bg-[#808080] border-0 my-1 mx-2
            shadow-[0_1px_0_0_white]
          " />
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Share
          </MenubarItem>
          <MenubarSeparator className="
            h-px bg-[#808080] border-0 my-1 mx-2
            shadow-[0_1px_0_0_white]
          " />
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Print
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="
          px-2 py-0 h-6 
          bg-[#c0c0c0] text-black text-xs font-normal
          border-0 rounded-none
          hover:bg-[#0078d4] hover:text-white 
          active:bg-[#005a9e] active:text-white
          data-[state=open]:bg-[#0078d4] data-[state=open]:text-white
          focus:outline-none focus:ring-0
          shadow-none
        ">
          Edit
        </MenubarTrigger>
        <MenubarContent className="
          bg-[#c0c0c0] 
          border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
          rounded-none shadow-none min-w-[120px] p-1
        ">
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Undo <MenubarShortcut className="text-xs opacity-70">Ctrl+Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Cut <MenubarShortcut className="text-xs opacity-70">Ctrl+X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Copy <MenubarShortcut className="text-xs opacity-70">Ctrl+C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Paste <MenubarShortcut className="text-xs opacity-70">Ctrl+V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="
          px-2 py-0 h-6 
          bg-[#c0c0c0] text-black text-xs font-normal
          border-0 rounded-none
          hover:bg-[#0078d4] hover:text-white 
          active:bg-[#005a9e] active:text-white
          data-[state=open]:bg-[#0078d4] data-[state=open]:text-white
          focus:outline-none focus:ring-0
          shadow-none
        ">
          View
        </MenubarTrigger>
        <MenubarContent className="
          bg-[#c0c0c0] 
          border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
          rounded-none shadow-none min-w-[120px] p-1
        ">
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Toolbar
          </MenubarItem>
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Status Bar
          </MenubarItem>
          <MenubarSeparator className="
            h-px bg-[#808080] border-0 my-1 mx-2
            shadow-[0_1px_0_0_white]
          " />
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Refresh <MenubarShortcut className="text-xs opacity-70">F5</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="
          px-2 py-0 h-6 
          bg-[#c0c0c0] text-black text-xs font-normal
          border-0 rounded-none
          hover:bg-[#0078d4] hover:text-white 
          active:bg-[#005a9e] active:text-white
          data-[state=open]:bg-[#0078d4] data-[state=open]:text-white
          focus:outline-none focus:ring-0
          shadow-none
        ">
          Help
        </MenubarTrigger>
        <MenubarContent className="
          bg-[#c0c0c0] 
          border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
          rounded-none shadow-none min-w-[120px] p-1
        ">
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            Help Topics <MenubarShortcut className="text-xs opacity-70">F1</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator className="
            h-px bg-[#808080] border-0 my-1 mx-2
            shadow-[0_1px_0_0_white]
          " />
          <MenubarItem className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          ">
            About
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}