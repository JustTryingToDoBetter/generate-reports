# 📱 Screen Descriptions & UI Flow

## Visual Overview

This document describes what each screen looks like and how users interact with them.

---

## 🏠 Home Screen

### Layout
```
┌────────────────────────────────────────┐
│  📊 Generate Reports                   │
│  Create and send professional reports  │
├────────────────────────────────────────┤
│                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐  │
│  │   💰   │  │   📈   │  │   🔍   │  │
│  │ Sales  │  │Perform-│  │Analyti-│  │
│  │ Report │  │ ance   │  │  cs    │  │
│  │        │  │        │  │        │  │
│  └────────┘  └────────┘  └────────┘  │
│  Revenue &   Team       User          │
│  orders      metrics    insights      │
│                                         │
├────────────────────────────────────────┤
│  Recent Reports                        │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ Monthly Sales Report        SENT │ │
│  │ Total sales increased by 15%... │ │
│  │ sales                  Dec 11    │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ Team Performance Report   DRAFT  │ │
│  │ Team productivity improved...   │ │
│  │ performance            Dec 11    │ │
│  └──────────────────────────────────┘ │
│                                         │
└────────────────────────────────────────┘
```

### Colors
- **Background**: Light gray (`#f9fafb`)
- **Header**: White with dark text
- **Buttons**: 
  - Sales: Green (`#10b981`)
  - Performance: Blue (`#3b82f6`)
  - Analytics: Purple (`#8b5cf6`)

### Interactions
1. **Tap any report button** → Generates report + navigates to detail
2. **Tap report card** → Navigates to report detail
3. **Scroll** → View all recent reports

### States
- **Empty state**: Shows "No reports yet. Generate your first report!"
- **With reports**: Shows scrollable list of report cards

---

## 📄 Report Detail Screen

### Layout
```
┌────────────────────────────────────────┐
│  ← Report Details                      │
├────────────────────────────────────────┤
│                                         │
│  Monthly Sales Report                  │
│  Type: sales                           │
│  Created: Dec 11, 2025                 │
│  Status: draft                         │
│                                         │
├────────────────────────────────────────┤
│  Summary                               │
│                                         │
│  Total sales increased by 15%          │
│  compared to last month                │
│                                         │
├────────────────────────────────────────┤
│  Key Metrics                           │
│                                         │
│  totalRevenue          $125,000.00    │
│  ────────────────────────────────────  │
│  totalOrders                    450    │
│  ────────────────────────────────────  │
│  averageOrderValue      $277.78       │
│  ────────────────────────────────────  │
│  topProducts                           │
│    • Product A: $45,000               │
│    • Product B: $32,000               │
│    • Product C: $28,000               │
│                                         │
├────────────────────────────────────────┤
│  Charts                                │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ Top Products                     │ │
│  │ Type: bar                        │ │
│  │                                  │ │
│  │ Product A           45000        │ │
│  │ Product B           32000        │ │
│  │ Product C           28000        │ │
│  └──────────────────────────────────┘ │
│                                         │
├────────────────────────────────────────┤
│  ┌──────────────────────────────────┐ │
│  │      📤 Send Report               │ │
│  └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

### Colors
- **Background**: Light gray
- **Sections**: White cards with shadows
- **Button**: Indigo (`#6366f1`)
- **Text**: Dark gray hierarchy

### Interactions
1. **Scroll** → View all metrics and charts
2. **Tap Send Report** → Navigate to user selection
3. **Tap back arrow** → Return to home

### Data Display
- Currency values formatted as USD
- Dates formatted as "Mon DD, YYYY"
- Status badges with color coding:
  - Draft: Gray
  - Pending: Amber
  - Sent: Green

---

## 👥 User Selection Screen

### Layout
```
┌────────────────────────────────────────┐
│  ← Send Report                         │
├────────────────────────────────────────┤
│  Select Recipients                     │
│  Choose who should receive             │
│  "Monthly Sales Report"                │
│  2 users selected                      │
│                                         │
├────────────────────────────────────────┤
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ ☑️  Alice Johnson               │ │
│  │     alice.johnson@company.com    │ │
│  │     manager • Sales              │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ ☐  Bob Smith                     │ │
│  │     bob.smith@company.com        │ │
│  │     team member • Engineering    │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ ☑️  Carol Williams              │ │
│  │     carol.williams@company.com   │ │
│  │     manager • Marketing          │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ ☐  David Brown                   │ │
│  │     david.brown@company.com      │ │
│  │     client                       │ │
│  └──────────────────────────────────┘ │
│                                         │
├────────────────────────────────────────┤
│  ┌──────────────────────────────────┐ │
│  │      Send to 2 User(s)           │ │
│  └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

### Colors
- **Background**: Light gray
- **User cards**: White (unselected), Light purple (`#f5f5ff`) (selected)
- **Checkbox**: 
  - Border: Indigo (`#6366f1`)
  - Fill: Indigo when checked
- **Button**: Indigo when active, Gray when disabled

### Interactions
1. **Tap user card** → Toggle selection
2. **Tap checkbox** → Toggle selection
3. **Tap Send button** → Send report to selected users
4. **Scroll** → View all users

### States
- **No selection**: Button disabled and gray
- **With selection**: Button active and shows count
- **Sending**: Button shows "Sending..." and is disabled
- **Success**: Alert dialog + return to previous screen

### Visual Feedback
- Selected cards have purple highlight
- Checkbox shows checkmark when selected
- Counter updates in header as users are selected
- Button text dynamically shows selected count

---

## 🎨 Design System

### Typography Scale
```
Title:     24px / Bold    (#1f2937)
Heading:   18px / SemiBold (#1f2937)
Body:      16px / Regular  (#374151)
Small:     14px / Regular  (#6b7280)
Caption:   12px / Regular  (#9ca3af)
```

### Spacing System
```
xs:   4px
sm:   8px
md:   12px
base: 16px
lg:   20px
xl:   24px
2xl:  32px
```

### Border Radius
```
Small:  4px  (badges)
Medium: 8px  (cards)
Large:  12px (buttons)
```

### Shadows
```
Card shadow:
  shadowColor: '#000'
  shadowOffset: { width: 0, height: 2 }
  shadowOpacity: 0.1
  shadowRadius: 4
  elevation: 3  (Android)
```

### Color Palette
```
Primary:   #6366f1  (Indigo)
Success:   #10b981  (Green)
Info:      #3b82f6  (Blue)
Warning:   #f59e0b  (Amber)
Purple:    #8b5cf6
Red:       #ef4444

Grays:
  50:  #f9fafb  (Background)
  100: #f3f4f6
  200: #e5e7eb  (Borders)
  400: #9ca3af  (Disabled text)
  500: #6b7280  (Secondary text)
  700: #374151  (Body text)
  900: #1f2937  (Headings)
```

---

## 🔄 Navigation Flow

```
              ┌──────────┐
              │   Home   │
              └─────┬────┘
                    │
         ┌──────────┴──────────┐
         ▼                     ▼
  ┌─────────────┐      ┌─────────────┐
  │   Report    │      │   Report    │
  │   Detail    │      │   Detail    │
  └──────┬──────┘      └──────┬──────┘
         │                    │
         ▼                    ▼
  ┌─────────────┐      ┌─────────────┐
  │    User     │      │    User     │
  │  Selection  │      │  Selection  │
  └─────────────┘      └─────────────┘
         │                    │
         └──────────┬─────────┘
                    ▼
             (Back to Home)
```

### Navigation Gestures
- **Back button**: Returns to previous screen
- **Hardware back** (Android): Same as back button
- **Swipe from left** (iOS): Gesture-based back navigation

---

## 📊 Report Type Visual Differences

### Sales Report 💰
- **Color**: Green
- **Icon**: 💰
- **Metrics**: Revenue, orders, average order value
- **Charts**: Bar chart of top products

### Performance Report 📈
- **Color**: Blue
- **Icon**: 📈
- **Metrics**: Tasks completed, efficiency, completion time
- **Charts**: Line chart of weekly progress

### Analytics Report 🔍
- **Color**: Purple
- **Icon**: 🔍
- **Metrics**: Active users, new users, retention, session duration
- **Charts**: Pie chart of user distribution

---

## 🎭 Interactive States

### Buttons
```
Normal:  Solid color, white text
Pressed: Slightly darker, scale 0.98
Disabled: Gray background, gray text
Loading: Shows "..." or spinner
```

### Cards
```
Normal:  White background, subtle shadow
Pressed: Scale 0.98, deeper shadow
Selected: Colored background (purple tint)
```

### Lists
```
Scroll:   Smooth momentum scrolling
Empty:    Centered message with icon
Loading:  Skeleton screens or spinner
```

---

*These screens create a calm, focused experience for report generation and distribution* 🌙
