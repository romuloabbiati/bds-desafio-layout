import './styles.css';

import ProductImg from 'assets/images/product.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h5>Audi Supra TT</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <div className='button-container'>
            <button className='btn btn-icon'>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
