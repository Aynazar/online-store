export interface ICategory {
  id: string;
  title: string;
  description: string;
  images: string[];
  userId: string;

  createdAt: string;
  updatedAt: string;
}

export type ICategoryPayload = {
  title: string;
  description: string;
  images: string[] | undefined;
};
