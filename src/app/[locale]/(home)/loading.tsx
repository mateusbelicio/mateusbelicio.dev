import { Icons } from '@/components/icons';

function LoadingHomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="animate-spin">
        <Icons.loader size={40} />
      </span>
    </div>
  );
}

export default LoadingHomePage;
