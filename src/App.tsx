import Main from "./routes";
import { useState, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { getUser, getWallet, getTransactions } from "./services/services";

function App() {
  const [user, setUser] = useState<object | null>(null);
  const [transactions, setTransactions] = useState<Array<object> | null>(null);
  const [wallet, setWallet] = useState<object | null>(null);

  const fetchData = async () => {
    const res = await Promise.all([getUser(), getWallet(), getTransactions()]);
    setUser(res[0]);
    setWallet(res[1]);
    setTransactions(res[2]);
    return;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ user, transactions, wallet }}>
      <Main />
    </AppContext.Provider>
  );
}

export default App;
