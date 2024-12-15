import { IWidget } from "../types/widget.interface";
import { ApiClient } from "./apiClient";

const apiClient = ApiClient.getInstance();

export const getWidgets = async () => {
  const response = await apiClient.get("/product-widgets");
  return response as unknown as IWidget[];
};
