import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function FAQ() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className="mt-12 md:mt-16 lg:mt-20 pb-14 md:py-16">
      <h2 className="font-semi-bold text-center leading-relaxed text-pretty text-4xl lg:text-5xl xl:text-6xl">
        FAQs
      </h2>
      <Accordion
        className="mt-12 md:mt-16 lg:mt-28 xl:mt-32"
        variant="bordered"
      >
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
