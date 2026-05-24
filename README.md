# Fyutr – Student Finance Dashboard

A static web app for student financial management. Built with HTML, CSS, JavaScript, and Chart.js.

## 🔗 Live Demo
> Replace with your GitHub Pages URL after deployment:
> `https://cc8826.github.io/fyutr/`

## 🔐 Demo Login
| Field    | Value                  |
|----------|------------------------|
| Email    | student@fyutr.com      |
| Password | fyutr123               |

## 📂 Project Structure
```
fyutr/
├── index.html           ← Login page
├── dashboard.html       ← Main dashboard
├── transactions.html    ← All transactions (searchable + filterable)
├── budget.html          ← Budget planner with charts
├── goals.html           ← Saving goals tracker
├── analytics.html       ← Spending analytics
├── transfermoney.html   ← Send / QR / Receive
├── notifications.html   ← Alerts
├── settings.html        ← User preferences
├── assets/
│   ├── css/style.css
│   └── js/main.js       ← Shared auth, sidebar, dark mode, counters
└── data/
    ├── transactions.json
    ├── budget.json
    └── goals.json
```

## 🚀 Deploy to GitHub Pages
1. Create a new GitHub repo (e.g. `fyutr`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages → Source: main branch / root**
4. Your site will be live at `https://cc8826.github.io/fyutr/`

## ✨ Features
- Login with JS credential check
- Persistent dark mode (localStorage)
- Mobile-responsive sidebar
- Chart.js: doughnut, line, bar charts
- Transactions search + filter
- Data loaded from JSON files via fetch()
- Auth guard on all pages (redirects to login if not authenticated)

## 📘 Documentation
Project Title & Description: Fyutr – Student Finance Dashboard, a static web app for student financial management.

Features Included: Login system, dark mode, responsive design, charts, transaction filters, budget planner, savings goals, notifications.

Demo Login Instructions: Use student@fyutr.com and password fyutr123.

Frameworks/Libraries Used:

Bootstrap 5 (UI components & responsive grid)

Tailwind CSS (utility‑first styling)

Chart.js (data visualization)

Vanilla JavaScript (auth, fetch, interactivity)
