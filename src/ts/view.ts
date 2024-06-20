import { CategoryData, Item } from './types';
import database from '../database.json';

const arrayOfProducts: Item[] = [];

const newSet: Set<string> = new Set();
const brandsFromDatabase = database.map(
  (item) => item.data.brandRootInfo.brandItemList[0].brandName
);

brandsFromDatabase.forEach((brand) => newSet.add(brand));
const brands = Array.from(newSet);

const categoryList: CategoryData[] = [
  { id: 1, title: 'Обувь', status: true },
  { id: 2, title: 'Одежда', status: false },
  { id: 3, title: 'Рюкзаки', status: false },
  { id: 4, title: 'Часы', status: false },
  { id: 5, title: 'О нас', status: false },
];

const aboutUsId = categoryList[4].id;

export { arrayOfProducts, brands, categoryList, aboutUsId };
