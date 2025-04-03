export default function Btn({ children, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-black w-40 text-white px-4 my-4 py-4 rounded-full"
      >
        {children}
      </button>
    </>
  );
}
