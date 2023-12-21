
import  {createContext} from 'react'

export const OrderContext = createContext(null);
const OrderProvider = (props) => {
    const {children}=props;
    const orders=[
        {
            id:'1',
            productNumber:'1293',
            productName:"Sample Book Name",
            orderDate:"10/04/2021",
            address:'R107, AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGALORE, INDIA PIN: 846009'
        },
        {
            id:'2',
            productNumber:'1293',
            productName:"Sample Book Name",
            orderDate:"10/04/2021",
            address:'R107, AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGALORE, INDIA PIN: 846009'
        },
        
    ] 
  return (
    <>
    <OrderContext.Provider value={orders}>
        {children}
    </OrderContext.Provider>
    </>
  )
}
export default OrderProvider