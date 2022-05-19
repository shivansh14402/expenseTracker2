import React from "react";
import Card from "../../UI/Card";
import ExpenseDate from "./ExpenseDate";


const ExpenseCell = props => {
    return(
        <Card>
            <div></div>
            <div>{props.title}</div>
            <div>{props.amount}</div>
        </Card>
    )
}