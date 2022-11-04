import {Invoice} from "./models";
import {Invoice as AInvoice} from "./interface";
import {ulid} from "ulid";

const list = async () => {
  return await Invoice.find();
};

const getOne = async (id: string) => {
  return await Invoice.findOne({id});
};
const store = async (data: AInvoice) => {
  const id = ulid();

  const invoices = new Invoice({
    nameStore: data.nameStore,
    date: data.date,
    amount: data.amount,
    unitPrice: data.unitPrice,
    priceTotal: data.priceTotal,
    id,
  });

  await invoices.save();

  return invoices;
};
const destroy = async (id: String) => {
  return await Invoice.deleteOne({id});
};

const update = async (id: string, data: AInvoice) => {
  const models = await Invoice.findOneAndUpdate({id}, data, {new: true});
  return models;
};

export default {
  list,
  getOne,
  store,
  delete: destroy,
  update,
};
