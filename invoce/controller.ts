import repository from "./repository";
import {Invoice} from "./interface";

const list = async () => {
  return await repository.list();
};
const getOne = async (id: string) => {
  const modelsInvoce = await repository.getOne(id);
  if (!modelsInvoce) throw new Error("--Invoice not found--");
  return modelsInvoce;
};

const store = async (data: any) => {
  if (!data.name) throw Error("--propiety name is missing--");
  const invoices = await repository.store(data);
  return invoices;
};

const destroy = async (id: string) => {
  const models = await repository.getOne(id);
  if (!models) throw new Error("Invoice no found");

  return await repository.delete(id);
};
const update = async (id: string, data: Invoice) => {
  const models = await repository.getOne(id);
  if (!models) throw new Error("Invoice not found");

  const modelUpdate = await repository.update(id, data);
  return modelUpdate;
};

export default {
  list,
  getOne,
  store,
  delete: destroy,
  update,
};
