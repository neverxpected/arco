import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reformer Pilates | Small Group Classes",
  description:
    "Try reformer Pilates at Arco Fit Gym & Wellness in Fulshear, TX. Small group classes designed to build core strength, flexibility, and balance.",
};

export default function ReformerPilatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
