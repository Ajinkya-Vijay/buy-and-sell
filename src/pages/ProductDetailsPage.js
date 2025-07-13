import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetailsPage() {
  const [product, setProduct] = useState();
  let discountedPrice;
  const params = useParams();

  async function getProductDetails(){
    let furnitureData;
    let kitchenData;
    await axios.get(`https://dummyjson.com/products/${params.id}`)
    .then((res)=>{
      setProduct(res.data)
    }).catch((err)=>console.error(err));
  }

  useEffect(()=>{
    getProductDetails();
  },[])
  return<>
    {product && (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', color: 'black', gap: '2rem' }}>
        {/* Left: Product Image */}
        <div style={{ flex: 0.7 }}>
          <img
            src={product?.images[0]}
            alt={product?.title}
            style={{ width: '600px', height: '600px', borderRadius: '10px' }}
          />
        </div>

        {/* Right: Product Info */}
        <div style={{ flex: 1 }}>
          <h1>{product?.title}</h1>
          <p style={{ color: '#666' }}>by {product?.brand}</p>
          <p>{product?.description}</p>

          <h2 style={{ marginTop: '1rem', color: '#B12704' }}>
            ₹{discountedPrice}{' '}
            <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '1rem' }}>
              ₹{product?.price}
            </span>{' '}
            <span style={{ color: 'green' }}>({product?.discountPercentage}% OFF)</span>
          </h2>

          <p>
            <strong>Availability:</strong> {product?.availabilityStatus}
          </p>
          <p>
            <strong>Stock Left:</strong> {product?.stock}
          </p>

          <div style={{ display: 'flex', marginLeft: '280px', gap: '1rem', marginTop: '1rem' }}>
            <button style={{ padding: '10px 20px', backgroundColor: '#FFA41C', border: 'none', color: 'white' }}>
              Add to Cart
            </button>
            <button style={{ padding: '10px 20px', backgroundColor: '#FB641B', border: 'none', color: 'white' }}>
              Buy Now
            </button>
          </div>

          <div style={{ color: 'black', marginTop: '2rem' }}>
            <h3>Specifications</h3>
            <p><strong>SKU:</strong> {product?.sku}</p>
            <p><strong>Weight:</strong> {product?.weight}g</p>
            <p>
              <strong>Dimensions:</strong> {product?.dimensions?.width} x {product?.dimensions?.height} x {product?.dimensions?.depth} mm
            </p>
            <p><strong>Warranty:</strong> {product?.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product?.shippingInformation}</p>
            <p><strong>Return Policy:</strong> {product?.returnPolicy}</p>
            <p><strong>Minimum Order Quantity:</strong> {product?.minimumOrderQuantity}</p>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h3>Meta Info</h3>
            <p><strong>Barcode:</strong> {product?.meta.barcode}</p>
            <img src={product?.meta.qrCode} alt="QR Code" width="100" />
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div style={{ color: 'black', marginTop: '3rem', display:'inline-block', width : '500px'}}>
        <h2>Customer Reviews</h2>
        {product?.reviews.map((review, index) => (
          <div
            key={index}
            style={{
              borderTop: '1px solid #ccc',
              padding: '1rem 0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}
          >
            <div style={{ minWidth: '200px', fontWeight: 'bold' }}>
              {review.reviewerName} — ⭐ {review.rating}
            </div>
            <div style={{ flex: 1 }}>{review.comment}</div>
          </div>
        ))}

      </div>
    </div>)}
  </> 
}
