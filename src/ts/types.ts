interface Item {
  data: {
    price: {
      item: {
        price: number;
      };
    };

    detail: {
      spuId: number;
      logoUrl: string;
      title: string;
    };

    brandRootInfo: {
      brandItemList: BrandItemList[];
    };

    sizeDto: {
      sizeInfo: {
        sizeTemplate: {
          list: SizeListItem[];
        };
      };
    };
  };
}

interface SizeListItem {
  sizeKey: string;
  sizeValue: string;
}

interface BrandItemList {
  brandName: string;
}

interface Product extends Item {
  quantity: number;
  size: string;
}

interface CartItem extends Item {
  size: string;
}

interface CounterData {
  spuId: number;
  value: number;
}

interface CategoryData {
  id: number;
  title: string;
  status: boolean;
}

export type { Item, Product, CounterData, CartItem, CategoryData };
