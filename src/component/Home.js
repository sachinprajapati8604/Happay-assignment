import React from 'react'
import { FaStar } from 'react-icons/fa';
import data from './Data';
import { useState } from 'react';

export default function Home({ count, setCount, cart, setCart }) {

    const addToCart = () => {
        setCount(count + 1);
        setCart({
            "id": "",
            "name": "",
            "description": "",
            "final_price": "",
            "original_price": "",
            "img_url": ""
        });
    }


    return (
        <div>
            <div className="container">
                <h1 className="text-center">Most Popular</h1>
                <div className="myline"></div>

                <div className="row row-cols-1 row-cols-md-3 g-4 px-2 ">
                    {
                        data.map((e) => {
                            return (
                                <div class="col">
                                    <div class="card h-100">
                                        <img src={e.img_url} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div className="text">
                                                <h5 class="card-title">{e.name}</h5>
                                                <p class="text-right">  <strike className="text-right">{e.original_price}</strike>
                                                    <strong >${e.final_price}</strong> </p>
                                            </div>
                                            <p class="card-text">{e.description}</p>

                                        </div>

                                        <button onClick={addToCart} className="mx-2 btn btn-outline-primary btn-block">Add to cart</button>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
