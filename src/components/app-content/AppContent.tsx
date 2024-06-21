// import MainCategoryList from '../main-category-list/MainCategoryList';
import MainContent from '../main-content/MainContent';
import WhyDidYouChooseUs from '../why-did-you-choose-us/WhyDidYouChooseUs';

function AppContent() {
  return (
    <div className="container">
      {/* <MainCategoryList /> */}
      <MainContent />
      <WhyDidYouChooseUs />
    </div>
  );
}

export default AppContent;
