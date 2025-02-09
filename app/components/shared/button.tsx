interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-offset-2 focus:outline-2 focus:outline-blue-600',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:outline-offset-2 focus:outline-2 focus:outline-gray-600',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:outline-offset-2 focus:outline-2 focus:outline-blue-600'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
