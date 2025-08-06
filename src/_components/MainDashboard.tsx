"use client";

import CaretDown from "@/_icons/caret-down";
import Ellipses from "@/_icons/ellipses";
import Image from "next/image";
import SummaryCard from "./SummaryCard";
import StatusBadge from "./StatusBadge";
import TransactionRow from "./TransactionRow";
import Loading from "./Loading";
import NoData from "./NoData";
import { useEffect, useState } from "react";

type Tab = "Overview" | "Transactions";
type SortField = "date" | "remark" | "amount";
type SortDirection = "asc" | "desc";

interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

const MainDashboard = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2023-10-01",
      remark: "Salary",
      amount: 3000,
      currency: "USD",
      type: "Credit",
    },
    {
      id: "2",
      date: "2023-10-02",
      remark: "Groceries",
      amount: -150,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "3",
      date: "2023-10-03",
      remark: "Gym Membership",
      amount: -50,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "4",
      date: "2023-10-04",
      remark: "Dinner",
      amount: -40,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "5",
      date: "2023-10-05",
      remark: "Movie Tickets",
      amount: -30,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "6",
      date: "2023-10-06",
      remark: "Rent",
      amount: -1200,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "7",
      date: "2023-10-07",
      remark: "Utilities",
      amount: -100,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "8",
      date: "2023-10-08",
      remark: "Car Payment",
      amount: -400,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "9",
      date: "2023-10-09",
      remark: "Insurance",
      amount: -200,
      currency: "USD",
      type: "Debit",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleTabChange = (tab: Tab) => setActiveTab(tab);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];

    if (typeof valA === "number" && typeof valB === "number") {
      return sortDirection === "asc" ? valA - valB : valB - valA;
    }

    if (typeof valA === "string" && typeof valB === "string") {
      return sortDirection === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return 0;
  });

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="p-4 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
      <aside>
        <nav>
          <ul className="flex md:flex-col gap-2">
            <li className="w-full md:w-[320px] h-9 bg-[#38677629] text-[#3A6C7B] rounded-2xl px-4 py-1.5 font-medium text-[15px]">
              Dashboard
            </li>
            <li className="pl-2 text-[#1B2528] font-medium text-[15px]">
              Transactions
            </li>
            <li className="pl-2 text-[#1B2528] font-medium text-[15px]">
              Report
            </li>
            <li className="pl-2 text-[#1B2528] font-medium text-[15px]">
              Settings
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex gap-2 items-center flex-wrap">
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl md:text-4xl">Wallet Ledger</p>
              <CaretDown />
            </div>
            <StatusBadge label="Active" />
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-[#4B8B9F] rounded-2xl text-[15px] text-[#020303] py-1 px-4">
              Share
            </button>
            <div className="bg-[#FCFDFD] border border-[#49656E33] w-9 h-9 rounded-2xl p-1">
              <Ellipses />
            </div>
          </div>
        </div>

        {/* Avatars */}
        <div className="flex flex-wrap gap-4 items-center mt-6">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, idx) => (
              <Image
                key={idx}
                src="/assets/avatar.png"
                width={32}
                height={32}
                alt="Avatar"
                className="rounded-full border-[1.5px] border-transparent"
              />
            ))}
          </div>
          <p className="text-sm text-[#15272D9E]">
            Ava, Liam, Noah + 12 others
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b mt-8">
          <div className="flex gap-4 text-sm">
            {["Overview", "Transactions"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab as Tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8">
          <h2 className="font-bold text-xl md:text-2xl mb-4">Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <SummaryCard title="Total Balance" value="$12,345" change="+5%" />
            <SummaryCard title="Total Credits" value="$7,890" change="+3%" />
            <SummaryCard title="Total Debits" value="$4,455" change="-2%" />
            <SummaryCard title="Transactions" value="150" change="+10%" />
          </div>
        </div>

        {/* Table */}
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-[600px] w-full text-sm">
            <thead className="text-left">
              <tr>
                <th
                  onClick={() => handleSort("date")}
                  className="cursor-pointer px-2 py-2"
                >
                  Date{" "}
                  {sortField === "date" &&
                    (sortDirection === "asc" ? "▲" : "▼")}
                </th>
                <th
                  onClick={() => handleSort("remark")}
                  className="cursor-pointer px-2 py-2"
                >
                  Remark{" "}
                  {sortField === "remark" &&
                    (sortDirection === "asc" ? "▲" : "▼")}
                </th>
                <th
                  onClick={() => handleSort("amount")}
                  className="cursor-pointer px-2 py-2"
                >
                  Amount{" "}
                  {sortField === "amount" &&
                    (sortDirection === "asc" ? "▲" : "▼")}
                </th>
                <th className="px-2 py-2">Currency</th>
                <th className="px-2 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {activeTab === "Transactions" &&
                (loading ? (
                  <tr>
                    <td colSpan={5}>
                      <Loading />
                    </td>
                  </tr>
                ) : sortedTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={5}>
                      <NoData />
                    </td>
                  </tr>
                ) : (
                  sortedTransactions.map((tx) => (
                    <TransactionRow
                      key={tx.id}
                      date={tx.date}
                      remark={tx.remark}
                      amount={`$${Math.abs(tx.amount).toLocaleString()}`}
                      currency={tx.currency}
                      type={tx.type}
                    />
                  ))
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MainDashboard;
