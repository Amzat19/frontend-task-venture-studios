# FinTrack Dashboard

FinTrack is a responsive and interactive financial dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

## Features

- **Dynamic Transaction Rendering**: Loop through transaction data and render clean `TransactionRow` components dynamically.
- **Summary Dashboard**: Display totals and percentage changes for balances, credits, debits, and transaction counts using the `DashboardSummary` interface.
- **Sortable Transactions**: Users can sort transactions by date by clicking on the arrow on the table to switch between ascending and descending.
- **Responsive Design**: Fully responsive layout with Tailwind’s `sm:`, `md:`, `lg:`, and `xl:` breakpoints.
- **Mobile-First Header**: The header is fully responsive with icons and profile image that adapt to smaller screens.
- **Loading & Empty States**: Built-in `<Loading />` and `<NoData />` components enhance user experience during data fetching and when no data is available.

---

## Project Structure

```
src/
├── _components/ # Reusable UI components (e.g., TransactionRow, SummaryCard)
├── _icons/ # Custom SVG icon components (e.g., CaretDown, Menu, Logo)
├── _lib/ # types
└── app/ # Main page and route-based layout (Next.js 15 App Router)
```

---

## Data Interfaces

```ts
// Transaction interface
export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

// Dashboard Summary interface
export interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}
```

---

## 🧠 State Management

The dashboard manages:

- **Active Tab** – Tracks whether the user is viewing "Overview" or "Transactions".
- **Sort Direction** – Allows toggling between ascending and descending sorting for transactions based on dates.
- **Loading & Empty States** – State-driven rendering of `<Loading />` or `<NoData />` components.

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Amzat19/frontend-task-venture-studios

# Navigate into the project directory
cd frontend-task-venture-studios

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

---

## 🛠 Technologies Used

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Custom SVG Icons**
- **CSS Modules or Global CSS**

---

## 📱 Responsiveness

- Header and grid layouts are fully responsive.
- Transaction rows and summary cards adapt to all screen sizes.
