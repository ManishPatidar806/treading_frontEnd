import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import Home from "./page/Home/Home";
import Navbar from "./page/Navbar/Navbar";
import Portfolio from "./page/Portfolio/Portfolio";
import Activity from "./page/Activity/Activity";
import Wallet from "./page/Wallet/Wallet";
import Withdrawal from "./page/Withdrawal/Wihtdrawal";
import PaymentDetails from "./page/PaymentsDetails/PaymentDetails";
import SearchCoin from "./page/Search/SearchCoin";
import WithdrawalAdmin from "./page/Admin/WithdrawalAdmin";
import Notfound from "./page/NotFound/Notfound";
import Profile from "./page/Profile/Profile";
import WatchList from "./page/WatchList/WatchList";
import StockDetails from "./page/StockDetails/StockDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/market/:id" element={<StockDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/watchlist" element={<WatchList />} />

        <Route path="/search_coin" element={<SearchCoin />} />
        <Route path="/withdrawal_admin" element={<WithdrawalAdmin />} />

        <Route path="/*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
