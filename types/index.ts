export interface CustomUser {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  hashedPassword: string | null;
  createdAt: string;
  updatedAt: string;
  favoriteIds: string[];
}

export interface AddDataType {
  category: string;
  locationValue: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  imageSrc: string;
  description: string;
  title: string;
}
