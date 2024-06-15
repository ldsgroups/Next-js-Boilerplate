export interface Category {
  id: string;
  name: string;
}

// id: string;
//     text: string;
//     isActive: boolean;
//     commandedQuantity?: number | undefined;
//     currency?: string | undefined;
//     createdAt?: string | undefined;
//     viewsCount?: number | undefined;
//     link?: string | undefined;

export interface Article {
  id: string;
  title: string;
  isActive: boolean;
  imageUrl?: string;
  order?: number;
  commandedQuantity?: number;
  currency?: string;
  createdAt?: string;
  viewsCount?: number;
  link?: string;
}

export const mockArticleImage =
  'https://www.foodiesfeed.com/wp-content/uploads/2023/11/red-onions-white-background.jpg';

export const categories: Category[] = [
  {
    id: 'ENTREE',
    name: 'Entrées',
  },
  {
    id: 'PLAT_PRINCIPAL',
    name: 'Plats Principaux',
  },
  {
    id: 'DESSERT',
    name: 'Desserts',
  },
  {
    id: 'BOISSON',
    name: 'Boissons',
  },
  {
    id: 'CAFE_THE',
    name: 'Cafés et Thés',
  },
  {
    id: 'MENU_ENFANT',
    name: 'Menus Enfants',
  },
  {
    id: 'FORMULE_MIDI',
    name: 'Formules Midi',
  },
  {
    id: 'PLAT_VEGETARIEN',
    name: 'Plats Végétariens',
  },
  {
    id: 'SUGGESTION_CHEF',
    name: 'Suggestions du Chef',
  },
  {
    id: 'ACCOMPAGNEMENT',
    name: 'Accompagnements',
  },
];

export const draftArticles: Article[] = [
  {
    id: 'A001',
    title: 'Salade César',
    isActive: true,
    order: 1,
    imageUrl: mockArticleImage,
    createdAt: '2024-06-14T10:30:00Z',
  },
  {
    id: 'A002',
    title: "Soupe à l'oignon gratinée",
    isActive: false,
    order: 2,
    imageUrl: mockArticleImage,
    createdAt: '2024-06-13T18:45:00Z',
  },
  {
    id: 'A003',
    title: 'Steak-frites',
    isActive: false,
    order: 3,
    imageUrl: mockArticleImage,
    createdAt: '2024-06-12T12:15:00Z',
  },
  {
    id: 'A004',
    title: 'Poulet rôti',
    isActive: true,
    order: 4,
    imageUrl: mockArticleImage,
    createdAt: '2024-06-11T09:00:00Z',
  },
  {
    id: 'A005',
    title: 'Pâtes Carbonara',
    isActive: true,
    order: 5,
    imageUrl: mockArticleImage,
    createdAt: '2024-06-10T15:20:00Z',
  },
  {
    id: 'A006',
    title: 'Filet de saumon grillé, sauce hollandaise',
    isActive: true,
    order: 6,
    imageUrl: mockArticleImage,
    createdAt: '2024-06-14T11:45:00Z',
  },
  {
    id: 'A007',
    title: 'Mousse au chocolat',
    isActive: true,
    order: 7,
    imageUrl: mockArticleImage,
    createdAt: '2024-06-14T11:50:00Z',
  },
  {
    id: 'A008',
    title: 'Tarte aux fraises',
    isActive: true,
    order: 8,
    createdAt: '2024-06-14T11:55:00Z',
  },
  {
    id: 'A009',
    title: 'Mojito',
    isActive: true,
    order: 9,
    createdAt: '2024-06-14T12:00:00Z',
  },
  {
    id: 'A010',
    title: 'Cappuccino',
    isActive: true,
    order: 10,
    createdAt: '2024-06-14T12:05:00Z',
  },
  {
    id: 'A011',
    title: 'Menu enfant : nuggets de poulet et frites',
    isActive: true,
    order: 11,
    createdAt: '2024-06-13T14:30:00Z',
  },
  {
    id: 'A012',
    title: 'Formule midi : entrée + plat',
    isActive: true,
    order: 12,
    createdAt: '2024-06-13T14:35:00Z',
  },
  {
    id: 'A013',
    title: 'Curry de légumes (végétarien)',
    isActive: true,
    order: 13,
    createdAt: '2024-06-13T14:40:00Z',
  },
  {
    id: 'A014',
    title: 'Suggestion du chef : magret de canard, sauce aux cerises',
    isActive: true,
    order: 14,
    createdAt: '2024-06-13T14:45:00Z',
  },
  {
    id: 'A015',
    title: 'Frites',
    isActive: true,
    order: 15,
    createdAt: '2024-06-13T14:50:00Z',
  },
  {
    id: 'A016',
    title: 'Pizza Margherita',
    isActive: true,
    order: 16,
    createdAt: '2024-06-14T15:00:00Z',
  },
  {
    id: 'A017',
    title: 'Pâtes bolognaise',
    isActive: true,
    order: 17,
    createdAt: '2024-06-14T15:05:00Z',
  },
  {
    id: 'A018',
    title: 'Sushi assortiment',
    isActive: true,
    order: 18,
    createdAt: '2024-06-14T15:10:00Z',
  },
  {
    id: 'A019',
    title: 'Pad thaï aux crevettes',
    isActive: true,
    order: 19,
    createdAt: '2024-06-14T15:15:00Z',
  },
  {
    id: 'A020',
    title: 'Poulet tikka masala',
    isActive: true,
    order: 20,
    createdAt: '2024-06-14T15:20:00Z',
  },
  {
    id: 'A021',
    title: 'Tacos au bœuf',
    isActive: true,
    order: 21,
    createdAt: '2024-06-14T15:25:00Z',
  },
  {
    id: 'A022',
    title: 'Houmous et pain pita',
    isActive: true,
    order: 22,
    createdAt: '2024-06-14T15:30:00Z',
  },
  {
    id: 'A023',
    title: 'Crème brûlée',
    isActive: true,
    order: 23,
    createdAt: '2024-06-14T15:35:00Z',
  },
  {
    id: 'A024',
    title: 'Tiramisu',
    isActive: true,
    order: 24,
    createdAt: '2024-06-14T15:40:00Z',
  },
  {
    id: 'A025',
    title: 'Vin rouge (Bordeaux)',
    isActive: true,
    order: 25,
    createdAt: '2024-06-14T15:45:00Z',
  },
  {
    id: 'A026',
    title: 'Bière pression locale',
    isActive: true,
    order: 26,
    createdAt: '2024-06-14T15:50:00Z',
  },
  {
    id: 'A027',
    title: 'Coca-Cola',
    isActive: true,
    order: 27,
    createdAt: '2024-06-14T15:55:00Z',
  },
  {
    id: 'A028',
    title: 'Thé glacé maison',
    isActive: true,
    order: 28,
    link: 'www.google.com',
    createdAt: '2024-06-14T16:00:00Z',
  },
  {
    id: 'A029',
    title: 'Menu enfant : hamburger et frites',
    isActive: true,
    order: 29,
    link: 'www.google.com',
    commandedQuantity: 2,
    createdAt: '2024-06-13T16:05:00Z',
  },
  {
    id: 'A030',
    title: 'Suggestion du chef : risotto aux truffes',
    isActive: true,
    order: 30,
    link: 'www.google.com',
    commandedQuantity: 2,
    currency: 'EUR',
    createdAt: '2024-06-13T16:10:00Z',
  },
];
