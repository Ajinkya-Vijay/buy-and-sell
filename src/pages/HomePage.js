import React, {useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [furnitureList, setStoreFurnitureAndAccesoryList] = useState([]);

  const navigate = useNavigate();

  async function getfurnitureList(){
    let furnitureData;
    let kitchenData
    await axios.get('https://dummyjson.com/products/category/furniture')
    .then((res)=>{
      furnitureData = res.data.products;
    }).catch((err)=>console.error(err));

      await axios.get('https://dummyjson.com/products/category/kitchen-accessories?limit=10')
    .then((res)=>{
      kitchenData = res.data.products;
    }
  ).catch((err)=>console.error(err));
  setStoreFurnitureAndAccesoryList([...furnitureData , ...kitchenData])
  }

  React.useEffect(()=>{
    getfurnitureList()
  },[])
    
  return (
    <div style={{height:'100vh'}}>
    {/* // Elevate your furniture & Kitchen Accesories */}
    <Box sx={{ width: '100%', overflowX: 'auto', mt: 4 }}>
    <ImageList sx={{ width: 'max-content', height: 250, overflowX: 'hidden', marginTop: '32px' }}
    cols={15} rowHeight={164}>
      {console.log('furnitureList',furnitureList)}
      {furnitureList.map((item) => (
        <ImageListItem key={item.img} style={{}}onClick={()=>navigate(`/products/${item.id}`)}>
          <img
            srcSet={`${item.images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.images[0]}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{height: 'inherit'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    </div>
  )
}
