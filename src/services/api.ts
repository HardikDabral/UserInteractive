
/**
 * API service for fetching user data
 */

/**
 * Fetches all users from the JSONPlaceholder API
 * @returns Promise with user data
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
