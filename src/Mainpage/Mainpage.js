// import images
import image1 from "../images/gloves.jpg";
import image2 from '../images/camera.jpg';
import image3 from '../images/t-shirts.jpg';
import image4 from '../images/pants.jpg';
import image5 from '../images/dress.jpg';
import image6 from '../images/shoes.jpg';
import image7 from '../images/bag.jpg';
import image8 from '../images/hat.jpg';
import image9 from '../images/sunglasses.jpg';
import image10 from '../images/lamp.jpg';
import image11 from '../images/towel.jpg';
import image12 from '../images/chairs.jpg';
import image13 from '../images/cushion.jpg';
import image14 from '../images/coffeeCups.jpg';
import image15 from '../images/curtain.jpg';
import React, { useState } from "react";
import style from './Mainpage.module.css';
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import logo from '../images/MSPLogo.svg';
const Mainpage = () => {
    // make array of images
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]
    // array of objects contain data
    const [products, setProducts] = useState([
        { image: image1, name: "Gloves", oldPrice: 50, offer: 10 },
        { image: image2, name: "Camera", oldPrice: 650, offer: 40 },
        { image: image3, name: "T-Shirts", oldPrice: 1000, offer: 30 },
        { image: image4, name: "Pants", oldPrice: 850, offer: 18 },
        { image: image5, name: "Dress", oldPrice: 680, offer: 44 },
        { image: image6, name: "Shoes", oldPrice: 600, offer: 13 },
        { image: image7, name: "Bag", oldPrice: 300, offer: 5 },
        { image: image8, name: "Hat", oldPrice: 70, offer: 8 },
        { image: image9, name: "Sunglasses", oldPrice: 920, offer: 14 },
        { image: image10, name: "Lamp", oldPrice: 850, offer: 46 },
        { image: image11, name: "Towel", oldPrice: 400, offer: 30 },
        { image: image12, name: "Chairs", oldPrice: 1000, offer: 33 },
        { image: image13, name: "Cushion", oldPrice: 550, offer: 26 },
        { image: image14, name: "CoffeeCups", oldPrice: 140, offer: 28 },
        { image: image15, name: "Curtain", oldPrice: 390, offer: 42 },
    ]);
    const [carts, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const addtoCart = (e, idx) => {
        //update cart
        setCart([...carts, products[idx]])
        //update total price
        const { oldPrice, offer } = products[idx];
        setTotalPrice(totalPrice+(oldPrice * (offer / 100).toFixed(2)))
        //update product
        setProducts(products.filter((product, idex) => idex !== idx))
    }
    const RemoveCart = (e, idx) => {
        //update products
        setProducts([carts[idx],...products])
        //update total price
        const { oldPrice, offer } = carts[idx];
        setTotalPrice(totalPrice-(oldPrice * (offer / 100)).toFixed(2))
        //update cart
        setCart(carts.filter((product, idex) => idex !== idx))
    }
    return (
        <>
            <div className={style.mainhome}>
                <header>
                    <div className={logo}>
                        <img src={logo} />
                    </div>
                    <h1> MSP E-COMMERCE</h1>
                </header>
                <section>
                    <div className={style.productsheader}>
                        <p>{products.length}</p>
                        <h1>TOP HOME PICKS</h1>
                    </div>
                    <div><Products list={products} addtoCart={addtoCart} /></div>

                </section>
                <section>
                    <div>
                        <Cart list={carts} RemoveCart ={RemoveCart }/>
                    </div>
                    <div className={style.cartfooter}>
                        <h1>total price</h1>
                        <span>
                            <sub>EGP</sub>
                            <p>{totalPrice}</p>
                        </span>

                    </div>
                </section>
            </div>

        </>
    );
}
export default Mainpage;
