import React, {useState, useEffect} from "react";
import EzReactTable from 'ez-react-table';

export default function App(){
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    try{
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    } catch(e){
      alert("Api error");
    }
  }

}