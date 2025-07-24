import {useEffect, useState} from 'react';
import {useCartStore} from '../../src/store/cartStore';
import Button from '@mui/material/Button';

const styles = {
  container: {
    backgroundColor: '#f1f3f6',
    minHeight: '100vh',
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    width: '90%',
    maxWidth: '1200px',
    gap: '20px',
  },
  leftSection: {
    flex: 3,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
  },
  item: {
    display: 'flex',
    borderBottom: '1px solid #e0e0e0',
    padding: '20px 0',
  },
  itemImage: {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
    marginRight: '20px',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center'
  },
  itemTitle: {
    fontWeight: 500,
    color: 'black',
    marginBottom: '5px',
  },
  itemSub: {
    color: 'black',
    fontSize: '14px',
    color: '#757575',
    marginBottom: '5px',
  },
  outOfStock: {
    color: '#ff6161',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  actionRow: {
    display: 'flex',
    gap: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#212121',
  },
  rightSection: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
    height: 'fit-content',
    borderRadius: '5px',
  },
  sectionTitle: {
    color: 'black',
    fontWeight: 'bold',
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  priceRow: {
    display: 'flex',
    color: 'black',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '14px',
  },
  totalAmount: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  savingText: {
    color: 'green',
    fontWeight: 500,
    fontSize: '14px',
    marginTop: '10px',
  },
  placeOrderBtn: {
    marginTop: '20px',
    backgroundColor: '#fb641b',
    color: '#fff',
    border: 'none',
    padding: '14px',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const [totalAmount, setTotalAmount] = useState()
  
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state)=>state.removeFromCart)

  useEffect(()=>{
    let productArray = [];
    let total = 0;

    for(let item in cart){
      total += cart[item].price;

      productArray.push({
      id: item,
      title: cart[item].title,
      subtitle: cart[item].brand,
      image: cart[item].images[0],
      price :cart[item].price
    })
    }
    setTotalAmount(Math.ceil(total)*10)
    setCartItems(productArray);    
  },[cart])
  
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Left - Cart Items */}
        <div style={styles.leftSection}>
          <button style={{ float: 'right', padding: '6px 12px', fontWeight: 'bold' }}>
            Enter Delivery Pincode
          </button>
          <h3 style={{ marginBottom: '20px' }}>From Saved Addresses</h3>

          {cartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <img src={item.image} alt={item.title} style={styles.itemImage} />
              <div style={styles.itemDetails}>
                <div style={styles.itemTitle}>{item.title}</div>
                <div style={styles.itemSub}>{item.subtitle}</div>
                <div style={styles.itemTitle}>&#8377;{Math.ceil(item.price)*10}</div>
                {/* <div style={styles.outOfStock}>Out Of Stock</div> */}
                <div style={styles.actionRow}>
                  <Button variant="outlined">
                    SAVE FOR LATER
                  </Button>
                  <Button variant="outlined" onClick={()=>removeFromCart(item)}>
                    REMOVE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Price Summary */}
        <div style={styles.rightSection}>
          <div style={styles.sectionTitle}>PRICE DETAILS</div>
          <div style={styles.priceRow}>
            <span>Price</span>
            <span>₹{totalAmount}</span>
          </div>
          {/* <div style={styles.priceRow}>
            <span>Discount</span>
            <span style={{ color: 'green' }}>− ₹8,653</span>
          </div> */}
          {/* <div style={styles.priceRow}>
            <span>Coupons for you</span>
            <span style={{ color: 'green' }}>− ₹75</span>
          </div> */}
          <hr />
          <div style={{ ...styles.priceRow, ...styles.totalAmount }}>
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
          </div>
          {/* <div style={styles.savingText}>You will save ₹8,728 on this order</div> */}

          <button style={styles.placeOrderBtn}>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

