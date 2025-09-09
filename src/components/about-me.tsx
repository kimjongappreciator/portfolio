import { useT } from "@/store/i18n";
import { ExplorerBar } from "./explorer-bar";

export function AboutMe() {
  const t = useT();

  const aboutMe = {
    title: t("about_me_title"),
    intro: t("about_me_intro"),
    experience: t("about_me_experience"),
    interests: t("about_me_interests"),
    values: t("about_me_values"),
    stack: t("about_me_stack"),
  };

  return (
    <div className="w-full max-h-[60vh] flex flex-col bg-[#c0c0c0]">
      <ExplorerBar route="https://www.sebastian-chacon.com/about-me"/>
      
      <div className="flex-1 overflow-auto p-4 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex items-center gap-4 mb-6 p-4 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]">
            <div className="w-16 h-16 bg-[#008080] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] flex items-center justify-center text-white text-2xl">
              👤
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black mb-1">
                {aboutMe.title}
              </h1>
              <div className="text-sm text-[#008080] font-semibold">
                Software Developer
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row flex-wrap gap-6">            
            <div className="flex-1 min-w-[280px] bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-[#008080] border border-[#404040] flex items-center justify-center text-white text-xs">
                  ℹ️
                </div>
                <h2 className="text-lg font-bold text-black">
                  {t("introduction") || "Introduction"}
                </h2>
              </div>
              <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3">
                <p className="text-sm text-black leading-relaxed">
                  {aboutMe.intro}
                </p>
              </div>
            </div>
            
            <div className="flex-1 min-w-[280px] bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-[#008080] border border-[#404040] flex items-center justify-center text-white text-xs">
                  💼
                </div>
                <h2 className="text-lg font-bold text-black">
                  {t("experience") || "Experience"}
                </h2>
              </div>
              <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3">
                <p className="text-sm text-black leading-relaxed">
                  {aboutMe.experience}
                </p>
              </div>
            </div>
            
            <div className="flex-1 min-w-[280px] bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-[#008080] border border-[#404040] flex items-center justify-center text-white text-xs">
                  🔧
                </div>
                <h2 className="text-lg font-bold text-black">Stack</h2>
              </div>
              <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3">
                <p className="text-sm text-black leading-relaxed">
                  {aboutMe.stack}
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-black leading-relaxed">
                  <li>Frontend: Angular, Vue, React, Flutter</li>
                  <li>Backend: Node.js, Spring Boot, Flask</li>
                  <li>Databases: PostgreSQL, MongoDB, MySQL, Oracle</li>
                  <li>Tools: Docker, Git, CI/CD</li>
                  <li>Languages: JavaScript/TypeScript, Python, Java, C#</li>
                </ul>
              </div>
            </div>
            
            <div className="flex-1 min-w-[280px] bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-[#008080] border border-[#404040] flex items-center justify-center text-white text-xs">
                  ⚡
                </div>
                <h2 className="text-lg font-bold text-black">
                  {t("interests") || "Interests"}
                </h2>
              </div>
              <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3">
                <p className="text-sm text-black leading-relaxed">
                  {aboutMe.interests}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[#008080] border border-[#404040] flex items-center justify-center text-white text-xs">
                💎
              </div>
              <h2 className="text-lg font-bold text-black">
                {t("values") || "Values"}
              </h2>
            </div>
            <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3">
              <p className="text-sm text-black leading-relaxed">
                {aboutMe.values}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
