interface FAQItem {
  id: number;
  title: string;
  desc: string;
  open?: boolean;
}

interface FAQCardProps {
  item: FAQItem;
  index: number;
  toggleFAQ: (id: number) => void;
}

export default function FAQCard({ item, index, toggleFAQ }: FAQCardProps) {
  return (
    <div className="p-8 bg-primary-soft-blue-100 rounded-[10px] mt-3 hover:cursor-pointer" onClick={() => toggleFAQ(item.id)}>
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-semibold text-[16px] md:text-[20px] leading-[1.6] color-primary-blue-100">
          {index + 1}. {item.title}
        </h1>
        <span className="material-icons">{item.open ? 'expand_less' : 'expand_more'}</span>
      </div>

      {item.open && (
        <div>
          <p className="font-normal text-[14px] md:text-[18px] leading-[1.6] color-[#21243A]" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
        </div>
      )}
    </div>
  );
}
