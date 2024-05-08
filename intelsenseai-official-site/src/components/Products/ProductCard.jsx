import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ProductCard = ({ productInfo, idx }) => {
    const { subtitle, logo, link, hashLink } = productInfo || {};

    return (
        <>
            <div className="col">
                <div className="card h-100 justify-content-center align-items-center border-0">
                    <div className='p-5 product-card-img'>
                        <img src={logo} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body px-5 text-center">
                        <h5 className="card-title">{subtitle}</h5>
                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                    <div className="card-footer bg-white border-0">
                        {
                            link ? <Link
                                to={link}
                                target="_blank"
                            >
                                <button className="button white px-3 py-2 mb-5">
                                    Try Now
                                </button>
                            </Link>
                                :
                                <HashLink
                                    to={hashLink}
                                >
                                    <button className="button white px-3 py-2 mb-5">
                                        Try Now
                                    </button>
                                </HashLink>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard