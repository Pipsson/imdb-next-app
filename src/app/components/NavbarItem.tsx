"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={` font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 dark: decoration-white decoration-black rounder-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
