import ProtectedAdmin from "@/components/ProtectedAdmin";
import type { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ProtectedAdmin>{children}</ProtectedAdmin>;
}