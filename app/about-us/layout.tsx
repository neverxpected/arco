import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Story & Mission",
  description:
    "Arco Fit Gym & Wellness was founded by three fitness friends in Fulshear, TX with a mission to build a gym focused on strength training, community, and science-backed fitness for all levels.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
