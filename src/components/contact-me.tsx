import { useT } from "@/store/i18n";

export function ContactMe() {
  const t = useT();

  return (
    <div className="w-full h-full font-mono text-sm text-black p-4 leading-relaxed overflow-auto">
      <a className="block mb-3 font-bold underline">{t?.("contact_me_title")}</a>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <a
            href="https://www.linkedin.com/in/sebastian-chacon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kimjongappreciator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Github
          </a>
        </li>
        <li>
          <span>Email: </span>
          <a
            href="mailto:schacon2798@gmail.com"
            className="text-blue-600 hover:underline"
          >
            schacon2798@gmail.com
          </a>
          <span> | </span>
          <a
            href="mailto:u201816406@upc.edu.pe"
            className="text-blue-600 hover:underline"
          >
            u201816406@upc.edu.pe
          </a>
        </li>
      </ul>
    </div>
  );
}
