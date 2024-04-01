import { Loader } from "lucide-react";

const LoaderIndicator = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader size={50} className="animate-spin" />
    </div>
  );
};

export default LoaderIndicator;
