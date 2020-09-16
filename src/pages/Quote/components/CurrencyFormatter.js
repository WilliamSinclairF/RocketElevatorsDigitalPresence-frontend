export default function CurrencyFormatter(integer) {
  return integer.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
