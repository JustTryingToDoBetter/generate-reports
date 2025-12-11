# 🚀 Quick Start Guide

Get up and running with the Generate Reports mobile app in minutes!

## ⚡ Fast Track (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the App
```bash
# For iOS (macOS only)
npm run ios

# For Android
npm run android
```

That's it! 🎉

## 📱 What You'll See

### First Screen - Home
```
┌─────────────────────────────────┐
│   📊 Generate Reports           │
│                                  │
│   💰        📈        🔍        │
│  Sales  Performance Analytics   │
│                                  │
│   Tap any button to generate!   │
└─────────────────────────────────┘
```

### Try This:
1. **Tap the "Sales Report" button** (green 💰)
2. You'll see a complete sales report with metrics
3. **Tap "Send Report"** at the bottom
4. **Select some users** by tapping on them (they'll turn purple)
5. **Tap "Send to X User(s)"** to complete the demo

## 🎮 Explore the Features

### Generate Different Reports
- **💰 Sales**: Revenue, orders, top products
- **📈 Performance**: Team metrics, efficiency
- **🔍 Analytics**: User insights, engagement

### View Report Details
- Scroll through all metrics
- See formatted values ($, %, dates)
- View chart data

### Send to Users
- Browse 6 sample users
- Select multiple recipients
- Send with one tap

## 🛠️ Development Commands

```bash
# Start Metro bundler
npm start

# Run tests
npm test

# Lint code
npm run lint

# Run on specific device (iOS)
npm run ios -- --simulator="iPhone 14 Pro"

# Run on specific device (Android)
npm run android -- --deviceId=<device-id>
```

## 📚 Learn More

- **[README.md](README.md)**: Full setup and features
- **[DEMO.md](DEMO.md)**: Detailed feature walkthrough
- **[ARCHITECTURE.md](ARCHITECTURE.md)**: System design
- **[CONTRIBUTING.md](CONTRIBUTING.md)**: How to extend
- **[SCREENS.md](SCREENS.md)**: UI specifications

## 🎯 Quick Customization

### Add a New Report Type
1. Edit `src/services/ReportGenerator.ts`
2. Add method like `generateCustomReport()`
3. Add button in `src/screens/HomeScreen.tsx`

### Change Colors
1. Open any screen file
2. Find `StyleSheet.create({})`
3. Update color values (e.g., `backgroundColor: '#6366f1'`)

### Add More Users
1. Edit `src/utils/sampleData.ts`
2. Add more `createUser()` calls

## ⚠️ Prerequisites

### Required:
- Node.js 16+
- npm or yarn
- React Native development environment

### For iOS:
- macOS
- Xcode
- CocoaPods (`sudo gem install cocoapods`)

### For Android:
- Android Studio
- Android SDK
- Java Development Kit 11

## 🐛 Common Issues

### Metro bundler won't start
```bash
npm start -- --reset-cache
```

### iOS build fails
```bash
cd ios && pod install && cd ..
npm run ios
```

### Android build fails
```bash
cd android && ./gradlew clean && cd ..
npm run android
```

### Port already in use
```bash
# Kill process on port 8081
lsof -ti:8081 | xargs kill
```

## 💡 Tips

- **Hot Reload**: Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android)
- **Debug Menu**: Enable "Fast Refresh" for instant updates
- **Console Logs**: Check Metro terminal for `console.log()` output
- **Errors**: Red screen shows errors - read carefully!

## 🎨 Customize the Experience

### Change App Name
Edit `app.json`:
```json
{
  "displayName": "Your App Name"
}
```

### Change App Icon
1. Add icons to `ios/` and `android/` directories
2. Update app config

### Modify Sample Data
Edit `src/utils/sampleData.ts`:
```typescript
export const sampleUsers: User[] = [
  createUser('Your Name', 'your@email.com', 'manager'),
  // Add more users...
];
```

## 🔥 Advanced Usage

### Run with specific simulator
```bash
# iOS
xcrun simctl list devices

# Then run with device
npm run ios -- --simulator="iPhone 15"
```

### Debug with React Native Debugger
1. Install React Native Debugger
2. Enable "Debug JS Remotely" in dev menu
3. Open React Native Debugger app

### Performance Profiling
1. Open dev menu
2. Select "Show Perf Monitor"
3. Watch FPS and memory usage

## 🎉 You're Ready!

The app is fully functional and ready to explore. Generate reports, send them to users, and see how everything works together.

### Next Steps:
1. ✅ Run the app
2. ✅ Generate all three report types
3. ✅ Send a report to users
4. ✅ Read the documentation
5. ✅ Start customizing!

---

**Need Help?**
- Check [DEMO.md](DEMO.md) for feature guide
- Read [CONTRIBUTING.md](CONTRIBUTING.md) for dev guide
- Review [ARCHITECTURE.md](ARCHITECTURE.md) for system design

**Happy Coding!** 🌙✨☕🎵
