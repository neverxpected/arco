import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule | Group Fitness & Pilates Times",
  description:
    "View the weekly class schedule at Arco Fit Gym & Wellness in Fulshear, TX. Find times for group fitness, reformer Pilates, yoga, and more.",
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
