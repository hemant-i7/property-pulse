/**
 * Builds a query string from an object of parameters
 * Handles arrays, undefined values, and encoding
 * @param params Object of parameters
 * @returns URL query string
 */
export function buildQueryString(params: Record<string, string | number | boolean | string[] | undefined | null>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      return;
    }
    
    if (Array.isArray(value)) {
      // Handle arrays by adding multiple entries with the same key
      value.forEach(item => {
        if (item !== undefined && item !== null && item !== '') {
          searchParams.append(key, String(item));
        }
      });
    } else {
      searchParams.append(key, String(value));
    }
  });
  
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}
