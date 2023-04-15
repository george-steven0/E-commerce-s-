import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shirt from '../../Assets/imgs/shirt.webp'
import { faStar } from '@fortawesome/free-regular-svg-icons';
const ProductItem = ({name,price,img}) => {
    return ( 
        <div className="flex flex-wrap justify-between items-start">
            <div className='basis-[30%]'>
                <img src={img[0]} className='w-full h-[70px] border-[1px] border-[#cbcbcbe2] p-1 rounded-sm' alt="item" />
            </div>

            <div className='basis-[67%] flex flex-col flex-wrap justify-between items-start [&>p]:font-light'>
                <p className='capitalize'>{name}</p>
                <p className='[&>span>svg]:text-[#7f7f7f]'>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                </p>
                <p>{price}$</p>
            </div>
        </div>
    );
}

export default ProductItem;