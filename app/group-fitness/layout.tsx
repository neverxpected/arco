import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Fitness Classes | HIIT, Dance, Kickboxing & More",
  description:
    "Join group fitness classes at Arco Fit in Fulshear, TX. We offer HIIT, dance fitness, cardio kickboxing, functional strength training, and more for all fitness levels.",
};

export default function GroupFitnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
