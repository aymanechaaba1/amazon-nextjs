interface SearchResult {
  pos: number;
  url: string;
  asin: string;
  price: number;
  title: string;
  rating: number;
  currency: string;
  url_image: string;
  best_seller: false;
  price_upper: number;
  is_sponsored: false;
  manufacturer: string;
  pricing_count: number;
  reviews_count: number;
  is_amazons_choice: boolean;
}

interface ProductDetails {
  asin: string;
  batteries: string;
  item_weight: string;
  manufacturer: string;
  customer_reviews: string;
  best_sellers_rank: string;
  country_of_origin: string;
  item_model_number: string;
  product_dimensions: string;
  date_first_available: string;
  is_discontinued_by_manufacturer: string;
}

interface Product {
  url: string;
  asin: string;
  page: number;
  price: number;
  stock: string;
  title: string;
  coupon: string;
  images: string[];
  rating: number;
  category: Category[];
  currency: string;
  delivery: {
    date: {
      by: string;
      from: string | null;
    };
    type: string;
  }[];
  _warnings: string[];
  deal_type: string;
  page_type: string;
  price_sns: number;
  variation: {
    asin: string;
    selected: boolean;
    dimensions: {
      Color: string;
      Capacity: string;
    };
  }[];
  has_videos: boolean;
  sales_rank: SalesRank[];
  top_review: string;
  asin_in_url: string;
  description: string;
  price_upper: number;
  pricing_str: string;
  pricing_url: string;
  discount_end: string;
  manufacturer: string;
  max_quantity: number;
  price_buybox: number;
  product_name: string;
  bullet_points: string;
  is_addon_item: boolean;
  price_initial: number;
  pricing_count: number;
  reviews_count: number;
  sns_discounts: any[]; // You may specify the actual type here
  developer_info: any[]; // You may specify the actual type here
  lightning_deal: any; // You may specify the actual type here
  price_shipping: number;
  is_prime_pantry: boolean;
  product_details: ProductDetails;
  is_prime_eligible: boolean;
  parse_status_code: number;
  product_dimensions: string;
  refurbished_product: RefurbishedProduct;
  answered_questions_count: number;
  rating_stars_distribution: RatingStarsDistribution[];
}

interface Review {
  id: string;
  title: string;
  author: string;
  rating: number;
  content: string;
  timestamp: string;
  is_verified: boolean;
  product_attributes: string;
}

interface ReviewsResponse {
  results: {
    content: Content;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    status_code: number;
    parser_type: string;
  }[];
}

interface Question {
  title: string;
  votes: number;
  answers: Answer[];
}

interface Answer {
  author: string;
  content: string;
  timestamp: string;
}

interface BestSellerProduct {
  pos: number;
  url: string;
  asin: string;
  price: number;
  title: string;
  rating: number;
  currency: string;
  is_prime: boolean;
  price_str: string | '';
  price_upper: number;
  ratings_count: number;
}
