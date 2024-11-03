import { Check } from "lucide-react";

export function CustomComponent3() {
  return (
    <div className="bg-black py-28">
      <div className="grid container lg:grid-cols-2 gap-10">
        <div className="flex gap-6 max-w-md">
          <div>
            <Check size={16} className="size-7" />
          </div>
          <div className="space-y-4">
            <h1 className="tracking-wide font-semibold">ADVANCED TECHNOLOGIES</h1>
            <p className="text-muted-foreground">
              We provide the latest developments in products and services, tailored to meet your
              beauty and aesthetic requirements.
            </p>
          </div>
        </div>
        <div className="max-w-md flex gap-6">
          <div>
            <Check size={16} className="size-7" />
          </div>
          <div className="space-y-4">
            <h1 className="tracking-wide font-semibold">HIGH-QUALITY TREATMENTS</h1>
            <p className="text-muted-foreground">
              Each individual are unique with different physical characteristics, our team will
              select the best course of action to achieve your desired results.
            </p>
          </div>
        </div>
        <div className="max-w-md flex gap-6">
          <div>
            <Check size={16} className="size-7" />
          </div>
          <div className="space-y-4">
            <h1 className="tracking-wide font-semibold">DIVERSE GROUP OF SPECIALISTS</h1>
            <p className="text-muted-foreground">
              Our team of expert dermatologists and skincare specialists offers personalized
              treatment for a wide range of skin concerns, from acne and hyperpigmentation to signs
              of aging and sensitive skin.
            </p>
          </div>
        </div>
        <div className="flex gap-6 max-w-md">
          <div>
            <Check size={12} className="size-7" />
          </div>
          <div className="space-y-4">
            <h1 className="tracking-wide font-semibold space-y-4 uppercase">
              Performed by professionals
            </h1>
            <p className="text-muted-foreground">
              Our team are highly trained and certified specialists that delivers top-notch results
              and exceptional service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
