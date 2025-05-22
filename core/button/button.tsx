import CircularProgress from '@mui/material/CircularProgress';

type ButtonProps = {
  onClick?: () => void;
  text?: string;
  className?: string;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button";
};


const Button: React.FC<ButtonProps> = ({
  onClick,
  text = '',
  className = '',
  isLoading = false,
  type,
}) => {
  return (
    <button
      className={`px-6 py-2 bg-white w-full gap-4 rounded-full 
        cursor-pointer font-medium text-black ${className} 
        flex items-center justify-center`}
      onClick={onClick}
      disabled={isLoading}
      type={type}
    >
      {isLoading ? <CircularProgress size="20px" /> : text}
    </button>
  );
};

export default Button;
