/**
 * User Model
 * Represents a user who can receive reports
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'manager' | 'team_member' | 'client';
  department?: string;
}

export const createUser = (
  name: string,
  email: string,
  role: User['role'],
  department?: string
): User => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    email,
    role,
    department,
  };
};
