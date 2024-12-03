/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import "./financial-record.css"
import { useUser } from '@clerk/clerk-react';

const FinancialRecordForm = () => {
    const {user} = useUser();
    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [method, setMethod] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newRecord = {
            userId: user?.id,
            date: new Date(),
            description: description,
            amount: parseFloat(amount),
            category: category,
            method: method
        }

        // addRecord(newRecord)
        setDescription("")
        setAmount("")
        setCategory("")
        setMethod("")
    }



  return (
    <div className='form-container'>
      <form>
        <div className="form-field">
            <label>Description:</label>
            <input type="text" required className='input' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-field">
            <label>Amount:</label>
            <input type="text" required className='input' value={amount} onChange={(e) => setAmount(e.target.value)}  />
        </div>
        <div className="form-field">
            <label>Category:</label>
            <select required className='input' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Salary">Salary</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="form-field">
            <label>Payment method:</label>
            <select required className='input' value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="">Select a payment method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </select>
        </div>
        <button type='submit' className='button'>
            Add Record
        </button>
      </form>
    </div>
  )
}

export default FinancialRecordForm
