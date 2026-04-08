import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staff Portal',
  robots: { index: false, follow: false },
};

export default function StaffPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
