const categories = 'categories';
const creditCards = 'credit-cards';
const planning = 'planning';
const reports = 'reports';
const home = '/';
const creditCardId = ':creditCardId';

export const routes = {
  goToCategories: () => `/${categories}`,
  goToCreditCards: () => `/${creditCards}`,
  goToCreditCardDetails: (id: string) => `/${creditCards}/${id}`,
  goToPlanning: () => `/${planning}`,
  goToReports: () => `/${reports}`,
  goToHome: () => `/${home}`,
  categories,
  creditCards,
  planning,
  reports,
  home,
  creditCardId,
};
