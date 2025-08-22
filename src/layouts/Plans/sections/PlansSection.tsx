import PlanList from '../../../components/PlanLists';

export default function PlansSection({ lang_code }: { lang_code: string }) {
  return (
    <section className="pt-[68px] relative">
      <div className="absolute top-0 left-0 bg-primary-soft-blue-100 w-full h-[618px] z-[-1]"></div>

      <div>
        <h3 className="font-medium text-[20px] md:text-[40px] leading-[120%] text-center color-neutral-black-100" style={{ fontFamily: 'Roboto Slab' }}>
          {lang_code === 'id' ? 'Pilihlah paket yang paling cocok untuk Anda' : 'Choose the plan that works best for you'}
        </h3>
      </div>

      <div>
        <p className="font-normal text-base leading-[160%] w-full md:w-8/12 mx-auto text-center color-neutral-black-60 mt-2">
          {lang_code === 'id'
            ? 'Di iHub, kami menawarkan paket keanggotaan yang fleksibel sesuai dengan kebutuhan dan budget, baik Anda sebagai seorang freelancer, entrepreneur, atau remote working, kami memiliki berbagai pilihan paket yang cocok untuk Anda.'
            : "At our co-working space, we offer flexible membership plans to suit your needs and budget. Whether you're a freelancer, entrepreneur, or remote worker, we have a plan that will work for you."}
        </p>
      </div>

      <PlanList lang_code={lang_code} />
    </section>
  );
}
