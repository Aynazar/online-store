export type TReceiptsData = {
  id: number;
  title: string;
  description: string;
  collection: "JBL" | "iPhone" | "e-scooter";
  previewUrl: string;
};

export const DReceipts: TReceiptsData[] = [
  {
    id: 1,
    title: "Поступление новых самокатов",
    description: "Электротранспорт снова в моде",
    collection: "e-scooter",
    previewUrl:
      "https://images.unsplash.com/photo-1589308454676-06c69786e24c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RybyUyMHNjb290ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Музыка всегда с тобой, где бы ты не был",
    description: "Смотри свежую коллекцию JBL",
    collection: "JBL",
    previewUrl:
      "https://images.unsplash.com/photo-1632073383420-01461da1e082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SkJMfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Телефон - вторая важная вещь по значимости",
    description: "Смотри новую серию iPhone 14",
    collection: "iPhone",
    previewUrl:
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlQaG9uZSUyMDE0fGVufDB8fDB8fHww",
  },
];
