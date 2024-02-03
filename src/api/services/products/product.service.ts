import instance from "@/api/core/instance.ts";
import { IProduct } from "@/api/types/product.interface.ts";

export const productService = {
  async getAllProducts() {
    const data = instance.get<IProduct>("product/all");

    return data;
  },
  async getProductById(id: string) {
    const { data } = await instance.get(`/product/${id}`);

    return data;
  },
};
