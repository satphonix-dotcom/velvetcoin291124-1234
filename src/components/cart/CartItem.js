import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../../store/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id: item._id, quantity }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item._id));
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <img 
        src={item.imageUrl} 
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <select
            value={item.quantity}
            onChange={handleQuantityChange}
            className="border rounded-md px-2 py-1 mr-4"
          >
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;