const Nav = () => {
  return (
    <div className="navbar px-10 py-4">
      <div className="flex-1">
        <div className="w-[45px]">
          <img
            alt="User"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            className="rounded-full ring-2"
          />
        </div>
        <div className="flex flex-col mx-2  items-start">
          <h4 className="font-semibold text-base ">Shajim Ahmed</h4>
          <p className="text-xs text-zinc-500 font-semibold">
            01000000000 - General Client A/C
          </p>
        </div>
      </div>

      {/* If want to add some contents */}



      <div className="w-12">
        <img alt="User" src="/Logo(1).png" />
      </div>
    </div>
  );
};

export default Nav;
