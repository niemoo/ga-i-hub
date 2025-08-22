import { useState } from 'react';
import { initFaqsID, initFaqsEN } from '../../../data/Faqs';
import { FAQMenuID, FAQMenuEN } from '../../../data/Menu';
import FAQList from '../components/FAQList';

interface FAQItem {
  id: number;
  title: string;
  desc: string;
  open?: boolean;
}

export default function FAQSection({ lang_code }: { lang_code: string }) {
  const [activeTab, setActiveTab] = useState(lang_code === 'id' ? 'Semua' : 'All');
  const [faqs, setFaqs] = useState<{ [key: string]: FAQItem[] }>(lang_code === 'id' ? initFaqsID : initFaqsEN);

  // Change data format for "All" tab
  const allFaqs = Object.values(faqs).flat();

  const toggleFAQ = (id: number) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = { ...prevFaqs };

      Object.keys(updatedFaqs).forEach((cat) => {
        updatedFaqs[cat] = updatedFaqs[cat].map((item) => (item.id === id ? { ...item, open: !item.open } : item));
      });

      return updatedFaqs;
    });
  };

  return (
    <section className="mt-[120px] w-11/12 md:w-8/12 mx-auto">
      {/* Title */}
      <div>
        <h3 className="font-slab font-semibold text-[24px] md:text-[40px] leading-[1.2] text-center color-neutral-black-100">{lang_code === 'id' ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions'}</h3>
      </div>

      {/* Navigation Menu */}
      <div className="my-[20px]">
        <div className="flex flex-row gap-4 justify-center cursor-pointer">
          {(lang_code === 'id' ? FAQMenuID : FAQMenuEN).map((item, index) => (
            <div key={index} className="border border-b rounded-[6px] text-center" onClick={() => setActiveTab(item)}>
              <div className={`px-4 py-[3px] rounded-[6px] ${activeTab === item ? 'bg-primary-gradient-100 text-white' : ''}`}>
                <h1>{item}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Lists */}
      <FAQList activeTab={activeTab} allFaqs={allFaqs} faqs={faqs} toggleFAQ={toggleFAQ} />
    </section>
  );
}
