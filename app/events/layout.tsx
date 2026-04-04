import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Upcoming Gym Events & Community Activities",
  description:
    "Check out upcoming events at Arco Fit Gym & Wellness in Fulshear, TX. Community workouts, challenges, and fitness events for all levels.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
