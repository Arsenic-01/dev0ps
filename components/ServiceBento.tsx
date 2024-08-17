import { ServicegridItems } from '@/data';
import { ServiceBentoGrid, ServiceBentoGridItem } from './ui/ServiceBentoGrid';

const ServiceGrid = () => {
  return (
    <section id='about'>
      <ServiceBentoGrid className='w-full py-5 px-5  lg:px-10'>
        {ServicegridItems.map((item, i) => (
          <ServiceBentoGridItem
            id={item.id}
            className={item.className}
            key={i}
          />
        ))}
      </ServiceBentoGrid>
    </section>
  );
};

export default ServiceGrid;
