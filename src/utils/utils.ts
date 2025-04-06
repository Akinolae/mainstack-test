/* eslint-disable @typescript-eslint/no-explicit-any */
interface UserData {
  first_name: string;
  last_name: string;
}

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const filterOptions = [
  { label: "Today", value: "today" },
  { label: "Last 7 days", value: "last_7_days" },
  { label: "This Month", value: "this_month" },
  { label: "Last 3 months", value: "last_3_months" },
  { label: "This Year", value: "this year" },
  { label: "Last year", value: "last_year" },
  { label: "All time", value: "all_time" },
];

const transactionTypeOptions = [
  { label: "Store Transactions", value: "store" },
  { label: "Withdrawals ", value: "Withdrawals" },
  { label: "Chargebacks", value: "Chargebacks" },
  { label: "Cashbacks", value: "Cashbacks" },
  { label: "Refer & Earn", value: "earn" },
];

enum TransactionType {
  CREDIT = '"deposit"',
  DEBIT = "withdrawal",
}

const getUserInitials = (data: any) => {
  const firstName = data?.first_name;
  const lastName = data?.last_name;
  return `${getFirstCharacter(firstName || "")}${getFirstCharacter(
    lastName || ""
  )}`;
};

const getFirstCharacter = (value: string) => {
  const firstCharacter = value.charAt(0).toUpperCase();
  return firstCharacter;
};

const isTransactionDebit = (transaction: any) => {
  return new RegExp(TransactionType.DEBIT).test(transaction.type);
};

const formatDate = (date: string) => {
  const trxdate = new Date(date);

  return `${Months[trxdate.getMonth()].substring(
    0,
    3
  )} ${trxdate.getDate()}, ${trxdate.getFullYear()}`;
};

const sortTransactions = (transactions: any[]) => {
  return transactions.sort((trx1, trx2) => {
    return new Date(trx2.date).getTime() - new Date(trx1.date).getTime();
  });
};

const formatMoney = ({ number, noDecimal, decimals, uniformDecimal }: any) => {
  number = typeof number === "number" ? number : Number(number);
  number = new RegExp(/-?\d+\.{1}\d+/).test(number)
    ? number.toFixed(noDecimal ? 0 : decimals || 2)
    : number;
  if (uniformDecimal) {
    number = Number(number).toFixed(decimals);
  }
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const removeDuplicates = (transactions: any[]) => {
  const uniqueTransactionsMap = new Map();

  transactions.forEach((transaction) => {
    const dateKey = Object.keys(transaction)[0];
    const amount = transaction[dateKey];

    const compositeKey = `${dateKey}|${amount}`;

    if (!uniqueTransactionsMap.has(compositeKey)) {
      uniqueTransactionsMap.set(compositeKey, transaction);
    }
  });

  return Array.from(uniqueTransactionsMap.values());
};

export {
  formatDate,
  formatMoney,
  filterOptions,
  getUserInitials,
  sortTransactions,
  removeDuplicates,
  isTransactionDebit,
  transactionTypeOptions,
};
export type { UserData };
