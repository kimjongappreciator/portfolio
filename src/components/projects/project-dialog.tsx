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

        <div className="flex flex-col sm:flex-row gap-6 mb-4">
          <div className="flex-shrink-0 w-full sm:w-64 md:w-72 lg:w-80">
            <div className="aspect-[4/3] bg-[#e0e0e0] border border-black overflow-hidden shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#808080]">
              <img
                src={content.pic}
                alt="Project Image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0 text-sm leading-relaxed">
            <p className="text-justify">{t(content.description)}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <a className="font-bold underline">Stack</a>
            <ul className="list-disc list-inside space-y-1 mt-2">
              {content.stack.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            {content.extra && (
              <p className="flex items-center gap-2">
                <span>📝</span>
                <a
                  href={content.extra}
                  className="underline text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Paper
                </a>
              </p>
            )}
            {content.github && (
              <p className="flex items-center gap-2">
                <span>🔗</span>
                <a
                  href={content.github}
                  className="underline text-blue-600 hover:text-blue-800 transition-colors"
                >
                  GitHub
                </a>
              </p>
            )}
            {content.demo && (
              <p className="flex items-center gap-2">
                <span>🌐</span>
                <a
                  href={content.demo}
                  className="underline text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Demo
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
