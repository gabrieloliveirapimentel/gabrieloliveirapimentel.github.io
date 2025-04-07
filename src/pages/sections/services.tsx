import { ServiceCard } from "../../components/service-card";
import { services } from "../../data/data";

export function Services() {
  return (
    <section className="bg-[#0D0E11] py-20 space-y-4 sm:px-12 max-sm:px-6 ">
      <div className="max-w-[1168px] mx-auto">
        <div className="text-center mb-12 ">
          <span className="text-rose-500 mb-2 font-['Inconsolata'] text-xl">
            Meus serviços
          </span>
          <h2 className="text-2xl md:text-3xl">
            Como posso ajudar o seu negócio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
