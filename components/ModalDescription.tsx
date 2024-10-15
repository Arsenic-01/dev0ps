import React from 'react';

const ModalContent = ({ id }) => {
  return (
    <div>
      {/* Modal for Property & Assets Valuation (id: 4) */}
      {id === 4 && (
        <div className='flex justify-center items-center gap-20 px-3 py-20'>
          <div className='flex flex-col gap-9 max-w-4xl'>
            <h1 className='text-2xl mb-4'>
              Type of Property Valuation: Residential and Commercial Property
            </h1>
            {/* Content for Property Valuation */}
            {/* Rest of the code already given */}
          </div>
        </div>
      )}

      {/* Modal for Structural Designing (id: 1) */}
      {id === 1 && (
        <div className='flex justify-center items-center gap-20 px-3 py-20'>
          <div className='flex flex-col gap-9 max-w-4xl'>
            <h1 className='text-2xl mb-4'>Structural Designing Services</h1>
            <p>
              Our structural designing services ensure the creation of stable
              and safe structures. By analyzing various factors such as load,
              material, and environmental conditions, we deliver designs that
              are both functional and aesthetically pleasing. Whether it's for
              residential, commercial, or industrial structures, we aim to
              provide efficient, cost-effective solutions tailored to your
              specific needs.
            </p>
            <h2 className='text-xl'>Key Aspects of Structural Designing</h2>
            <ul className='pl-5'>
              <li className='list-disc'>
                <b>Load Analysis:</b> Detailed load calculations to ensure
                safety and durability.
              </li>
              <li className='list-disc'>
                <b>Material Selection:</b> Optimized material choices based on
                structural requirements and project scope.
              </li>
              <li className='list-disc'>
                <b>Environmental Considerations:</b> Addressing environmental
                impact and sustainability in the design.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Modal for Architectural Planning (id: 2) */}
      {id === 2 && (
        <div className='flex justify-center items-center gap-20 px-3 py-20'>
          <div className='flex flex-col gap-9 max-w-4xl'>
            <h1 className='text-2xl mb-4'>Architectural Planning Services</h1>
            <p>
              We offer comprehensive architectural planning services, ensuring
              that your spaces are functional, aesthetically pleasing, and
              sustainable. Our designs focus on optimizing space usage while
              meeting client preferences and adhering to regulatory standards.
            </p>
            <h2 className='text-xl'>Key Areas of Architectural Planning</h2>
            <ul className='pl-5'>
              <li className='list-disc'>
                <b>Space Optimization:</b> Effective planning for maximum
                functionality.
              </li>
              <li className='list-disc'>
                <b>Aesthetic Considerations:</b> Designs that balance
                functionality with aesthetic appeal.
              </li>
              <li className='list-disc'>
                <b>Sustainability:</b> Incorporating eco-friendly materials and
                practices into the planning process.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Modal for Interior Designing (id: 3) */}
      {id === 3 && (
        <div className='flex justify-center items-center gap-20 px-3 py-20'>
          <div className='flex flex-col gap-9 max-w-4xl'>
            <h1 className='text-2xl mb-4'>Interior Designing Services</h1>
            <p>
              Our interior designing services transform your indoor spaces by
              harmonizing aesthetics and functionality. We carefully curate
              furniture, colors, and layouts to create environments that are not
              only beautiful but also practical.
            </p>
            <h2 className='text-xl'>Core Elements of Interior Designing</h2>
            <ul className='pl-5'>
              <li className='list-disc'>
                <b>Space Planning:</b> Effective use of space to enhance flow
                and functionality.
              </li>
              <li className='list-disc'>
                <b>Color Theory:</b> Utilizing color palettes to evoke the
                desired atmosphere.
              </li>
              <li className='list-disc'>
                <b>Furniture Selection:</b> Choosing furniture that complements
                both style and space constraints.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Modal for Plant and Machinery Valuation (id: 8) */}
      {id === 8 && (
        <div className='flex justify-center items-center gap-20 px-3 py-20'>
          <div className='flex flex-col gap-9 max-w-4xl'>
            <h1 className='text-2xl mb-4'>
              Plant and Machinery Valuation Services
            </h1>
            <p>
              Our plant and machinery valuation services provide an accurate
              assessment of your industrial equipment. We evaluate condition,
              market demand, and overall functionality to deliver reliable
              valuations that assist in financial planning and asset management.
            </p>
            <h2 className='text-xl'>
              Factors Considered in Machinery Valuation
            </h2>
            <ul className='pl-5'>
              <li className='list-disc'>
                <b>Equipment Condition:</b> Detailed inspection of equipment
                wear and tear.
              </li>
              <li className='list-disc'>
                <b>Market Demand:</b> Analysis of current demand for specific
                machinery types.
              </li>
              <li className='list-disc'>
                <b>Operational Capacity:</b> Assessment of functionality and
                usage.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Continue similarly for other ids */}
    </div>
  );
};

export default ModalContent;
