import React, { useState } from "react";
import style from "./Products.module.css"
import Cart from "../Cart/Cart";

    const Products=({list,addtoCart})=>{
    return (
        <>
            <div className={style.products}>
          {
            list.map(({image,name,oldPrice,offer},idx)=>(
                        <div key={idx}>
                            <div className={style.image} style={{ backgroundImage: `url(${image})` }}>

                            </div>
                            <div className={style.productinfo}>
                                <h1>{name}</h1>
                           <span>
                                    <sub>EGP</sub>
                                    <p>{(oldPrice*(offer/100)).toFixed(2)}</p>
                                </span>
                                <span>
                                    <del>{oldPrice }</del>
                                    <p> {offer}% off</p>
                                </span>
                                <button onClick={(e)=>addtoCart(e,idx)}>Add to Cart</button>
                            </div>
                        </div>
            ))}
            </div>


        </>
    );
};
export default Products;