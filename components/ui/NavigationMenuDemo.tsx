'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { useRouter } from 'next/navigation';
const aboutData = [
  {
    title: '🌐 About Company',
    href: '/about',
  },
  {
    title: '🏆 Awards and Recognition',
    href: '/about/awards-and-recognition',
  },
  {
    title: '📜 Certifications and Licenses',
    href: '/about/certifications-and-licenses',
  },
];

const serviceData = [
  {
    id: 1,
    title: 'Structural Designing',
  },
  {
    id: 2,
    title: 'Architectural Planning',
  },
  {
    id: 3,
    title: 'Interior Designing',
  },
  {
    id: 4,
    title: 'Valuation Consultancy',
  },
  {
    id: 5,
    title: 'TEV Consultancy',
  },
  {
    id: 6,
    title: 'Lender’s independent engineers',
  },
  {
    id: 7,
    title: 'Real Estate Advisory',
  },
  {
    id: 8,
    title: 'Plant and Machinery Valuation',
  },
  {
    id: 9,
    title: 'Black Money Valuation',
  },
  {
    id: 10,
    title: 'Town planning Approvals',
  },
  {
    id: 11,
    title: 'Tender and specs drawing',
  },
  {
    id: 12,
    title: 'NDT Testing & Stability Certification',
  },
  {
    id: 13,
    title: 'Surverying & Monitoring',
  },
  {
    id: 14,
    title: 'Chartered Engineer Certifications',
  },
  {
    id: 15,
    title: 'Industrial Safety Audits',
  },
  {
    id: 16,
    title: 'NA Conversion of Lands',
  },
  {
    id: 17,
    title: 'Factory Act Certification',
  },
  {
    id: 18,
    title: 'IPO Certification',
  },
  // Add more components here
];

const NavigationMenuContents = () => {
  const router = useRouter();

  const handleLinkClick = (id: number) => {
    // Redirect to /services with service ID as query parameter
    router.push(`/services?serviceId=${id}`);
  };

  return (
    <NavigationMenu
      role='navigation'
      aria-label='Service and information links'
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger aria-haspopup='true'>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className='left-0'>
            <ul
              className='grid gap-1 p-4 w-[500px] grid-cols-2 lg:w-[600px]'
              aria-label='Service list'
            >
              {serviceData.map((service) => (
                <ListItem
                  key={service.id}
                  title={service.title}
                  // description={service.description}
                  className='hover:cursor-pointer'
                  onClick={() => handleLinkClick(service.id)}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href='/projects' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href='/about' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href='/contact' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuContents;

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string;
    description?: string;
    onClick: () => void;
  }
>(({ title, description, onClick, className, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        onClick={onClick}
        className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
        {...props}
        aria-label={`View details for ${title}`}
      >
        <div className='text-sm font-medium leading-none'>{title}</div>
        {description && (
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {description}
          </p>
        )}
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';
