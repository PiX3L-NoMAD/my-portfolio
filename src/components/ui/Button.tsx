interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all ${className}`}
      >
        {children}
      </button>
    );
  };