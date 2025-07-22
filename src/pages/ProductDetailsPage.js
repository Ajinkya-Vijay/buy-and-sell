import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { useCartStore } from '../store/cartStore'
import axios from 'axios';

export default function ProductDetailsPage() {
  const addProduct = useCartStore((state)=>state.addCart)
  const [product, setProduct] = useState();
  
  const params = useParams();
  const navigate = useNavigate();

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
  },[]);

  return<>
<Box sx={{ width: '100%', mt: 4 }}>
  {product && (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="flex-start"
      sx={{ px: 2 }}
    >
      {/* Product Image (Left Side) */}
      <Grid item xs={12} md={6}>
        <Box sx={{ width: '72%' }}>
          <img
            src={product?.images[0]}
            alt={product?.title}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Grid>

      {/* Product Info (Right Side) */}
      <Grid item xs={12} md={6}>
        <Box sx={{ color: 'black', fontFamily: 'Arial, sans-serif' }}>
          <h1>{product?.title}</h1>
          <p style={{ color: '#666' }}>by {product?.brand}</p>
          <p>{product?.description}</p>

          <h2 style={{ marginTop: '1rem', color: '#B12704' }}>
            ₹{Math.ceil(product.price)*10}{' '}
            <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '1rem' }}>
              ₹{product.originalPrice || product.price + 1000}
            </span>{' '}
            <span style={{ color: 'green' }}>({product?.discountPercentage}% OFF)</span>
          </h2>

          <p><strong>Availability:</strong> {product?.availabilityStatus}</p>
          <p><strong>Stock Left:</strong> {product?.stock}</p>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
            <button onClick={()=>{addProduct(product); navigate('/checkout')}} style={{ padding: '10px 20px', backgroundColor: '#FFA41C', border: 'none', color: 'white' }}>
              Add to Cart
            </button>
            <button style={{ padding: '10px 20px', backgroundColor: '#FB641B', border: 'none', color: 'white' }}>
              Buy Now
            </button>
          </Box>

          <Box sx={{ mt: 4 }}>
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
          </Box>

          <Box sx={{ mt: 3 }}>
            <h3>Meta Info</h3>
            <p><strong>Barcode:</strong> {product?.meta.barcode}</p>
            <img src={product?.meta.qrCode} alt="QR Code" width="100" />
          </Box>
        </Box>
      </Grid>

      {/* Reviews */}
      <Grid item xs={12} md={10}>
        <Box sx={{ color: 'black', mt: 6 }}>
          <h2>Customer Reviews</h2>
          {product?.reviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                borderTop: '1px solid #ccc',
                py: 2,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <Box sx={{ minWidth: '200px', fontWeight: 'bold' }}>
                {review.reviewerName} — ⭐ {review.rating}
              </Box>
              <Box sx={{ flex: 1 }}>{review.comment}</Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  )}
</Box>

  </> 
}
