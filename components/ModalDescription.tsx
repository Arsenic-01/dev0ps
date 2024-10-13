import React from 'react';

const ModalContent = ({ id }) => {
  // Correctly destructure id
  return (
    <div>
      {id === 4 && ( // Ensure that id 4 exists in your ServiceCards
        <div className='flex justify-center items-center gap-20 px-3 py-20'>
          <div className='flex flex-col gap-9 max-w-4xl'>
            <h1 className='text-2xl mb-4'>
              Type of Property Valuation: Residential and Commercial Property
            </h1>
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl'>1. Residential Property Valuation</h2>
              <p>
                At SBA, we specialize in residential property valuation,
                providing accurate assessments to help you maximize the value of
                your property. Our team of experts utilizes a comprehensive
                approach tailored to meet each client's unique needs, ensuring
                that your residential property is valued appropriately. We take
                pride in delivering the best residential property valuation
                services in Nashik, guiding you toward achieving the optimal
                price for your valuable asset.
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl'>2. Commercial Property Valuation</h2>
              <p>
                Our commercial property valuation services focus on assessing
                various commercial properties, including industries, shopping
                malls, offices, and other business-oriented real estate. SBA is
                committed to offering top-notch commercial property valuation
                tailored to the specific requirements of our clients. Our
                experienced team of property valuers and legal professionals
                meticulously evaluates all critical factors to determine the
                best value for your property. We proudly serve clients across
                Nashik and throughout India.
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl'>What Our Property Valuation Shows</h2>
              <p>
                A property valuation report conducted by our professional
                valuers provides a precise estimate of your property's value
                compared to current market rates. Our comprehensive evaluation
                process ensures a thorough understanding of the property’s
                worth, and we share the methodologies employed in our
                assessments, enabling you to interpret the findings effectively.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='text-xl'>
                Key components of our property valuation report include:
              </h2>
              <ul className='pl-5'>
                <li className='list-disc'>
                  <b>Legal Aspects:</b> Detailed examination of property
                  ownership and legal documentation.
                </li>
                <li className='list-disc'>
                  <b>Property Description:</b> Comprehensive legal description
                  encompassing both land and structures.
                </li>
                <li className='list-disc'>
                  <b>Zoning Regulations:</b> Insights into zoning and resource
                  management applicable to the property.
                </li>
                <li className='list-disc'>
                  <b>Assessments:</b> Evaluations of applicable rates and
                  additional considerations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalContent;
