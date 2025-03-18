
import { useState, useEffect, useCallback } from 'react';
import { Search, Mail, Globe, Phone } from 'lucide-react';
import { fetchUsers } from '@/services/api';
import { debounce, efficientSearch } from '@/utils/searchUtils';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const UsersSection = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch users:', error);
        toast({
          title: 'Error',
          description: 'Failed to load user data. Please try again later.',
          variant: 'destructive',
        });
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [toast]);

  // Create a debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      const results = efficientSearch(users, query);
      setFilteredUsers(results);
    }, 300),
    [users]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <section id="users" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Users</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Search and explore our user directory with real-time filtering.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search users by name, username, or email..."
              className="pl-10 pr-4 py-2"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </Card>
            ))}
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No users found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map(user => (
              <Card key={user.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{user.name}</h3>
                  <p className="text-gray-500 mb-4">@{user.username}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-brand-purple" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-brand-purple" />
                      <span className="text-sm">{user.phone}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-brand-purple" />
                      <span className="text-sm">{user.website}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Company:</span> {user.company.name}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UsersSection;
