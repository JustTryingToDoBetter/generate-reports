/**
 * User List Item Component
 * Displays a user with selection checkbox
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { User } from '../models/User';

interface UserListItemProps {
  user: User;
  isSelected: boolean;
  onToggle: (userId: string) => void;
}

export const UserListItem: React.FC<UserListItemProps> = ({
  user,
  isSelected,
  onToggle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      onPress={() => onToggle(user.id)}
    >
      <View style={styles.checkbox}>
        {isSelected && <View style={styles.checkboxInner} />}
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        <Text style={styles.userRole}>
          {user.role.replace('_', ' ')} {user.department ? `• ${user.department}` : ''}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selected: {
    borderColor: '#6366f1',
    backgroundColor: '#f5f5ff',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#6366f1',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 14,
    height: 14,
    borderRadius: 2,
    backgroundColor: '#6366f1',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  userRole: {
    fontSize: 12,
    color: '#9ca3af',
    textTransform: 'capitalize',
  },
});
