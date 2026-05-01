import { api } from "./api";

export const getDevices = async () => {
  const res = await api.get("/devices");
  return res.data;
};