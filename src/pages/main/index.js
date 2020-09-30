import React, { Component } from 'react';
import api from '../../serices/api';
import './styles.css';


export default class Main extends Component{
  state = {
    product: []
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({ product: response.data.docs})

  };

  render(){
    const { product } = this.state;

  return(
    <div className="product-list">
      {product.map(product => (
        <article key={product._id}>
          <strong>{product.title}</strong>
          <p>{product.description}</p>
          <a href="">Acessar</a>
        </article>
      ))}
      <div className="actions"></div>
      <button>Anterior</button>
      <button>Proximo</button>
    </div>
  )
  }
}