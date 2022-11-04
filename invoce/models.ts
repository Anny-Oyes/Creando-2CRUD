import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  id: String,
  nameStore: String,
  date: String,
  amount: String,
  unitPrice: String,
  priceTotal: Number,
});

export const Invoice = mongoose.model("Invoice", invoiceSchema);
