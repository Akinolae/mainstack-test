import axios from "axios";

const getUser = async () => {
  const response = await axios.get("https://fe-task-api.mainstack.io/user");
  return response.data;
};

const getWallet = async () => {
  const response = await axios.get("https://fe-task-api.mainstack.io/wallet");
  return response.data;
};

const getTransactions = async () => {
  const response = await axios.get(
    "https://fe-task-api.mainstack.io/transactions"
  );
  return response.data;
};
export { getUser, getWallet, getTransactions };
