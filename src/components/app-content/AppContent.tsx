import MainCategoryList from '../main-category-list/MainCategoryList';
import ProductList from '../product-list/ProductList';
import WhyDidYouChooseUs from '../why-did-you-choose-us/WhyDidYouChooseUs';

function AppContent() {
  return (
    <>
      <MainCategoryList />
      <WhyDidYouChooseUs />
      <ProductList />
    </>
  );
}

export default AppContent;
