export interface GFGenre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface GFGame {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  released: string;
  genres: GFGenre[];
}

export interface ApiResponse {
  results: GFGame[];
}
