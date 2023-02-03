const assert = require('assert');
/* Mesma função que deveria ser chamada do ../../../../website/client/src/components/static/utils/faqFilter.js,
 porem por um erro com versão do node que o habitica usa não é possivel chamar no teste expecificamente,
 porem na implementação funciona normalmente */

function faqFiltered (faq, search) {
  let values = [];
  values = faq.filter(question => question
    .question.toLowerCase().includes(search.toLowerCase()));
  return values;
}

describe('faqFiltered', function () {
  it('should filter FAQ questions based on search string', function () {
    const faq = [
      { question: 'How do I create an account?', heading: 'create-account', web: ''},
      { question: 'How do I log into my account?', heading: 'login', web: '' },
      { question: 'How do I change my password?', heading: 'change-password', web: '' },
    ];
    const search = 'How do I create an account?';
    const result = faqFiltered(faq, search);

    assert.deepEqual(result, [{ question: 'How do I create an account?', heading: 'create-account', web: ''}]);
  });

  it('should filter FAQ based on search string regardless of lowercase or uppercase letters', function () {
    const faq = [
      { question: 'How do I create an account?', heading: 'create-account', web: ''},
      { question: 'How do I log into my account?', heading: 'login', web: '' },
      { question: 'How do I change my password?', heading: 'change-password', web: '' },
    ];
    const search = 'hoW do I Create An AccOunt?';
    const result = faqFiltered(faq, search);

    assert.deepEqual(result, [{ question: 'How do I create an account?', heading: 'create-account', web: ''}]);

  });
});
