export default function Button({ texto }) {
  return (
    <button
      className="rounded-[25px] bg-radial from-violet-500 from-40% to-violet-800 p-3 w-[100%] text-white font-bold hover:from-violet-600 fom-40% to hover:violet-1000 cursor-pointer"
      type="submit"
    >
      {texto}
    </button>
  );
}
