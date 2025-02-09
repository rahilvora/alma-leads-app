'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Leads',
    href: '/dashboard/leads',
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-black': pathname === link.href,
              }
            )}
          >
            <p className="md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
