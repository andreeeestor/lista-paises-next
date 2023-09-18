import CountryBorderCard from "@/components/CountryBorderCard";
import { getCountryBordersByName, getCountryByName } from "@/functions/getCountry";
import Image from "next/image";
import Link from "next/link";

export default async function CountryPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await getCountryByName(name);
  const borderCountries = await getCountryBordersByName(decodeURI(name))

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <>
      <section className="flex flex-col container">
        <h1 className="text-4xl text-center font-bold text-gray-800 my-16">
          {country.translations.por.common}
        </h1>
        <Link href={"/"} className="flex items-center gap-x-1 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Voltar
        </Link>
        <article className="flex flex-col md:flex-row justify-between min-w-full p-10 bg-white rounded-xl">
          <section className="">
            {country.capital && (
              <h2 className="text-xl text-gray-800">
                <strong className="font-medium">🏙️ Capital: </strong>
                {country.capital}
              </h2>
            )}
            <h2 className="text-xl text-gray-800 my-3">
              <strong className="font-medium">🗺️ Continente: </strong>
              {country.region}
              {country.subregion && `- ${country.subregion}`}
            </h2>
            <h2 className="text-xl text-gray-800 my-3">
              <strong className="font-medium">👨‍👩‍👧‍👦 População: </strong>
              {formatter.format(country.population)}
            </h2>
            {country.languages && (
              <h2 className="text-xl text-gray-800">
                <strong className="font-medium">🗣️ Idioma(s): </strong>
                <br />
                {Object.values(country?.languages).map((language) => (
                  <span
                    key={language}
                    className="inline-block px-2 py-1 mt-2 bg-indigo-700 mr-2 text-white text-sm rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </h2>
            )}
          </section>
          <div className="relative h-48 my-2 md:h-auto w-96 shadow-md md:order-last order-first rounded-xl">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </article>
        <section>
          <h3 className="mt-12 text-2xl font-semibold text-gray-800">
            Países que fazem fronteiras
          </h3>
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2 mt-4">
            {borderCountries?.map((border) => (
              <CountryBorderCard key={border.name} {...border} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
