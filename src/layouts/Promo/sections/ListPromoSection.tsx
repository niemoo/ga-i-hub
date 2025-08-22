import PromoCard from '../components/PromoCard';

interface PromoPageProps {
  id: string;
  language_code: string;
  title: string;
  description: string;
  promo_code: string;
  discount: string;
  start_date: string;
  end_date: string;
}

interface ListPromoSectionProps {
  promos: PromoPageProps[];
}

export default function ListPromoSection({ promos }: ListPromoSectionProps) {
  const gridClass = promos.length > 1 ? 'grid lg:grid-cols-2 gap-6 mt-8' : 'grid grid-flow-row gap-6 mt-8';
  return (
    <section>
      <div className={gridClass}>
        {promos.map((promo, index) => (
          <PromoCard key={index} promo={promo} lang_code={promo.language_code} />
        ))}
      </div>
    </section>
  );
}
