/**
 * User Model Tests
 * Tests for user data model
 */
import { createUser, User } from '../src/models/User';

describe('User Model', () => {
  test('creates user with all required fields', () => {
    const user = createUser(
      'John Doe',
      'john.doe@example.com',
      'manager',
      'Engineering'
    );

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
    expect(user.role).toBe('manager');
    expect(user.department).toBe('Engineering');
  });

  test('creates user without optional department', () => {
    const user = createUser('Jane Smith', 'jane.smith@example.com', 'client');

    expect(user).toBeDefined();
    expect(user.department).toBeUndefined();
  });

  test('generates unique IDs for different users', () => {
    const user1 = createUser('User One', 'user1@example.com', 'team_member');
    const user2 = createUser('User Two', 'user2@example.com', 'team_member');

    expect(user1.id).not.toBe(user2.id);
  });

  test('supports all role types', () => {
    const manager = createUser('Manager', 'manager@example.com', 'manager');
    const teamMember = createUser('Team', 'team@example.com', 'team_member');
    const client = createUser('Client', 'client@example.com', 'client');

    expect(manager.role).toBe('manager');
    expect(teamMember.role).toBe('team_member');
    expect(client.role).toBe('client');
  });
});
