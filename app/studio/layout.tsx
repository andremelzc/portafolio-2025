import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio - Portfolio CMS",
  description: "Content management for portfolio",
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
