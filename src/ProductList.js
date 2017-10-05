import React, {Component} from 'react';
import Product from "./Product";

class ProductList extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({ products: ProductList.getProducts() })
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts,
        });
    };

    static generateVoteCount() {
        return Math.floor((Math.random() * 50) + 15);
    }

    static getProducts(){
        return [
            {
                id: 1,
                title: 'Yellow Pail',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: ProductList.generateVoteCount(),
                submitterAvatarUrl: 'src/images/avatars/daniel.jpg',
                productImageUrl: 'src/images/products/image-aqua.png',
            },
            {
                id: 2,
                title: 'Supermajority: The Fantasy Congress League',
                description: 'Earn points when your favorite politicians pass legislation.',
                url: '#',
                votes: ProductList.generateVoteCount(),
                submitterAvatarUrl: 'src/images/avatars/kristy.png',
                productImageUrl: 'src/images/products/image-rose.png',
            },
            {
                id: 3,
                title: 'Tinfoild: Tailored tinfoil hats',
                description: 'We already have your measurements and shipping address.',
                url: '#',
                votes: ProductList.generateVoteCount(),
                submitterAvatarUrl: 'src/images/avatars/veronika.jpg',
                productImageUrl: 'src/images/products/image-steel.png',
            },
            {
                id: 4,
                title: 'Haught or Naught',
                description: 'High-minded or absent-minded? You decide.',
                url: '#',
                votes: ProductList.generateVoteCount(),
                submitterAvatarUrl: 'src/images/avatars/molly.png',
                productImageUrl: 'src/images/products/image-yellow.png',
            },
        ];
    }



    render() {

        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ));

        const productComponents = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));
        return (
            <div className="container">
                <h1>Popular products</h1>
                <hr />
                {productComponents}
                <hr />
            </div>
        );
    }
}

export default ProductList;