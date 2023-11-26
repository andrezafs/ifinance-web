const categories = 'categories';
const creditCards = 'credit-cards';
const planning = 'planning';
const reports = 'reports';
const home = '/';
const creditCardId = ':creditCardId';
const dashboard = 'dashboard';
const expenses = 'expenses';
const login = 'login';
const auth = 'auth';

export const routes = {
  goToCategories: () => `/${categories}`,
  goToCreditCards: () => `/${creditCards}`,
  goToCreditCardDetails: (id: string) => `/${creditCards}/${id}`,
  goToPlanning: () => `/${planning}`,
  goToReports: () => `/${reports}`,
  goToHome: () => home,
  goToDashboard: () => `/${[dashboard]}`,
  goToExpenses: () => `/${expenses}`,
  goToLogin: () => `/${login}`,
  goToAuth: () => `/${auth}`,
  categories,
  creditCards,
  planning,
  reports,
  home,
  creditCardId,
  dashboard,
  expenses,
  login,
  auth,
};
