export interface CategoriesType {
  id: string;
  name: string;
}
export interface AboutType {
  index: string;
}
export interface BannerSwipers {
  id: string;
  name: string;
  image: string;
  price: string;
  images: string;
  discount_price: string;
  reviews: string;
  price_per_month: string;
  months: string;
  isNew: string;
}
interface PageProps {
  params: {
    id: string;
  };
}
