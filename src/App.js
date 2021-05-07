import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseBalance from "./components/ExpenseBalance";
import Form from "./components/Form";
import Transaction from "./components/Transaction";
import { TransactionProvider } from "./context/TransactionContext";

function App() {
  return (
    <div>
      <TransactionProvider>
        <Header></Header>
        <section className="mainContainer">
          <Balance></Balance>
          <ExpenseBalance></ExpenseBalance>
          <Form></Form>
          <Transaction></Transaction>
        </section>
      </TransactionProvider>
    </div>
  );
}

export default App;
