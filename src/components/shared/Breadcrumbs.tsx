import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-xs font-sans tracking-wider uppercase text-charcoal-muted"
    >
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link
            href="/"
            className="hover:text-forest transition-colors font-medium text-charcoal-muted"
          >
            Home
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-1.5">
              <span className="text-border select-none">&gt;</span>
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-forest transition-colors font-medium text-charcoal-muted"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-forest font-semibold line-clamp-1">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

