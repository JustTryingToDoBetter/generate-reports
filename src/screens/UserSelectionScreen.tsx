/**
 * User Selection Screen
 * Allows selecting users to send report to
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Report } from '../models/Report';
import { User } from '../models/User';
import { UserListItem } from '../components/UserListItem';
import { ReportDistributor } from '../services/ReportDistributor';
import { sampleUsers } from '../utils/sampleData';

interface UserSelectionScreenProps {
  navigation: any;
  route: {
    params: {
      report: Report;
      onSent?: (report: Report) => void;
    };
  };
}

export const UserSelectionScreen: React.FC<UserSelectionScreenProps> = ({
  navigation,
  route,
}) => {
  const { report, onSent } = route.params;
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);

  const toggleUser = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSendReport = async () => {
    if (selectedUsers.length === 0) {
      Alert.alert('No Recipients', 'Please select at least one user to send the report to.');
      return;
    }

    setIsSending(true);

    const recipients = sampleUsers.filter(user =>
      selectedUsers.includes(user.id)
    );

    try {
      const result = await ReportDistributor.sendReport(report, recipients);

      // Update report status
      const updatedReport = {
        ...report,
        status: 'sent' as const,
        recipients: selectedUsers,
      };

      Alert.alert(
        'Success! ✨',
        result.message,
        [
          {
            text: 'OK',
            onPress: () => {
              onSent?.(updatedReport);
              navigation.goBack();
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to send report. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Recipients</Text>
        <Text style={styles.subtitle}>
          Choose who should receive "{report.title}"
        </Text>
        {selectedUsers.length > 0 && (
          <Text style={styles.selectedCount}>
            {selectedUsers.length} user{selectedUsers.length !== 1 ? 's' : ''} selected
          </Text>
        )}
      </View>

      <ScrollView style={styles.userList}>
        {sampleUsers.map(user => (
          <UserListItem
            key={user.id}
            user={user}
            isSelected={selectedUsers.includes(user.id)}
            onToggle={toggleUser}
          />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.sendButton,
            selectedUsers.length === 0 && styles.sendButtonDisabled,
          ]}
          onPress={handleSendReport}
          disabled={isSending || selectedUsers.length === 0}
        >
          <Text style={styles.sendButtonText}>
            {isSending ? 'Sending...' : `Send to ${selectedUsers.length || 0} User(s)`}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  selectedCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6366f1',
    marginTop: 4,
  },
  userList: {
    flex: 1,
    padding: 16,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  sendButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#d1d5db',
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});
