import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities | Saunas, Posing Room, Kids Club & More",
  description:
    "Arco Fit features premium amenities including custom saunas for men and women, a posing room, kids club, smoothie bar, and over 120 pieces of strength training equipment.",
};

export default function AmenitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
