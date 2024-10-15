'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
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
    title: 'Architectural Planning',
    href: '/services/architectural-planning',
    description:
      'Plant and architectural planning involves designing facilities and structures to optimize efficiency, safety, and aesthetics in industrial or urban environments.',
  },
  {
    title: 'Structural Designing',
    href: '/services/structural-designing',
    description:
      'Plant and Structural Designing involves creating safe, efficient layouts and frameworks for industrial facilities, ensuring stability and functionality.',
  },
  {
    title: 'Town Planning Approvals',
    href: '/services/town-planning-approvals',
    description:
      'Town Planning Approvals involve reviewing and authorizing construction or land use to ensure compliance with zoning and regulations.',
  },
  {
    title: 'Valuation Consultancy',
    href: '/services/valuation-consultancy',
    description:
      'Valuation Consultancy assesses the value of assets, businesses, or properties, providing expert advice for investment, sale, or legal purposes.',
  },
  {
    title: 'Tender and specs drawing',
    href: '/services/tender-and-specs-drawing',
    description:
      'A tender drawing details project requirements for bidding, while specs drawings outline technical and material specifics for construction.',
  },
  {
    title: 'Lender’s independent engineers',
    href: '/services/lender-independent-engineers',
    description:
      'Lender’s independent engineers assess project feasibility, technical risks, and compliance to ensure loan security and project success.',
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
    title: 'Black Money Valuation',
    href: '/services/black-money-valuation',
    description:
      'Black money valuation assesses hidden or unreported assets’ worth, often using forensic accounting to uncover illicit financial activity.',
  },

  {
    title: 'NDT Testing & Stability Certification',
    href: '/services/quality-control-and-nda-testing',
    description:
      'Quality Control and NDA Testing assesses the project’s quality, compliance with regulatory requirements, and compliance with NDA agreements.',
  },
  {
    title: 'Surverying & Monitoring',
    href: '/services/quality-control-and-nda-testing',
    description:
      'Surveying measures land features. PT sheets ensure boundary accuracy, while contour surveys map elevation changes for construction planning.',
  },
  {
    title: 'Chartered Engineer Certifications',
    href: '/services/quality-control-and-nda-testing',
    description:
      'Surveying measures land features. PT sheets ensure boundary accuracy, while contour surveys map elevation changes for construction planning.',
  },
  {
    title: 'Industrial Safety Audits',
    href: '/services/quality-control-and-nda-testing',
    description:
      'Surveying measures land features. PT sheets ensure boundary accuracy, while contour surveys map elevation changes for construction planning.',
  },
  {
    title: 'NA Conversion of Lands',
    href: '/services/quality-control-and-nda-testing',
    description:
      'Surveying measures land features. PT sheets ensure boundary accuracy, while contour surveys map elevation changes for construction planning.',
  },
  {
    title: 'Factory Act Certification',
    href: '/services/quality-control-and-nda-testing',
    description:
      'Surveying measures land features. PT sheets ensure boundary accuracy, while contour surveys map elevation changes for construction planning.',
  },
  {
    title: 'IPO Certification',
    href: '/services/quality-control-and-nda-testing',
    description:
      'Surveying measures land features. PT sheets ensure boundary accuracy, while contour surveys map elevation changes for construction planning.',
  },
  // Add more components here
];

function NavigationMenuContents() {
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
              {serviceData.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
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
        aria-label={`View details for ${title}`}
      >
        <div className='text-sm font-medium leading-none'>{title}</div>
        {children && (
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        )}
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';

export default NavigationMenuContents;
