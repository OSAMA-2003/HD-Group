

function Button({ text }: { text: string }) {
  return (
    <button className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-white text-[#0a1f44] font-semibold hover:bg-yellow-400 hover:border-yellow-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md  ">
      {text}
    </button>
  );
}

export default Button;

