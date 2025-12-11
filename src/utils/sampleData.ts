/**
 * Sample Data for Demo
 * Provides initial users and reports for the app
 */
import { User, createUser } from '../models/User';

export const sampleUsers: User[] = [
  createUser('Alice Johnson', 'alice.johnson@company.com', 'manager', 'Sales'),
  createUser('Bob Smith', 'bob.smith@company.com', 'team_member', 'Engineering'),
  createUser('Carol Williams', 'carol.williams@company.com', 'manager', 'Marketing'),
  createUser('David Brown', 'david.brown@company.com', 'client'),
  createUser('Emma Davis', 'emma.davis@company.com', 'team_member', 'Sales'),
  createUser('Frank Miller', 'frank.miller@company.com', 'manager', 'Engineering'),
];

export const getCurrentUser = (): User => {
  return createUser('John Doe', 'john.doe@company.com', 'manager', 'Operations');
};
