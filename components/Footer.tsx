import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";
import { contactLinks, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <Reveal className="mt-2xl px-lg pb-2xl md:hidden">
      <footer className="flex items-start justify-between gap-lg">
        <Image src={withBasePath("/logo.svg")} alt="" width={48} height={37} />

        <div className="flex gap-2xl">
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
      </footer>
    </Reveal>
  );
}
