import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Grid, Box, Typography, Chip } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function HomePage() {  
  const navigate = useNavigate();
  
  async function getfurnitureList() { 
    let furnitureData = await axios.get('https://dummyjson.com/products/category/furniture')
    let kitchenData = await axios.get('https://dummyjson.com/products/category/kitchen-accessories?limit=80')
    return [...furnitureData.data.products, ...kitchenData.data.products]
  };

  const { data : furnitureList = [], isLoading, error } = useQuery({
    queryKey: ['listItems'], // unique key for the query
    queryFn: getfurnitureList,
  });

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent:'center'}}>
      <CircularProgress />
    </Box>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box sx={{minHeight: '20em', width: '100%', mt: 4 }}>
      <Grid container spacing={2}>
        {furnitureList.map((item) => (
          <Grid
            item
            width={350}
            key={item.id}
            xs={12} 
            sm={6}
            md={3}  
          >
            <Box
              onClick={() => navigate(`/products/${item.id}`)}
              sx={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                p: 1,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <img
                srcSet={`${item.images[0]}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.images[0]}?w=200&h=200&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />

              <Box sx={{ p: 1 }}>
                <Typography
                  variant="body2"
                  fontWeight="500"
                  gutterBottom
                  noWrap
                  sx={{color : 'black'}}
                  title={item.title}
                >
                  {item.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                  <Box sx={{ backgroundColor: '#388e3c', color: '#fff', px: 0.5, borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>
                    {item.rating} ★
                  </Box>
                  <Typography variant="caption" sx={{ ml: 0.5, color: '#878787' }}>
                    ({Math.ceil(Math.random()*1000)})
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{color : 'black'}} fontWeight={600}>&#8377;{Math.ceil(item.price)*10}</Typography>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through', color: '#878787' }}>
                    ₹{item.originalPrice || item.price + 1000}
                  </Typography>
                  <Typography variant="body2" color="green">
                    {item.discount || '40%'} off
                  </Typography>
                </Box>

                {/* {item.availabilityStatus && ( */}
                  <Box mt={1}>
                    <Chip label={item.availabilityStatus} size="small" color="success" />
                  </Box>
                {/* )} */}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

  )
}
