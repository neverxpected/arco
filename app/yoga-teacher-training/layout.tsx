import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga Teacher Training | Get Certified",
  description:
    "Earn your yoga teaching certification at Arco Fit Gym & Wellness in Fulshear, TX. Comprehensive training program for aspiring yoga instructors.",
};

export default function YogaTeacherTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
