import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Reach out to Arco Fit Gym & Wellness in Fulshear, TX. Call (346) 553-2726 or visit us at 6527 Skyline Dr, Building C, Fulshear, TX 77441.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
