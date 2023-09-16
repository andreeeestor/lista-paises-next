export default function Header() {
  return (
    <>
      <header className="w-full bg-white h-32 sm:h-16 flex sm:flex-row flex-col items-center justify-center">
        <nav className="container flex items-center sm:flex-row flex-col sm:justify-between sm:gap-y-0 gap-y-2">
          <h1 className="font-bold text-2xl flex items-center">
            <span className="text-4xl mr-1">🌎</span>Lista de Países
          </h1>
          <hr className="block sm:hidden h-1 w-full" />
          <h1 className="font-bold text-2xl flex items-center">
            Projeto de Framework
          </h1>
        </nav>
      </header>
    </>
  );
}
