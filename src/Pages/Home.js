import React, {useState,useEffect} from "react";
import TrackBudget from "../Components/TrackBudget/TrackBudget";
import DataGrid from "../Components/DataGrid/DataGrid";
// import {rows} from "../Components/DataGrid/utils";
// import AddTransaction from '../Pages/AddTransaction'

// console.log("datagrid rows",rows);
// var x=JSON.parse(localStorage.getItem('smartcashdiary'));
const Home = ({handleAddNewTransaction,onDeleteTransaction}) => {
    const [income,setIncome]=useState(0);
    const [expense,setExpense]=useState(0);
    try{
        var x = JSON.parse(localStorage.getItem('smartcashdiary'));
        if (x==null){
          var initialLocalState=[]
        }
        else{
          initialLocalState=x;
        }
      }
      catch{
        initialLocalState = [];
      }
    const [transactions,setTransactions]=useState(initialLocalState);
    console.log(transactions)

    const saveState = () => {
        localStorage.setItem('smartcashdiary', 
            JSON.stringify(transactions));
      }
    

    const calculateExpenses=()=>{
        let income=0,expense=0;
        transactions.forEach((data)=>{
            if(data.transactionType==='income'){
                income+=data.amount;
            } else if(data.transactionType==='expense'){
                expense+=data.amount;
            }
        });
        setIncome(income);
        setExpense(expense);
    }

    const handleDeleteTransaction = id => {
        const deleteTransaction = transactions.filter((item) => item.transactionId != id);
        setTransactions(deleteTransaction);
        
    }
    saveState();
    React.useLayoutEffect(() => {
        let localState = JSON.parse(localStorage.getItem('smartcashdiary'));
        if (localState) {
            setTransactions(localState);
        } else {
            calculateExpenses();
        }
    }, []);

    React.useLayoutEffect(() => {
        calculateExpenses();
    }, [transactions]);


    return <div className="App">
        <TrackBudget income={income} expense={expense}  />
        <DataGrid transactions={transactions} onNewtransaction={handleAddNewTransaction} onDeleteTransaction={handleDeleteTransaction}/>
    </div>
};

export default Home;

