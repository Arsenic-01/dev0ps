import { Button } from '@nextui-org/button';

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      color='primary'
      type='submit'
      radius='sm'
      isLoading={isLoading}
      className={`bg-green-500 mt-4 text-white ' w-full`}
    >
      {isLoading ? 'Loading...' : children}
    </Button>
  );
};

export default SubmitButton;
