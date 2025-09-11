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

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-shrink-0 w-full sm:w-48 md:w-56 lg:w-64">
            <div className="aspect-video bg-[#e0e0e0] border border-black overflow-hidden">
              <img
                src={content.pic}
                alt="Project Image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <p className="leading-relaxed text-justify">
              {t(content.description)}
            </p>
          </div>
        </div>

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
          <p className="flex items-center gap-2">
            <span>🔗</span>
            <a
              href={content.github}
              className="underline text-blue-600 hover:text-blue-800 transition-colors"
            >
              GitHub
            </a>
          </p>
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
  );
}
