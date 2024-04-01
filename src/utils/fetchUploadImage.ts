import { categoryService } from "@/api/services/category/category.service.ts";
import { IImage } from "@/components/main/Product/ProductCreate.tsx";

export const fetchUploadImage = async (images: IImage[]) => {
  let results = [];
  for (let i = 0; i < images.length; i++) {
    const file = images[i].file;
    const data = await categoryService.uploadImage(file);
    const url = `http://localhost:8888/images/${data[0].filename}`;
    results.push(url);
  }
