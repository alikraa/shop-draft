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

export type { Item, Product, CounterData, CartItem };
