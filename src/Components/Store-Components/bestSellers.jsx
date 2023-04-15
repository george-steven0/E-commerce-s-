import ProductItem from "../ProductItem/bestSellersItem";

const BestSellers = ({topSales}) => {
    const topSalesList = topSales?.map(item=>{
        return (
            <div className="mb-3 pb-2 border-b-2" key={item.id}>
                <ProductItem
                    name = {item.title}
                    img = {item.images}
                    price = {item.price}
                />
            </div>
        )
    })
    return ( 
        <> 
            {topSalesList}
        </>
    );
}

export default BestSellers;