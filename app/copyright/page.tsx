import Link from 'next/link';
import React from 'react';

const CopyRightPage = () => {
  return (
    <div className='py-24 md:py-28 px-5 flex justify-center items-center mx-auto'>
      <div className='max-w-4xl flex flex-col items-center justify-center gap-12'>
        <h2 className='text-2xl font-bold md:text-3xl text-center'>
          Copyright Policy
        </h2>
        <div className='flex flex-col gap-5'>
          <p>
            The images displayed on this website are used to enhance the
            presentation and convey the essence of our architectural and
            structural engineering services. However, these images are not our
            property and remain the intellectual property of their respective
            owners.
          </p>
          <p>
            We sincerely acknowledge the creativity and efforts of the original
            creators of these images. While we have utilized them on this
            commercial platform to showcase concepts, styles, and ideas relevant
            to our domain, we have not sought explicit permission from the
            respective copyright holders.
          </p>
          <div className='flex flex-col gap-3'>
            <p>
              To ensure transparency and avoid unintended disputes, we wish to
              clarify the following:
            </p>
            <ul className='list-disc pl-4'>
              <li>
                <span className='font-semibold'>Ownership</span>: All rights to
                the images belong to their original creators or copyright
                holders.{' '}
              </li>
              <li>
                <span className='font-semibold'>Purpose</span>: These images are
                used solely for illustrative purposes to complement our service
                offerings and website design.
              </li>
              <li>
                <span className='font-semibold'>Resolution of Concerns</span>:
                If you are the rightful owner of any image featured here and
                object to its use, kindly reach out to us. Upon verification, we
                will take immediate action, including removal or proper
                attribution, as necessary.
              </li>
            </ul>
          </div>
          <p>
            We deeply value the rights of content creators and strive to
            maintain ethical practices in all our endeavors. Thank you for your
            understanding and support.
          </p>
          <p>
            For any concerns, please contact us at{' '}
            <Link
              href='mailto:sdbhor@gmail.com'
              className='underline underline-offset-4'
            >
              sdbhor@gmail.com
            </Link>{' '}
            or{' '}
            <Link
              href='mailto:vedbhor25@gmail.com'
              className='underline underline-offset-4'
            >
              vedbhor25@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyRightPage;
