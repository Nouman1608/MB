/** Emitted from the same array the visible accordion renders. */
export function faqNode(items: readonly { question: string; answer: string }[]) {
  if (!items.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
