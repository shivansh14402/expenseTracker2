import React from "react";
import classes from './ExpenseDate.module.css'
import Card from "../../UI/Card";

const ExpenseDate = props => {

    const month = props.date.toLocaleString("en-US", { month: "long" })
    const day = props.date.toLocaleString("en-US", { day: "2-digit" })
    const year = props.date.getFullYear()

    return (
        <Card>
            <div className={classes.container}>
                <div className={classes.day}>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
        </Card>
    )
}

export default ExpenseDate