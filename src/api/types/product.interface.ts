export interface IProduct {
  map(
    arg0: (obj: IProduct) => import("react/jsx-runtime").JSX.Element,
  ): import("react").ReactNode;
  id: string;
  title: string;
  price: number;
  description: string[];
  userId: string;
  images: string[];

  createdAt: Date;
  updatedAt: Date;
}
