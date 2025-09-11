import { useT } from "@/store/i18n";
import { IExplorerBar } from "../ui-components/iexplorer-bar";
import type { ContentModel } from "../models/content-model";

export function ProjectDialog(content: ContentModel) {
  const t = useT(); 

  return (
    <div className="w-full max-h-[60vh] flex flex-col bg-[#c0c0c0] border border-black">
      <IExplorerBar route={`https://www.sebastian-chacon.com${content.path}`} />

      <div className="flex-1 overflow-auto p-4 bg-white text-black font-sans text-sm">
        <h1 className="text-lg font-bold mb-2"></h1>

        <div className="flex gap-4 mb-4">          
          <div className="w-40 h-28 bg-[#e0e0e0] border border-black flex items-center justify-center text-xs">
            [ Imagen aquí ]
          </div>
          
          <p className="leading-relaxed">{t(content.description)}</p>
        </div>

        <div className="mb-4">
          <a className="font-bold underline">Stack</a>
          <ul className="list-disc list-inside space-y-1">
            {content.stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-1">
          <p>
            🔗{" "}
            <a href={content.github} className="underline text-blue-600">
              Repositorio en GitHub
            </a>
          </p>
          <p>
            🌐{" "}
            <a href={content.demo} className="underline text-blue-600">
              Acceder a la aplicación
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
