export const Amount = ({ amount, onClick, className }: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex my-2 justify-center items-center py-2 px-10- font-bold text-xl border-theme border rounded-lg ${className}`}
    >
      <span>{amount} Rwf</span>
    </button>
  );
};
