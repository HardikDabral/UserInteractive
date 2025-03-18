
/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last invocation.
 * 
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns A debounced version of the provided function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function(...args: Parameters<T>) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * A simple user search function that filters users by their name
 * It uses a case-insensitive search
 * 
 * @param users - The array of users to search through
 * @param query - The search query string
 * @returns Array of filtered users matching the query
 */
export function searchUsers(users: any[], query: string) {
  if (!query || query.length === 0) {
    return users;
  }
  
  const normalizedQuery = query.toLowerCase();
  
  return users.filter(user => 
    user.name.toLowerCase().includes(normalizedQuery) ||
    user.email.toLowerCase().includes(normalizedQuery) ||
    user.username.toLowerCase().includes(normalizedQuery)
  );
}

/**
 * A more efficient search implementation using a prefix-based approach
 * This creates a map of lowercase name prefixes to user objects for faster lookup
 * 
 * @param users - The array of users to index
 * @param query - The search query string
 * @returns Array of filtered users matching the query
 */
export function efficientSearch(users: any[], query: string) {
  if (!query || query.length === 0) {
    return users;
  }
  
  // Create a map for efficient search (similar to a Trie approach but using a HashMap)
  const searchMap: Record<string, Set<number>> = {};
  
  // Index all users by prefixes of their names
  users.forEach(user => {
    const userId = user.id;
    const name = user.name.toLowerCase();
    const username = user.username.toLowerCase();
    const email = user.email.toLowerCase();
    
    // Index name - add all possible prefixes
    for (let i = 1; i <= name.length; i++) {
      const prefix = name.substring(0, i);
      if (!searchMap[prefix]) {
        searchMap[prefix] = new Set();
      }
      searchMap[prefix].add(userId);
    }
    
    // Index username
    for (let i = 1; i <= username.length; i++) {
      const prefix = username.substring(0, i);
      if (!searchMap[prefix]) {
        searchMap[prefix] = new Set();
      }
      searchMap[prefix].add(userId);
    }
    
    // Index email
    for (let i = 1; i <= email.length; i++) {
      const prefix = email.substring(0, i);
      if (!searchMap[prefix]) {
        searchMap[prefix] = new Set();
      }
      searchMap[prefix].add(userId);
    }
  });
  
  const normalizedQuery = query.toLowerCase();
  const matchingIds = searchMap[normalizedQuery];
  
  if (!matchingIds) {
    return [];
  }
  
  return users.filter(user => matchingIds.has(user.id));
}
