import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class Product extends Component {

    constructor() {
        super();
        this.passTheId = this.passTheId.bind(this);
    }

    passTheId() {
        this.props.onVote(this.props.id)
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-md-12'>
                        <div className="main">
                            <div className="image">
                                <img src={this.props.productImageUrl} alt={this.props.title} />
                            </div>
                            <div className='header'>
                                <a onClick={this.passTheId}>
                                    <FontAwesome
                                        name='caret-up'
                                        size='2x'
                                    />
                                </a>
                                {this.props.votes}
                            </div>
                            <div className='description'>
                                <a href={this.props.url}>
                                    {this.props.title}
                                </a>
                                <p>{this.props.description}
                                </p>
                            </div>
                            <div className='extra'>
                                <span>Submitted by:</span>
                                <img
                                    className='avatar'
                                    src={this.props.submitterAvatarUrl}
                                    alt={this.props.title}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;