import React from 'react';

interface ModalContentProps {
  id: number;
}

const ModalContent = ({ id }: ModalContentProps) => {
  const card = ServiceCardsDescription.find((card) => card.id === id);

  if (!card) {
    return <p>No content available for the selected service.</p>;
  }

  return (
    <div className='flex justify-center items-center gap-20 px-3 py-16'>
      <div className='flex flex-col gap-9 max-w-4xl'>
        <h2 className='text-xl'>
          Main Services Provided by SBA for {card.title}
        </h2>
        <div className='flex flex-col gap-2'>
          <ul className='pl-5'>
            {card.list.map((item, index) => (
              <li key={index} className='list-disc'>
                <b>{item.title}</b>
                {item.description}
              </li>
            ))}
          </ul>
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

const ServiceCardsDescription = [
  {
    id: 1,
    title: 'Structural Designing',
    description:
      'Our structural designing services ensure the creation of stable and safe structures. By analyzing various factors such as load, material, and environmental conditions, we deliver designs that are both functional and aesthetically pleasing. Whether its for residential, commercial, or industrial structures, we aim to provide efficient, cost-effective solutions tailored to your specific needs.',
    list: [
      {
        title: 'Structural Analysis: ',
        description:
          'Assessing loads and stresses to ensure safety and stability.',
      },
      {
        title: 'Foundation Design: ',
        description: 'Creating strong and stable bases for buildings.',
      },
      {
        title: 'Material Selection: ',
        description:
          'Choosing appropriate materials for durability and efficiency.',
      },
      {
        title: 'Seismic Design: ',
        description: 'Incorporating safety measures for earthquake resistance.',
      },
      {
        title: 'Load-Bearing Calculations: ',
        description: 'Ensuring structures can withstand anticipated loads.',
      },
      {
        title: 'Reinforcement Detailing: ',
        description: 'Designing reinforcement for strength and stability.',
      },
      {
        title: 'Compliance with Codes: ',
        description:
          'Adhering to local and international building regulations.',
      },
      {
        title: 'Sustainability Integration: ',
        description:
          'Incorporating eco-friendly and energy-efficient solutions.',
      },
      {
        title: 'Construction Support: ',
        description: 'Providing guidance during the building phase.',
      },
      {
        title: 'Retrofitting Solutions: ',
        description: 'Enhancing existing structures for improved performance.',
      },
    ],
  },
  {
    id: 2,
    title: 'Architectural Designing',
    description:
      'Our architectural designing services focus on creating functional and aesthetically pleasing spaces. We consider factors such as space, light, and aesthetics to deliver designs that are both functional and visually appealing. Whether its for residential, commercial, or industrial spaces, we aim to provide innovative, cost-effective solutions tailored to your specific needs.',
    list: [
      {
        title: 'Site Analysis: ',
        description:
          'Evaluating site conditions, orientation, and surroundings to optimize design.',
      },
      {
        title: 'Space Planning: ',
        description:
          'Efficiently organizing spaces to enhance functionality and aesthetics.',
      },
      {
        title: 'Conceptual Design: ',
        description:
          'Developing initial ideas and sketches to define the project vision.',
      },
      {
        title: 'Zoning and Regulations: ',
        description:
          'Ensuring compliance with local zoning laws and building codes.',
      },
      {
        title: 'Material Selection: ',
        description:
          'Choosing suitable materials for sustainability and durability.',
      },
      {
        title: 'Sustainability Integration: ',
        description:
          'Incorporating eco-friendly practices and energy-efficient solutions.',
      },
      {
        title: 'Lighting Design: ',
        description:
          'Optimizing natural and artificial lighting for comfort and functionality.',
      },
      {
        title: 'Structural Coordination: ',
        description:
          'Collaborating with structural engineers to ensure stability and safety.',
      },
      {
        title: 'Cost Estimation: ',
        description:
          'Providing detailed cost analysis to stay within the budget.',
      },
      {
        title: 'Construction Documentation: ',
        description:
          'Creating detailed plans and specifications for the construction process.',
      },
    ],
  },
];
