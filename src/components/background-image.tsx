import Image from "next/image";

export function BackgroundImage() {
  return (
    <div className="relative h-[calc(100vh-5rem)] w-full -z-10">
      <Image
        src="/images/expansion20240923022650154.JPEG"
        alt="Salon Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0">
        {" "}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </div>
  );
}
