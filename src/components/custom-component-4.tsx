export function CustomComponent4() {
  return (
    <div className="flex flex-col container text-black gap-7 py-16 md:py-28">
      <div>
        <h1 className="font-semibold text-2xl md:text-3xl uppercase">Our Services</h1>
      </div>
      <div className="font-light lg:grid-cols-4 grid md:grid-cols-2 w-full mt-6 gap-10">
        <div className="grid grid-cols-2 relative">
          <div className="overflow-hidden w-[260px] shadow">
            <img
              src="/images/pexels-laura-james-6102143.jpg"
              className="w-full object-cover duration-300 hover:scale-105 hover:saturate-100 saturate-0 h-[240px]"
            />
          </div>
          <div className="absolute bottom-0 p-2 bg-white w-40">
            <h1 className="z-10 text-xs tracking-wide text-center rounded-bl-sm">
              BEAUTY PACKAGES
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 relative">
          <div className="w-[260px] overflow-hidden shadow">
            <img
              src="/images/pexels-kpaukshtite-704815.jpg"
              className="w-full object-cover duration-300 hover:saturate-100 hover:scale-105 saturate-0 h-[240px]"
            />
          </div>
          <div className="absolute bottom-0 p-2 bg-white w-40">
            <h1 className="z-10 text-xs tracking-wide text-center">MANICURE &amp; PEDICURE</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 relative">
          <div className="w-[260px] overflow-hidden shadow">
            <img
              src="/images/pexels-pixabay-63320.jpg"
              className="w-full object-cover hover:saturate-100 duration-300 hover:scale-105 saturate-0 h-[240px]"
            />
          </div>
          <div className="absolute bottom-0 p-2 bg-white w-40">
            <h1 className="z-10 text-xs text-center tracking-wide">
              EYELASHES &amp; EYEBROWS MAKEUP
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 relative">
          <div className="w-[260px] overflow-hidden shadow">
            <img
              src="/images/pexels-orlovamaria-4906283-2.jpg"
              className="w-full object-cover hover:scale-105 duration-300 hover:saturate-100 saturate-0 h-[240px]"
            />
          </div>
          <div className="absolute bottom-0 p-2 bg-white w-40">
            <h1 className="z-10 text-xs text-center">HAIR</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 relative">
          <div className="w-[260px] overflow-hidden shadow">
            <img
              src="/images/pexels-gustavo-fring-3985338.jpg"
              className="w-full object-cover duration-300 hover:scale-105 hover:saturate-100 saturate-0 h-[240px]"
            />
          </div>
          <div className="absolute bottom-0 p-2 bg-white w-40">
            <h1 className="z-10 text-xs tracking-wide text-center">
              FACIAL &amp; BODY TREATMENTSS
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 relative">
          <div className="w-[260px] overflow-hidden shadow">
            <img
              src="/images/pexels-cottonbro-5742282.jpg"
              className="w-full object-cover duration-300 hover:scale-105 hover:saturate-100 saturate-0 h-[240px]"
            />
          </div>
          <div className="absolute bottom-0 p-2 bg-white w-40">
            <h1 className="z-10 text-xs text-center tracking-wide">BODY SHAPING</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 relative">
          <div className="w-[260px] overflow-hidden shadow">
            <img
              src="/images/pexels-shvetsa-5069508.jpg"
              className="w-full object-cover duration-300 hover:saturate-100 hover:scale-105 saturate-0 h-[240px]"
            />
          </div>
          <div className="absolute bottom-0 p-2 bg-white w-40">
            <h1 className="z-10 text-xs tracking-wide text-center">HAIR REMOVALS</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 relative">
          <div className="w-[260px] overflow-hidden shadow">
            <img
              src="/images/2936373411919053598459755059778514571623782n.jpg"
              className="w-full object-cover duration-300 hover:saturate-100 hover:scale-105 saturate-0 h-[240px]"
            />
          </div>
          <div className="absolute bottom-0 p-2 bg-white w-40">
            <h1 className="z-10 text-xs tracking-wide text-center">HENNA DESIGN</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
