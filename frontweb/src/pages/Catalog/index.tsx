import ProductCard from 'components/ProductCard';
import SearchCard from 'components/SearchCard';

import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <SearchCard />
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
