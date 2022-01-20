import React, { useState } from 'react';

 const items=[{
     title:"anything",
     price:500
 },
{
    title:'snomething',
    price:200
},
{
    title:"anything",
    price:500
},
{
    title:"anything",
    price:500
},
{
    title:"anything",
    price:500
},
{
    title:"anything",
    price:500
},]

const Scroll = () => {
    const [data,setData]=useState(0);
    let total=0;
    return (
        <div>
            <div className='quantity'>{items.map(({title,price})=>{
                total+=price
               return <>
               <div>{title}</div>
               <div className='incdec'>
            <div onClick={()=>{
                 setData(data+1)
            }}>+</div>{data}
            <div onClick={()=>{
                setData(data-1);
            }}>-</div>
            </div>
            <div>₹{price*data}</div>
               </>
            })}
         
            </div>
            <div className='total'>
            <h5>items total:{total*data}</h5>
            </div>
        </div>
    );
};

export default Scroll;