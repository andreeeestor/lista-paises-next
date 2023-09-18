import { CountryCardsProps } from "@/types/props";
import Link from "next/link";

export default function CountryCards(props: CountryCardsProps) {
  return (
    <article
      className="h-64 min-w-full p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl"
      key={props.name}
    >
    <Link href={props.LinkHref}>
      {props.children}
      </Link>
    </article>
  );
}
