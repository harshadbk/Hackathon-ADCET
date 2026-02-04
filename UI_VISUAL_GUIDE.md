# RTI Assistant - UI/UX Visual Guide

## 🎨 Complete Visual Design System

### Color Scheme Map

#### Primary Colors:
```
Primary Blue: #3b82f6 (Main CTA, Links, Focus states)
├── Light: #dbeafe (Hover backgrounds)
├── Dark: #1e40af (Pressed state)
└── Gradient: #3b82f6 → #8b5cf6 (Buttons, Headers)

Secondary Purple: #8b5cf6 (Accents, Gradients)
├── Light: #ede9fe (Background)
└── Dark: #6d28d9 (Pressed state)

Sky Blue: #0ea5e9 (Secondary accents)
Success Green: #16a34a (Positive actions, Confirmed)
Danger Red: #dc2626 (Destructive, Errors)
Warning Orange: #f59e0b (Warnings, Cautions)
```

#### Neutral Colors:
```
White: #ffffff (Cards, Backgrounds)
Light Gray: #f8fafc (Page backgrounds)
Medium Gray: #e2e8f0 (Borders)
Dark Gray: #64748b (Muted text)
Black: #0f172a (Main text)
```

### Typography Hierarchy

#### Heading Levels:
```
H1 - 32px bold   (Desktop Page Titles)
H2 - 24px bold   (Desktop Sections)
H3 - 18px bold   (Desktop Subsections)
H4 - 16px bold   (Mobile Headings)
```

#### Body Text:
```
Regular: 14px
Small: 12px
Tiny: 11px
Code: Courier New, 12px monospace
```

---

## 📱 Screen Layouts & Mockups

### 1. Login Screen (Mobile)
```
┌─────────────────────────────┐
│                             │
│    Logo [RTI]               │
│  📋 RTI Assistant          │
│  Right to Information      │
│  Made Easy                 │
│                             │
│  ┌─────────────────────┐    │
│  │ Email Address:      │    │
│  │ [_________________] │    │
│  └─────────────────────┘    │
│                             │
│  Select Your Role:          │
│  ┌────────┬────────┬──────┐│
│  │Citizen │  PIO   │ Auth.││
│  └────────┴────────┴──────┘│
│                             │
│  [ Login Button ]           │
│                             │
└─────────────────────────────┘
```

### 2. Dashboard (Desktop)
```
┌─────────────────────────────────────────────────┐
│ Header: RTI Assistant Dashboard                  │
├─────────────────────────────────────────────────┤
│ [Search Box.................]  [Filters]        │
├─────────────────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│ │Stat1 │ │Stat2 │ │Stat3 │ │Stat4 │           │
│ │ 24   │ │ 12   │ │  8   │ │  4   │           │
│ └──────┘ └──────┘ └──────┘ └──────┘           │
├─────────────────────────────────────────────────┤
│                                                  │
│ Recent Requests                   Quick Stats   │
│ ┌───────────────────────────┐    ┌──────────┐  │
│ │ ✓ Request #001           │    │Stat Box  │  │
│ │   Department: Education  │    │Total: 24 │  │
│ │   Status: Responded      │    ├──────────┤  │
│ ├───────────────────────────┤    │Pending:12│  │
│ │ ⏳ Request #002           │    ├──────────┤  │
│ │   Department: Water      │    │Overdue: 4│  │
│ │   Status: Awaiting       │    └──────────┘  │
│ ├───────────────────────────┤                   │
│ │ 🚨 Request #003          │                   │
│ │   Department: Land       │                   │
│ │   Status: Overdue        │                   │
│ └───────────────────────────┘                   │
│                                                  │
└─────────────────────────────────────────────────┘
```

### 3. AI Chatbot Interface (DraftAssistant)
```
┌──────────────────────────────────────────────────┐
│ ╔══════════════════════════════════════════════╗ │
│ ║  🤖 RTI Drafting Assistant                   ║ │
│ ║  Smart help for RTI requests                 ║ │
│ ╚══════════════════════════════════════════════╝ │
├──────────────────────────────────────────────────┤
│                                                   │
│ Templates              AI Suggestions            │
│ ────────────          ───────────────            │
│ ☐ Standard RTI        💡 Department:             │
│ ☐ Appeal RTI          → Public Works             │
│ ☐ FIR RTI             → PIO Contact Details      │
│ ☐ Follow-up           → Similar RTIs             │
│                                                   │
│ Draft Editor          Preview Panel              │
│ ────────────          ──────────────             │
│ [B] [I] [U] [...]     Your Draft:                │
│                       Subject: [Shows preview]   │
│ ┌──────────────────┐  Department: [Shows value] │
│ │                  │  Body:                      │
│ │ Enter your       │  [Shows formatted draft]   │
│ │ request text     │                            │
│ │                  │                            │
│ │ Characters: 234  │                            │
│ │ Remaining: 1766  │                            │
│ └──────────────────┘                            │
│                                                   │
│ [Save Draft] [Submit] [Clear] [Regenerate]      │
│                                                   │
└──────────────────────────────────────────────────┘
```

### 4. Request Tracker (Appeal Generation)
```
┌─────────────────────────────────────────────────┐
│ 📊 Request Tracker & Appeal Manager              │
│ [All] [Pending] [Appealed] [Closed] [Overdue]   │
├─────────────────────────────────────────────────┤
│                                                  │
│ Timeline Visualization:                         │
│                                                  │
│ ◆ Filed          ◆ Awaiting      ◆ Appealed    │
│ │ Jan 1          │ Jan 20        │ Feb 4       │
│ │ Request        │ Response Due  │ Appeal Filed│
│ │ Submitted      │ 10 days left  │ Generated  │
│ │                │ [Auto Appeal] │            │
│ ↓                ↓               ↓             │
│ ════════════════════════════════════           │
│                                                  │
│ Request List:                                   │
│ ┌──────────────────────────────────────────┐   │
│ │ 📋 RTI #001 - School Education           │   │
│ │ Status: ⏳ Awaiting (9 days left)         │   │
│ │ [📝 View] [🚀 Generate Appeal] [📄 PDF]  │   │
│ ├──────────────────────────────────────────┤   │
│ │ 📋 RTI #002 - Water Supply               │   │
│ │ Status: 🚨 Overdue (5 days)              │   │
│ │ [📝 View] [⚡ Generate Appeal] [📄 PDF]  │   │
│ └──────────────────────────────────────────┘   │
│                                                  │
│ Activity Feed:                                   │
│ 👤 You submitted RTI #001 (Feb 1, 10:30 AM)    │
│ 👤 PIO acknowledged RTI #001 (Feb 2, 02:15 PM)│
│ 🤖 Auto-appeal generated (Feb 4, 09:00 AM)    │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Interaction Patterns

### Button States:
```
Primary Button:
Normal:   [Gradient Blue → Purple] White text
Hover:    Slightly darker, elevated shadow
Active:   Darker gradient, pressed effect
Disabled: 50% opacity, no pointer

Secondary Button:
Normal:   White background, Border, Gray text
Hover:    Light blue background
Active:   Blue text, blue border
Disabled: 50% opacity
```

### Card Interactions:
```
Normal State:
┌──────────────┐
│ Card Content │
│ Border: gray │
└──────────────┘

Hover State:
┌──────────────┐
│ Card Content │─── Slight lift
│ Border: blue │─── Blue border
│ Shadow added │─── Increased shadow
└──────────────┘

Selected State:
┌──────────────┐
│ Card Content │─── Blue background
│ Border: blue │─── Thick blue border
│ Highlight    │─── Highlight color
└──────────────┘
```

### Form Elements:
```
Input Field:
Normal:   └─────────────┘ Gray border, white bg
Focused:  └─────────────┘ Blue border, slight glow
Error:    └─────────────┘ Red border, error icon
Success:  └─────────────┘ Green border, check icon

Status Badges:
✓ Submitted   → Green background, white text
⏳ Awaiting    → Yellow background, dark text
🔴 Overdue    → Red background, white text
🚨 Appealed   → Purple background, white text
✔ Closed      → Gray background, white text
```

---

## 📐 Spacing & Layout Grid

### Base Unit: 12px
```
Spacing Scale:
xs: 6px    (2 units)
sm: 12px   (1 unit)
md: 16px   (1.33 units)
lg: 20px   (1.67 units)
xl: 28px   (2.33 units)
2xl: 40px  (3.33 units)
```

### Component Padding:
```
Card:           20px
Container:      28px
Input/Button:   12px 14px
Section:        20px 28px
Header:         14px 28px
```

### Gap Values:
```
Items within container: 12px
Components:            16px
Sections:             20px
Major sections:       28px
```

---

## 🎬 Animation & Transitions

### Timing Functions:
```css
Fast:    0.15s ease-in-out (Small interactions)
Normal:  0.3s ease-in-out  (Component changes)
Slow:    0.6s ease-in-out  (Page transitions)
```

### Common Animations:
```
Fade In:        opacity: 0 → 1 (300ms)
Scale Up:       transform: scale(0.95) → 1 (300ms)
Slide In:       transform: translateY(10px) → 0 (300ms)
Rotate:         transform: rotate(360deg) (600ms)
Bounce:         keyframe bounce animation (1.4s)
Pulse:          opacity animation (2s infinite)
```

---

## 📱 Responsive Breakpoints

### Desktop (1200px+)
```
Layout:     2-3 columns
Typography: Full sizes
Spacing:    Full spacing
Cards:      Large, side panels visible
Tables:     Full width, all columns visible
Navigation: Horizontal, expanded
```

### Tablet (768px - 1199px)
```
Layout:     1-2 columns
Typography: 90% of desktop
Spacing:    75% of desktop
Cards:      Medium, sidebars stacked
Tables:     Scrollable
Navigation: Condensed
```

### Mobile (480px - 767px)
```
Layout:     1 column (full width)
Typography: 85% of desktop
Spacing:    60% of desktop
Cards:      Full width
Tables:     Horizontal scroll
Navigation: Bottom sheet / hamburger
Buttons:    Full width, taller
```

### Small Mobile (<480px)
```
Layout:     Single column
Typography: 75% of desktop
Spacing:    50% of desktop
Cards:      Minimal padding
Images:     Optimized
Navigation: Mobile optimized
Font sizes: Strictly limited
```

---

## 🎨 Dark Mode Ready

(All components can support dark mode)

```css
Dark Mode Colors:
--primary: #3b82f6 (unchanged)
--accent: #0ea5e9 (unchanged)
--bg: #0f1419 (dark background)
--card: #1a202c (dark card)
--text: #f8fafc (light text)
--muted: #94a3b8 (muted light)
--border: #334155 (dark border)
```

---

## ♿ Accessibility Features

### WCAG 2.1 Level AA Compliance

✓ Color contrast (4.5:1 for text)
✓ Semantic HTML structure
✓ ARIA labels where needed
✓ Keyboard navigation support
✓ Focus indicators visible
✓ Touch targets 44px minimum
✓ Screen reader friendly
✓ Reduced motion support
✓ Error messages clear
✓ Form labels associated

---

## 🖼️ Visual Style Guide

### Shadows:
```
Subtle:   0 1px 3px rgba(0,0,0,0.1)
Light:    0 2px 8px rgba(0,0,0,0.06)
Medium:   0 4px 12px rgba(0,0,0,0.08)
Heavy:    0 8px 24px rgba(0,0,0,0.1)
```

### Border Radius:
```
Subtle:   4px  (Minimal rounding)
Small:    6px  (Form inputs)
Medium:   8px  (Buttons, small cards)
Large:    10px (Cards, containers)
Full:     12px+ (Rounded corners)
```

### Gradients:
```
Primary:  #3b82f6 → #8b5cf6 (Blue to Purple)
Success:  #16a34a → #22c55e (Dark to Light Green)
Warning:  #f59e0b → #fbbf24 (Orange gradient)
Danger:   #dc2626 → #ef4444 (Red gradient)
Info:     #0ea5e9 → #3b82f6 (Sky to Blue)
```

---

## 📊 Component Usage Examples

### Status Badge Examples:
```
[✓ Submitted]    ← Green, checkmark
[⏳ Awaiting]     ← Yellow, clock icon
[🔴 Overdue]     ← Red, alert
[🚀 Appealed]    ← Purple, sent
[✔ Closed]       ← Gray, complete
```

### Icon Set Recommended:
```
📋 Document      ✓ Check/Success    🔔 Notification
⏳ Time/Waiting   ✉️ Message         💡 Idea/Tip
🚀 Launch        🎯 Target          ❌ Error/Close
📊 Analytics     👤 User            🔐 Security
📱 Mobile        🖥️ Desktop         📧 Email
🔗 Link          ⚙️ Settings        🏃 Action
```

---

**Design System Version:** 1.0  
**Last Updated:** February 4, 2026  
**Framework:** React + CSS Grid/Flexbox  
**Mobile First:** ✅ Yes  
**Accessibility:** ✅ WCAG 2.1 AA
