export function faqFiltered (faq, search) {
  let values = [];
  values = faq.questions.filter(question => question
    .question.toLowerCase().includes(search.toLowerCase()));
  return values;
}
