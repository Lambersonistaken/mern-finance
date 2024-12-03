import mongoose from "mongoose";

interface FinancialRecord {
    userId: string,
    date: Date,
    description: string,
    amount: number,
    category: string,
    paymentMethod: string
}


const financialRecordSchema = new mongoose.Schema<FinancialRecord>({})