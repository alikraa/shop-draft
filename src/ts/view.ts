import { Item } from './types';
import database from '../database.json';

const arrayOfProducts: Item[] = [];

const newSet: Set<string> = new Set();
const brandsFromDatabase = database.map(
  (item) => item.data.brandRootInfo.brandItemList[0].brandName
);

brandsFromDatabase.forEach((brand) => newSet.add(brand));
const brands = Array.from(newSet);

export { arrayOfProducts, brands };
