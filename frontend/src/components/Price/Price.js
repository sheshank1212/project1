import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: 'en-IN', // Set the locale for India
  currency: 'INR', // Set the currency to INR (Indian Rupees)
};
