import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">Order #{order._id}</h3>
          <p className="text-sm text-gray-500">
            Placed on {format(new Date(order.createdAt), 'PPP')}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium
          ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
            order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
            order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'}`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>

      <div className="space-y-4">
        {order.items.map((item) => (
          <div key={item._id} className="flex items-center">
            <img
              src={item.product.imageUrl}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4 flex-grow">
              <h4 className="text-sm font-medium">{item.product.name}</h4>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="text-sm font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-lg font-semibold">${order.total.toFixed(2)}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            to={`/orders/${order._id}`}
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;