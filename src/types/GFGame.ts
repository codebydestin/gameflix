export interface GFGame {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  released: string;
}

export interface ApiResponse {
  results: GFGame[];
}
