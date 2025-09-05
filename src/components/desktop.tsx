export function Desktop() {
  return (
    <div className="h-screen w-screen bg-cyan-800 p-4">
      {/* Escritorio */}
      <div className="grid grid-cols-6 gap-6">
        <div className="flex flex-col items-center">
          <img src="/icons/folder.png" alt="Proyectos" className="w-12 h-12" />
          <span className="text-white text-sm mt-1">Proyectos</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/user.png" alt="Sobre mí" className="w-12 h-12" />
          <span className="text-white text-sm mt-1">Sobre mí</span>
        </div>
        {/* Más iconos... */}
      </div>
    </div>
  );
}
