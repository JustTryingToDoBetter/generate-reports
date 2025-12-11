# 🤝 Contributing Guide

Welcome! This guide will help you extend and customize the Generate Reports app in the spirit of calm, focused development.

## 🌟 Philosophy

Remember: **We're going for elegant, readable solutions**. Not clever tricks or over-engineering. Each addition should feel like a natural extension of what's already there.

## 🎯 Quick Start for Contributors

### 1. Adding a New Report Type

Want to add a "Financial Report" or "Inventory Report"? Here's how:

**Step 1**: Add the type to the Report model
```typescript
// src/models/Report.ts
export interface Report {
  type: 'sales' | 'performance' | 'analytics' | 'financial' | 'custom';
  // ... rest of interface
}
```

**Step 2**: Create a generator method
```typescript
// src/services/ReportGenerator.ts
static generateFinancialReport(createdBy: string): Report {
  const report = createReport(
    'Financial Summary',
    'financial',
    'Q4 shows 12% profit increase',
    {
      revenue: 500000,
      expenses: 380000,
      profit: 120000,
      profitMargin: 24,
    },
    createdBy
  );
  
  // Optional: Add charts
  report.content.charts = [{
    type: 'line',
    title: 'Revenue Trend',
    data: [450000, 475000, 490000, 500000],
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  }];
  
  return report;
}
```

**Step 3**: Add a button on HomeScreen
```typescript
// src/screens/HomeScreen.tsx
<TouchableOpacity
  style={[styles.button, styles.financialButton]}
  onPress={() => generateReport('financial')}
>
  <Text style={styles.buttonEmoji}>💵</Text>
  <Text style={styles.buttonTitle}>Financial</Text>
  <Text style={styles.buttonSubtitle}>Profit & loss</Text>
</TouchableOpacity>

// In styles
financialButton: {
  backgroundColor: '#f59e0b',
},
```

Done! ✨

### 2. Adding New User Roles

**Step 1**: Update User model
```typescript
// src/models/User.ts
export interface User {
  role: 'manager' | 'team_member' | 'client' | 'executive' | 'contractor';
  // ... rest
}
```

**Step 2**: Add sample users
```typescript
// src/utils/sampleData.ts
createUser('Sarah Executive', 'sarah@company.com', 'executive', 'C-Suite'),
createUser('Mike Contractor', 'mike@contractor.com', 'contractor'),
```

### 3. Adding a New Screen

**Step 1**: Create the screen component
```typescript
// src/screens/ReportHistoryScreen.tsx
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export const ReportHistoryScreen: React.FC = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Report History</Text>
      {/* Your content */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
  },
});
```

**Step 2**: Add to navigation
```typescript
// src/navigation/AppNavigator.tsx
import { ReportHistoryScreen } from '../screens/ReportHistoryScreen';

// In Stack.Navigator
<Stack.Screen
  name="ReportHistory"
  component={ReportHistoryScreen}
  options={{ title: 'History' }}
/>
```

**Step 3**: Navigate to it
```typescript
navigation.navigate('ReportHistory');
```

### 4. Adding a New Component

Follow the existing pattern:

```typescript
// src/components/YourComponent.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface YourComponentProps {
  // Define props
  title: string;
  onPress?: () => void;
}

export const YourComponent: React.FC<YourComponentProps> = ({ 
  title, 
  onPress 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
```

## 🎨 Style Guidelines

### Colors
Use the existing palette:
```typescript
const colors = {
  primary: '#6366f1',
  success: '#10b981',
  info: '#3b82f6',
  warning: '#f59e0b',
  purple: '#8b5cf6',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    400: '#9ca3af',
    500: '#6b7280',
    700: '#374151',
    900: '#1f2937',
  },
};
```

### Typography
```typescript
const typography = {
  title: { fontSize: 24, fontWeight: '700' },
  heading: { fontSize: 18, fontWeight: '600' },
  body: { fontSize: 16, fontWeight: '400' },
  small: { fontSize: 14, fontWeight: '400' },
  caption: { fontSize: 12, fontWeight: '400' },
};
```

### Spacing
Use multiples of 4:
```typescript
padding: 16,  // Good
margin: 20,   // Good
gap: 12,      // Good
```

## 🧪 Testing Guidelines

### Writing Tests

Follow the existing pattern:

```typescript
// __tests__/YourFeature.test.ts
import { yourFunction } from '../src/services/YourService';

describe('YourService', () => {
  test('does what it should', () => {
    const result = yourFunction(input);
    
    expect(result).toBeDefined();
    expect(result.property).toBe(expectedValue);
  });
  
  test('handles edge cases', () => {
    expect(() => yourFunction(null)).toThrow();
  });
});
```

### Running Tests
```bash
npm test
```

## 📝 Documentation Guidelines

### Code Comments
Only when necessary:
```typescript
// Good: Explains non-obvious logic
// Calculate amortization using declining balance method
const amortization = principal * (rate / 12);

// Bad: Obvious from code
// Create a user
const user = createUser(name, email);
```

### Function Documentation
For complex functions:
```typescript
/**
 * Generate a custom report with user-provided data
 * 
 * @param title - Report title
 * @param summary - Brief summary of findings
 * @param data - Key-value pairs of metrics
 * @param createdBy - User ID of creator
 * @returns Complete Report object with metadata
 */
static createCustomReport(
  title: string,
  summary: string,
  data: Record<string, any>,
  createdBy: string
): Report {
  // ...
}
```

## 🚀 Common Extensions

### Add Persistence
```bash
npm install @react-native-async-storage/async-storage
```

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save reports
await AsyncStorage.setItem('reports', JSON.stringify(reports));

// Load reports
const saved = await AsyncStorage.getItem('reports');
const reports = saved ? JSON.parse(saved) : [];
```

### Add Charts
```bash
npm install react-native-chart-kit react-native-svg
```

```typescript
import { LineChart } from 'react-native-chart-kit';

<LineChart
  data={{
    labels: chart.labels,
    datasets: [{ data: chart.data }]
  }}
  width={320}
  height={200}
/>
```

### Add PDF Export
```bash
npm install react-native-pdf react-native-html-to-pdf
```

### Add Date Picker
```bash
npm install @react-native-community/datetimepicker
```

## 🐛 Debugging Tips

### Common Issues

**Metro bundler not starting:**
```bash
npm start -- --reset-cache
```

**iOS build fails:**
```bash
cd ios && pod install && cd ..
npm run ios
```

**Android build fails:**
```bash
cd android && ./gradlew clean && cd ..
npm run android
```

### Console Logging
Use structured logs:
```typescript
console.log('📧 Sending report:', {
  reportId: report.id,
  recipientCount: recipients.length,
});
```

## ✅ Pull Request Checklist

Before submitting:
- [ ] Code follows existing style patterns
- [ ] TypeScript types are properly defined
- [ ] No console.error or debug logs left in
- [ ] New features have basic tests
- [ ] Documentation updated if needed
- [ ] Tested on both platforms (if possible)
- [ ] No breaking changes to existing features

## 💡 Ideas for Contributions

### Quick Wins (< 1 hour)
- [ ] Add more sample users
- [ ] Add new report types
- [ ] Improve formatting functions
- [ ] Add more chart types
- [ ] Better empty states

### Medium Effort (2-4 hours)
- [ ] Add report filtering
- [ ] Add report search
- [ ] Add user grouping
- [ ] Add report templates
- [ ] Add dark mode

### Bigger Features (1+ days)
- [ ] Backend API integration
- [ ] Real authentication
- [ ] PDF generation
- [ ] Email integration
- [ ] Push notifications
- [ ] Offline mode
- [ ] Report scheduling

## 🌙 Remember

> "The best code is like good lo-fi music: simple, elegant, and doesn't distract from the work at hand."

Write code that:
- Solves the problem clearly
- Is easy to understand later
- Feels natural to extend
- Brings a little joy

Happy coding! ☕✨

---

Questions? Issues? Feel free to open a discussion!
