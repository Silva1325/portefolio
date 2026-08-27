"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
];

const contactLinks = [
  { label: "Mail", href: "mailto:miguelsilva2001511@gmail.com" },
  { label: "Phone", href: "tel:+351911037312" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/miguel-silva-068974186/" },
  { label: "Github", href: "https://github.com/silva1325" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border-default md:block md:w-[223px] md:shrink-0 md:border-b-0 md:border-r">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between p-lg md:hidden">
        <Link href="/" className="flex items-center gap-sm">
          <Image src="/logo.svg" alt="" width={76} height={58} />
        </Link>
        <div className="flex items-center gap-xl">
          {primaryLinks.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href} uppercase />
          ))}
        </div>
      </div>

      {/* Tablet / desktop sidebar */}
      <div className="hidden md:flex md:h-full md:flex-col md:gap-lg md:py-2xl">
        <div className="flex flex-col gap-lg px-lg">
          <Image src="/logo.svg" alt="Miguel Silva" width={76} height={58} />
          <div className="flex flex-col gap-sm">
            {primaryLinks.map((link) => (
              <NavLink key={link.href} href={link.href} active={pathname === link.href} />
            ))}
          </div>
        </div>

        {/* Full-bleed — must not inherit horizontal padding from a shared container */}
        <div className="border-t border-border-default" />

        <div className="flex flex-col gap-sm px-lg">
          <p className="text-label text-text-secondary uppercase">Contact</p>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body text-text-primary transition-colors duration-200 hover:text-text-hover"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  uppercase,
}: {
  href: string;
  active: boolean;
  uppercase?: boolean;
}) {
  const label = primaryLinks.find((l) => l.href === href)!.label;
  return (
    <Link
      href={href}
      className={[
        "transition-colors duration-200",
        uppercase ? "text-label uppercase" : "font-display text-heading-md",
        active
          ? "font-bold text-text-primary"
          : "font-medium text-text-secondary hover:text-text-hover",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
