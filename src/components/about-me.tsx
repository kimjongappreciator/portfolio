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
    <>
    <div className="w-auto h-auto">
      <ExplorerBar />
      <div className="overflow-auto">
      <div className="flex justify-center p-2 flex-col max-w-xl">
        <h2 className="text-xl font-bold mb-2">{aboutMe.title}</h2>
        <p className="text-sm mb-2">{aboutMe.intro}</p>
        <p className="text-sm mb-2">{aboutMe.experience}</p>
        <p className="text-sm mb-2">{aboutMe.stack}</p>
        <p className="text-sm mb-2">{aboutMe.interests}</p>
        <p className="text-sm">{aboutMe.values}</p>
      </div>
      </div>
      </div>
    </>
  );
}
