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

  return `${
    Months[trxdate.getMonth()]
  }, ${trxdate.getDate()} ${trxdate.getFullYear()}`;
};

export { getUserInitials, isTransactionDebit, formatDate };
export type { UserData };
