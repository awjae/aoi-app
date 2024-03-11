import { Accordion, IAccordionItems } from '@/ads/accordion';
import { Column } from '@/ads/column';

export default function Page() {
  const accordionItems: IAccordionItems = [
    { content: 'hele', title: 'test' },
    { content: 'hele5', title: 'test2' },
    { content: 'hele5', title: 'test3' },
  ];

  return (
    <Column>
      <Accordion items={accordionItems} />
    </Column>
  );
}
