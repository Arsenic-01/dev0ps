import { ServiceCardsDescription } from '@/data';

interface ModalContentProps {
  id: number;
  isInvalid?: boolean;
}

const ModalContent = ({ id, isInvalid = false }: ModalContentProps) => {
  const card = ServiceCardsDescription.find((card) => card.id === id);

  if (isInvalid && id === 0 && !card) {
    return (
      <p className='text-center py-10 text-white/70'>
        Request for a service that is currently unavailable. It might not yet be
        listed on our website.
      </p>
    );
  }

  if (!card) {
    return (
      <p className='text-center py-10 text-white/70'>
        No content available for the selected service.
      </p>
    );
  }

  return (
    <div className='flex justify-center items-center gap-20 px-3 py-16 xl:py-14 lg:px-5'>
      <div className='flex flex-col gap-9 max-w-4xl'>
        <h2 className='text-xl'>
          Main Services Provided by SBA for {card.title}
        </h2>
        <div className='flex flex-col gap-2'>
          <ul className='pl-5'>
            {card.list.map((item, index) => (
              <li key={index} className='list-disc my-2'>
                <b>{item.title}</b>
                <span className='text-white/70'>{item.description}</span>
              </li>
            ))}
          </ul>
          {card.sectors && (
            <div className='flex flex-col'>
              <h2 className='text-xl my-5'>Sectors we serve</h2>
              <ul className='pl-5'>
                {card.sectors.map((sector, index) => (
                  <li key={index} className='list-disc my-2'>
                    <b>{sector.title}</b>
                    <span className='text-white/70'>{sector.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {card.coverage && (
            <div className='flex flex-col'>
              <h2 className='text-xl my-5'>Coverage</h2>
              <ul className='pl-5'>
                {card.coverage.asset_classes.map((coverage, index) => (
                  <li key={index} className='list-disc my-2'>
                    {coverage.title}
                    <span className='text-white/70'>
                      {coverage.description}
                    </span>
                  </li>
                ))}
                {card.coverage.valuation_purpose.map((purpose, index) => (
                  <li key={index} className='list-disc my-2'>
                    {purpose.title}
                    <span className='text-white/60'>{purpose.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <span className='text-sm text-gray-500 my-5'>
            *Note: The list of services provided may vary depending on the
            specific requirements of the project and the client's needs.
          </span>
        </div>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default ModalContent;
