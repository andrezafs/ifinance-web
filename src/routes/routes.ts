import { generatePath } from 'react-router-dom';

const categories = 'category';
const creditCards = 'credit-card';
const planning = 'planning';
const reports = 'report';
const home = '/';
const creditCardId = ':creditCardId';
const dashboard = 'dashboard';
const expenses = 'expense';
const login = 'login';
const auth = 'auth';
const create = 'create';

export const routes = {
  goToCategories: () => {
    return generatePath(`/${categories}`);
  },
  goToCreditCards: () => {
    return generatePath(`/${creditCards}`);
  },
  goToCreditCardDetails: (creditCardId: string) => {
    return generatePath(`/${creditCards}/${creditCardId}`, { creditCardId });
  },
  goToPlanning: () => {
    return generatePath(`/${planning}`);
  },
  goToReports: () => {
    return generatePath(`/${reports}`);
  },
  goToHome: () => {
    return generatePath(home);
  },
  goToDashboard: () => {
    return generatePath(`/${dashboard}`);
  },
  goToExpenses: () => {
    return generatePath(`/${expenses}`);
  },
  goToLogin: () => {
    return generatePath(`/${auth}/${login}`);
  },
  goToCreateAccount: () => {
    return generatePath(`/${auth}/${create}`);
  },
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
  create,
} as const;
