"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { withBasePath } from "@/lib/basePath";
import { contactLinks, socialLinks } from "@/lib/content";

const primaryLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border-default md:block md:w-[223px] md:shrink-0 md:border-b-0 md:border-r">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between p-lg md:hidden">
        <Link href="/" className="flex items-center gap-sm">
          <Image src={withBasePath("/logo.svg")} alt="" width={76} height={58} />
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
          <Image src={withBasePath("/logo.svg")} alt="Miguel Silva" width={76} height={58} />
          <div className="flex flex-col gap-sm">
            {primaryLinks.map((link) => (
              <NavLink key={link.href} href={link.href} active={pathname === link.href} />
            ))}
          </div>
        </div>

        {/* Full-bleed — must not inherit horizontal padding from a shared container */}
        <div className="border-t border-border-default" />

        <div className="flex flex-col gap-lg px-lg">
          <div className="flex flex-col gap-sm">
            <p className="text-label text-text-secondary uppercase">Socials</p>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-text-primary transition-colors duration-200 hover:text-text-hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-sm">
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
