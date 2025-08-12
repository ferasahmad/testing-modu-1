import React from 'react';

interface HelloWorldProps {
  message?: string;
  className?: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ 
  message = "Hello World!", 
  className = "" 
}) => {
  return (
    <div className={`text-center p-4 ${className}`}>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        {message}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        This is a simple Hello World component built with React and TypeScript.
      </p>
    </div>
  );
};

export default HelloWorld;