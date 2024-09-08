'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import services from '../../app/services/page';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

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
    title: 'TEV (Techno-Economic Viability Consultants)',
    href: '/services/tev',
    description:
      'TEV consultants assess the technical feasibility and economic viability of projects, ensuring they are sustainable, profitable, and risk-managed.',
  },
  {
    title: 'Lender’s independent engineers',
    href: '/services/lender-independent-engineers',
    description:
      'Lender’s independent engineers assess project feasibility, technical risks, and compliance to ensure loan security and project success.',
  },
  {
    title: 'Valuation Consultancy',
    href: '/services/valuation-consultancy',
    description:
      'Valuation Consultancy assesses the value of assets, businesses, or properties, providing expert advice for investment, sale, or legal purposes.',
  },
  {
    title: 'Real Estate Advisory',
    href: '/services/real-estate-advisory',
    description:
      'Real Estate Advisory provides expert guidance on property investments, development, market analysis, and strategy to maximize clients’ returns.',
  },
  {
    title: 'Plant and Machinery Valuation',
    href: '/services/plant-and-machinery-valuation',
    description:
      'Plant and Machinery Valuation determines the market or replacement value of industrial equipment for financial, insurance, or sale purposes.',
  },
  {
    title: 'Structural Designing',
    href: '/services/structural-designing',
    description:
      'Plant and Structural Designing involves creating safe, efficient layouts and frameworks for industrial facilities, ensuring stability and functionality.',
  },
  {
    title: 'Architectural Planning',
    href: '/services/architectural-planning',
    description:
      'Plant and architectural planning involves designing facilities and structures to optimize efficiency, safety, and aesthetics in industrial or urban environments.',
  },
  {
    title: 'Property and Assets Valuation',
    href: '/services/property-and-assets-valuation',
    description:
      'Property and assets valuation determines their worth using market data, condition, and comparable sales to guide buying, selling, or investment.',
  },
  {
    title: 'Town Planning Approvals',
    href: '/services/town-planning-approvals',
    description:
      'Town Planning Approvals involve reviewing and authorizing construction or land use to ensure compliance with zoning and regulations.',
  },
  {
    title: 'Black Money Valuation',
    href: '/services/black-money-valuation',
    description:
      'Black money valuation assesses hidden or unreported assets’ worth, often using forensic accounting to uncover illicit financial activity.',
  },
  {
    title: 'Tender and specs drawing',
    href: '/services/tender-and-specs-drawing',
    description:
      'A tender drawing details project requirements for bidding, while specs drawings outline technical and material specifics for construction.',
  },
  {
    title: 'Quality Control and NDA Testing',
    href: '/services/quality-control-and-nda-testing',
    description:
      'Quality Control and NDA Testing assesses the project’s quality, compliance with regulatory requirements, and compliance with NDA agreements.',
  },
  // Add more components here
];
{
  /* <NavigationMenuItem>
<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
<NavigationMenuContent>
  <ul className='grid gap-3 py-4 px-1 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
    <li className='row-span-4'>
      <NavigationMenuLink asChild>
        <a
          className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
          href='/'
        >
          <div className='mb-2 mt-4 text-lg font-medium'>
            shadcn/ui
          </div>
          <p className='text-sm leading-tight text-muted-foreground'>
            Beautifully designed components built with Radix UI and
            Tailwind CSS.
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  </ul>
</NavigationMenuContent>
</NavigationMenuItem> */
}

function NavigationMenuContents() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className='left-0'>
            <ul className='grid  gap-1 p-4 w-[500px] grid-cols-2 lg:w-[600px]'>
              {serviceData.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
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
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent className='right-0'>
            <ul className='grid w-[300px] gap-1 p-4 grid-cols-1 '>
              {aboutData.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
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
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        {...props}
      >
        <div className='text-sm font-medium leading-none'>{title}</div>
        <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';

export default NavigationMenuContents;
