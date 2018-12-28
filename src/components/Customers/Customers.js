import React from 'react';
import './Customers.css';

const customers = () => {
  const customer = [
    {
      id: 'cust1',
      img: 'img/customer-1.jpeg',
      custname: 'Melissa A',
      custtagline: 'Happy Customer',
      review:
        '"My husband and I were very comfortable and would stay here again. Excellent customer service and the room met all my expectations."'
    },
    {
      id: 'cust2',
      img: 'img/customer-2.jpeg',
      custname: 'Desiree C',
      custtagline: 'Exceptional',
      review:
        '"Stayed here for a wedding. The staff was friendly and the rooms were very nice and clean. Would stay again."'
    }
  ];

  return (
    <section className="customers">
      <div className="common-header">
        <h1 className="common-heading">Our Customers</h1>
        <div className="underline">
          <div className="small-underline" />
          <div className="big-underline" />
        </div>
      </div>
      <p className="customers-paragraph">
        Check out what our customers have to say!
      </p>
      <div className="customers-card-wrapper">
        {customer.map(customers => {
          return (
            <div key={customers.id} className="customer-card">
              <div className="customer-image-wrapper">
                <img
                  src={customers.img}
                  alt="Customer"
                  className="customer-image"
                />
              </div>
              <div className="customer-info">
                <h3 className="customer-fullname">{customers.custname}</h3>
                <p className="customer-paragraph-1">{customers.custtagline}</p>
                <p className="customer-paragraph-2">{customers.review}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default customers;
