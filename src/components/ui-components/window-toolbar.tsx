import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useT } from "@/store/i18n";

export function WindowToolbar() {
  const t = useT();
  return (
    <Menubar className="bg-[#c0c0c0] border-0 rounded-none h-6 p-0 shadow-none win-raised">
      <MenubarMenu>
        <MenubarTrigger
          className="
          px-2 py-0 h-6 
          bg-[#c0c0c0] text-black text-xs font-normal
          border-0 rounded-none
          hover:bg-[#0078d4] hover:text-white 
          active:bg-[#005a9e] active:text-white
          data-[state=open]:bg-[#0078d4] data-[state=open]:text-white
          focus:outline-none focus:ring-0
          shadow-none
        "
        >
          {t("file")}
        </MenubarTrigger>
        <MenubarContent
          className="
          bg-[#c0c0c0] 
          border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
          rounded-none shadow-none min-w-[120px] p-1
        "
        >
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("new_tab")}{" "}
            <MenubarShortcut className="text-xs opacity-70">
              Ctrl+T
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("new_window")}
          </MenubarItem>
          <MenubarSeparator
            className="
            h-px bg-[#808080] border-0 my-1 mx-2
            shadow-[0_1px_0_0_white]
          "
          />
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("share")}
          </MenubarItem>
          <MenubarSeparator
            className="
            h-px bg-[#808080] border-0 my-1 mx-2
            shadow-[0_1px_0_0_white]
          "
          />
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("print")}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger
          className="
          px-2 py-0 h-6 
          bg-[#c0c0c0] text-black text-xs font-normal
          border-0 rounded-none
          hover:bg-[#0078d4] hover:text-white 
          active:bg-[#005a9e] active:text-white
          data-[state=open]:bg-[#0078d4] data-[state=open]:text-white
          focus:outline-none focus:ring-0
          shadow-none
        "
        >
          {t("edit")}
        </MenubarTrigger>
        <MenubarContent
          className="
          bg-[#c0c0c0] 
          border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
          rounded-none shadow-none min-w-[120px] p-1
        "
        >
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("undo")}{" "}
            <MenubarShortcut className="text-xs opacity-70">
              Ctrl+Z
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("cut")}{" "}
            <MenubarShortcut className="text-xs opacity-70">
              Ctrl+X
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("copy")}{" "}
            <MenubarShortcut className="text-xs opacity-70">
              Ctrl+C
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("paste")}{" "}
            <MenubarShortcut className="text-xs opacity-70">
              Ctrl+V
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger
          className="
          px-2 py-0 h-6 
          bg-[#c0c0c0] text-black text-xs font-normal
          border-0 rounded-none
          hover:bg-[#0078d4] hover:text-white 
          active:bg-[#005a9e] active:text-white
          data-[state=open]:bg-[#0078d4] data-[state=open]:text-white
          focus:outline-none focus:ring-0
          shadow-none
        "
        >
          {t("view")}
        </MenubarTrigger>
        <MenubarContent
          className="
          bg-[#c0c0c0] 
          border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
          rounded-none shadow-none min-w-[120px] p-1
        "
        >
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("toolbar")}
          </MenubarItem>
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("status_bar")}
          </MenubarItem>
          <MenubarSeparator
            className="
            h-px bg-[#808080] border-0 my-1 mx-2
            shadow-[0_1px_0_0_white]
          "
          />
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("refresh")}{" "}
            <MenubarShortcut className="text-xs opacity-70">F5</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger
          className="
          px-2 py-0 h-6 
          bg-[#c0c0c0] text-black text-xs font-normal
          border-0 rounded-none
          hover:bg-[#0078d4] hover:text-white 
          active:bg-[#005a9e] active:text-white
          data-[state=open]:bg-[#0078d4] data-[state=open]:text-white
          focus:outline-none focus:ring-0
          shadow-none
        "
        >
          {t("help")}
        </MenubarTrigger>
        <MenubarContent
          className="
          bg-[#c0c0c0] 
          border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]
          rounded-none shadow-none min-w-[120px] p-1
        "
        >
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("help_topics")}{" "}
            <MenubarShortcut className="text-xs opacity-70">F1</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator
            className="
            h-px bg-[#808080] border-0 my-1 mx-2
            shadow-[0_1px_0_0_white]
          "
          />
          <MenubarItem
            className="
            px-4 py-1 text-xs text-black
            hover:bg-[#0078d4] hover:text-white
            focus:bg-[#0078d4] focus:text-white
            rounded-none cursor-pointer
          "
          >
            {t("about_menu")}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
