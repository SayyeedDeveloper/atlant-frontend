export interface Product {
  id: number;
  title: string;
  image: string;
  category?: string;
}

export const catalogProducts: Product[] = [
  { id: 1, title: "Фильтры очистки воды", image: "/images/Catalog1.webp" },
  { id: 2, title: "Запасные части для фильтров", image: "/images/Catalog5.webp" },
  { id: 3, title: "Фильтры воды для автомоек", image: "/images/Catalog3.webp" },
  { id: 4, title: "Фильтры воды для промышленных предприятий", image: "/images/Catalog10.webp" },
  { id: 5, title: "Принтеры даты", image: "/images/Catalog2.webp" },
  { id: 6, title: "Фильтры для теплиц", image: "/images/Catalog7.webp" },
  { id: 7, title: "Этикетировочные аппараты", image: "/images/Catalog6.webp" },
  { id: 8, title: "Активированный уголь", image: "/images/Catalog9.webp" },
];

export const recommendedProducts: Product[] = [
  { id: 1, title: "Фильтр воды", image: "/images/Recomend1.webp" },
  { id: 2, title: "Активированный уголь", image: "/images/Recomend2.webp" },
  { id: 3, title: "Фильтр предочистки", image: "/images/Recomend3.webp" },
  { id: 4, title: "Принтер даты", image: "/images/Recomend4.webp" },
  { id: 5, title: "Этикетировочный аппарат", image: "/images/Recomend5.webp" },
];

export const categoryProducts: Product[] = [
  { id: 1, title: "Фильтры очистки воды", image: "/images/Category1.webp", category: "Водоподготовка" },
  { id: 2, title: "Запасные части для фильтров", image: "/images/Category2.webp", category: "Комплектующие" },
  { id: 3, title: "Фильтры воды для автомоек", image: "/images/Category3.webp", category: "Автомойки" },
  { id: 4, title: "Промышленные фильтры", image: "/images/Category4.webp", category: "Промышленность" },
  { id: 5, title: "Принтеры даты", image: "/images/Category5.webp", category: "Оборудование" },
  { id: 6, title: "Фильтры для теплиц", image: "/images/Category6.webp", category: "Сельское хозяйство" },
];

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/Gallery1.webp", alt: "Проект 1" },
  { id: 2, src: "/images/Gallery2.webp", alt: "Проект 2" },
  { id: 3, src: "/images/Gallery3.webp", alt: "Проект 3" },
  { id: 4, src: "/images/Gallery4.webp", alt: "Проект 4" },
  { id: 5, src: "/images/Gallery5.webp", alt: "Проект 5" },
  { id: 6, src: "/images/Gallery6.webp", alt: "Проект 6" },
  { id: 7, src: "/images/Gallery7.webp", alt: "Проект 7" },
  { id: 8, src: "/images/Gallery8.webp", alt: "Проект 8" },
];

export const carouselImages: string[] = [
  "/images/skipphoto1.jpg",
  "/images/skipphoto2.webp",
  "/images/skipphoto3.webp",
  "/images/skipphoto4.webp",
  "/images/skipphoto5.webp",
];
