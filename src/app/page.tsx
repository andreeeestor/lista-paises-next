import Image from "next/image";
import { getCountries } from "@/functions/fetch";
import CountryCard from "@/components/CountryCard";

export default async function Home() {
  const countries = await getCountries();
  return (
    <>
      <main className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2 mt-16">
        {countries.map((country) => (
          // <CountryCards key={country.name.common} LinkHref={`/pais/${country.name.common}`}>
          //   <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl shadow-md">
          //     <Image
          //       src={country.flags.svg}
          //       alt={country.flags.alt}
          //       fill
          //       className="object-cover"
          //     />
          //   </div>
          //   <h1 className="font-semibold text-lg text-center mt-1">{country.translations.por.common}</h1>
          // </CountryCards>
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            ptName={country.translations.por.common}
            flag={country.flags.svg}
            flagAlt={country.flags.alt}
          />
        ))}
      </main>
    </>
  );
}
