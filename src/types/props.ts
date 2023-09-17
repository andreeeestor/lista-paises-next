import { Key } from "react";

export type CountryCardsProps = {
  KeyCard: Key;
  children: React.ReactNode;
  LinkHref: string
}

export type CountryBorderCardProps = {
  name: string
  ptName: string
  flag: string
  flagAlt: string
}
