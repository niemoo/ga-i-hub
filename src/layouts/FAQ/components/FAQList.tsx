import FAQCard from './FAQCard';

interface FAQItem {
  id: number;
  title: string;
  desc: string;
  open?: boolean;
}

interface FAQListProps {
  activeTab: string;
  allFaqs: FAQItem[];
  faqs: { [key: string]: FAQItem[] };
  toggleFAQ: (id: number) => void;
}

export default function FAQList({ activeTab, allFaqs, faqs, toggleFAQ }: FAQListProps) {
  const list = activeTab === 'All' || activeTab === 'Semua' ? allFaqs : faqs[activeTab] || [];

  return (
    <div className="flex flex-col mt-10">
      {list.map((item, index) => (
        <FAQCard key={index} item={item} index={index} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
}
