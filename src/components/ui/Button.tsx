const Button = ({ children, full }: { children: string; full?: string }) => {
  return (
    <div
      className={`bg-violet-900 px-10 py-3 font-medium text-center rounded-xl hover:bg-violet-600 ${
        full && "w-full"
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
