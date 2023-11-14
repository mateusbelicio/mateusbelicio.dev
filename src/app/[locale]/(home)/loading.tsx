import { Icons } from '@/components/icons';

function LoadingHomePage() {
  return (
    <div className="container fixed inset-0 -z-10 flex items-center justify-center">
      <span className="animate-spin">
        <Icons.loader size={40} />
      </span>
    </div>
  );
}

export default LoadingHomePage;
