const formatValue = (value: number): string =>
  new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value)
    .replace(/^(\D+)/, '$1 ');

export default formatValue;
