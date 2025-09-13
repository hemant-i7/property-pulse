/**
 * Format a number as Indian currency (INR)
 * @param amount The amount to format
 * @param options Formatting options
 * @returns Formatted currency string
 */
export function formatCurrency(
  amount: number, 
  options: { 
    notation?: 'standard' | 'compact',
    displaySymbol?: boolean,
    compact?: boolean
  } = {}
): string {
  const { 
    notation = 'standard',
    displaySymbol = true,
    compact = false
  } = options;
  
  // Use compact notation to display in lakhs and crores
  if (compact) {
    if (amount >= 10000000) { // 1 crore
      return `${displaySymbol ? '₹' : ''}${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) { // 1 lakh
      return `${displaySymbol ? '₹' : ''}${(amount / 100000).toFixed(2)} L`;
    }
  }
  
  // Standard formatting
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    notation: notation,
    currencyDisplay: displaySymbol ? 'symbol' : 'code',
  });
  
  return formatter.format(amount);
}
