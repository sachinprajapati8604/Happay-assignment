import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import data from "./Data";

export default function Cart(props) {
    const { cartItems, setCart, count, setCount } = props;
    const deliveryFee = 0;
    const tax = 0;
    const [finalPrice, setFinalPrice] = useState(deliveryFee + tax);
    const [saving, setSaving] = useState(0);

    const getFinalPrice = () => {
        return cartItems?.reduce((total, cartitem) => { return total + cartitem.final_price * cartitem.qty }, 0)
    }

    const getTotalSaving = () => {
        return cartItems?.reduce((total, cartItem) => {
            // Only calculate saving if original_price exists
            if (cartItem.original_price) {
                return total + (cartItem.original_price - cartItem.final_price) * cartItem.qty;
            }
            return total;
        }, 0);
    };


    useEffect(() => {
        console.log(cartItems);
        if (cartItems.length > 0) {
            const finalAmt = deliveryFee + tax + getFinalPrice();
            setFinalPrice(finalAmt);
            setSaving(getTotalSaving());
        }
    }, [cartItems]);

    const handleIncrement = (item, index) => {
        const updatedCart = [...cartItems];
        updatedCart[index].qty += 1;
        setCart(updatedCart);
        setCount(updateCartCount());
    }

    const handleDecrement = (item, index) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].qty > 0) {
            updatedCart[index].qty -= 1;
            setCart(updatedCart);
            setCount(updateCartCount());
        } else {
            console.log("cart value can not be negative");
        }
    }


    const updateCartCount = () => {
        return cartItems?.reduce((total, cartitem) => { return total + cartitem.qty }, 0)
    }

    const handlePlaceOrder = () => {
        console.table(cartItems);
        alert(`Placing order for Amount:$ ${finalPrice} \n ${JSON.stringify(cartItems, " ", 2)}`)
    }

    return (
        <div>
            <div className="container my-4">
                <Link to="/" className="backToHome">
                    <FaArrowLeft /> Back to Home
                </Link>
                <h2 className="my-3">Order Summary {count} Items</h2>
                <div className="row gx-5 my-4">
                    <div className="col">
                        <div className="p-3 border bg-light table-responsive">
                            <table className="table align-middle mytable">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-md-3">
                                            S No.
                                        </th>
                                        <th scope="col" className="col-md-3">
                                            ITEMS
                                        </th>
                                        <th scope="col" className="col-md-3">
                                            QTY
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{item.id}</th>
                                                <td className="itemname">{item.name}</td>
                                                <td className="d-flex">
                                                    <button onClick={() => handleDecrement(item, index)} className="btn btn-sm btn-secondary mx-2">
                                                        <FaMinus />
                                                    </button>{" "}
                                                    <input
                                                        type="number"
                                                        className="form-control "
                                                        value={item?.qty}
                                                        min="1"
                                                        max="100"
                                                        readOnly
                                                    />{" "}
                                                    <button onClick={() => handleIncrement(item, index)} className="btn btn-sm btn-secondary mx-2">
                                                        <FaPlus />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Link to="/" className="nav-link">
                                {" "}
                                <FaPlus />
                                Add more items
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border price-box">
                            <h3>Price Details</h3>
                            <hr />

                            <div className="tax">
                                <p>Total Saving : ${saving}  </p>
                                <p>Delivery Fee : ${deliveryFee} </p>
                                <p>Tax and Charges : ${tax} </p>
                            </div>
                            <hr />
                            <div className="finalpay">
                                <h5> To Pay : <strong>${finalPrice}</strong> </h5>
                            </div>

                            <button className="mx-2 btn btn-primary btn-block w-100 my-4" onClick={handlePlaceOrder}>
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
