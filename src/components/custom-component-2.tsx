export function CustomComponent2() {
  return (
    <div className="flex flex-col container gap-7 py-16 md:py-28">
      <h1 className="text-black font-semibold text-2xl md:text-3xl uppercase">
        Beauty Salon In Sharjah
      </h1>
      <div className="flex text-black gap-10 flex-col lg:flex-row mt-6">
        <div className="overflow-hidden">
          <img
            src="/images/pexels-gustavo-fring-3985349-(1).jpg"
            width={3400}
            className="object-cover duration-300 hover:scale-105 h-full"
          />
        </div>
        <div className="flex flex-col gap-16">
          <div className="space-y-4">
            <h1 className="text-xl md:text-2xl uppercase font-medium">Professional Services</h1>
            <p className="text-muted-foreground">
              Indulge in a comprehensive suite of beauty services, featuring expertly crafted
              hairdressing styles, precision manicure and pedicure techniques and artful makeup
              designs.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="font-medium text-xl md:text-2xl uppercase">
              Unique Procedures &amp; Product
            </h1>
            <p className="text-muted-foreground">
              The beauty industry are constantly evolving with the latest technological
              advancements. Our salon actively tracks emerging trends and incorporates only the most
              cutting-edge technologies into our services, ensuring that our clients have access to
              the best and most innovative treatments available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
