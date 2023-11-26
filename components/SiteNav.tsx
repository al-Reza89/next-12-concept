import { siteRoutes } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface sitenavProps {}

const SiteNav: React.FC<sitenavProps> = ({}) => {
  const pathname = usePathname();

  return (
    <div>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {siteRoutes.map((siteRoute) => (
            <li key={siteRoute.href}>
              <Link
                href={siteRoute.href}
                className={`text-zinc-400 transition ${
                  pathname === siteRoute.href ? "text-zinc-900" : ""
                }`}
              >
                {siteRoute.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SiteNav;
