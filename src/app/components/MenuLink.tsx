import Link from "next/link";
import React from "react";

interface MenuLinkProps {
  title: string;
  address: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export default function MenuLink({ title, address, Icon }: MenuLinkProps) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className=" text-2xl sm:hidden" />
      <p className=" uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
