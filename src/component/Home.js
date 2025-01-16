import { useEffect, useState } from "react";
import data from "./Data";

export default function Home({ count, setCount, cart, setCart }) {
    const [btnStatus, setBtnStatus] = useState({}); // State to track button status for each item
    const btnSuccessText = "Added!"
    const addToCart = (item, index) => {
        // update btn text
        setBtnStatus((prevStatus) => ({
            ...prevStatus,
            [index]: btnSuccessText,
        }));

        setTimeout(() => {
            setBtnStatus((prevStatus) => ({
                ...prevStatus,
                [index]: "",
            }));
        }, 2000);
        // update items on cart
        const exitingItemIndex = cart.findIndex((cartitem) => cartitem.name === item.name);
        let updatedCart;
        // Check if the item already exists in the cart and update quantity
        if (exitingItemIndex !== -1) {
            updatedCart = cart.map((cartitem, idx) => {
                if (idx === exitingItemIndex) {
                    return { ...cartitem, qty: cartitem.qty + 1 };
                }
                return cartitem;
            });
        } else {
            updatedCart = [
                ...cart,
                {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    final_price: item.final_price,
                    original_price: item?.original_price,
                    img_url: item.img_url,
                    qty: 1,
                },
            ];
        }

        setCart(updatedCart);
    };

    const updateCartCount = () => {
        return cart?.reduce((total, cartitem) => total + cartitem.qty, 0);
    };

    useEffect(() => {
        console.log(cart);
        setCount(updateCartCount());
    }, [cart]);

    return (
        <div>
            <div className="container">
                <h1 className="text-center">Most Popular</h1>
                <div className="myline"></div>
                <div className="row row-cols-1 row-cols-md-3 g-4 px-2 ">
                    {data.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <div className="card h-100 p-2">
                                    <img src={item.img_url} className="card-img-top" alt={item.name} />
                                    <div className="card-body">
                                        <div className="text">
                                            <h5 className="card-title itemname">{item.name}</h5>
                                            <p className="text-right">
                                                <strike>{item.original_price}</strike>{" "}
                                                <strong>${item.final_price}</strong>
                                            </p>
                                        </div>
                                        <p className="card-text">{item.description}</p>
                                    </div>

                                    <button
                                        onClick={() => {
                                            addToCart(item, index);
                                        }}
                                        disabled={btnStatus[index] === btnSuccessText}
                                        className="mx-2 btn btn-outline-primary btn-block"
                                    >
                                        {btnStatus[index] ? btnStatus[index] : "Add to Cart"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
