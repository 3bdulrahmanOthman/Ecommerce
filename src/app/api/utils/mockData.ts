import { CategoryProps, ProductProps, SubcategoryProps } from "@/types";
import { Status } from "@/lib/status";

export const categories: CategoryProps[] = [
  {
    id: "c1",
    name: "Electronics",
    slug: "electronics",
    image: null,
    description: "Latest gadgets and electronics.",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "c2",
    name: "Clothing",
    slug: "clothing",
    image: null,
    description: "Trendy and comfortable clothing.",
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2024-02-01"),
  },
  {
    id: "c3",
    name: "Home Appliances",
    slug: "home-appliances",
    image: null,
    description: "Essential home appliances and furniture.",
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    id: "c4",
    name: "Books",
    slug: "books",
    image: null,
    description: "A collection of books from various genres.",
    createdAt: new Date("2023-04-01"),
    updatedAt: new Date("2024-04-01"),
  },
];


export const products: ProductProps[] = [
  {
    id: "p1",
    name: "Smartphone Pro",
    description: "High-end smartphone with AI camera.",
    price: 999.99,
    stock: 50,
    sold: 30,
    status: Status.ACTIVE,
    categoryId: categories[0].id,
    images: [
      "https://example.com/images/smartphone-1.jpg",
      "https://example.com/images/smartphone-2.jpg",
      "https://example.com/images/smartphone-3.jpg",
    ],
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2024-05-01"),
  },
  {
    id: "p2",
    name: "Winter Jacket",
    description: "Warm and stylish winter jacket.",
    price: 79.99,
    stock: 100,
    sold: 45,
    status: Status.ACTIVE,
    categoryId: categories[1].id,
    images: [
      "https://example.com/images/jacket-1.jpg",
      "https://example.com/images/jacket-2.jpg",
      "https://example.com/images/jacket-3.jpg",
    ],
    createdAt: new Date("2023-06-01"),
    updatedAt: new Date("2024-06-01"),
  },
  {
    id: "p3",
    name: "Blender Max",
    description: "Powerful blender with multiple speed settings.",
    price: 49.99,
    stock: 80,
    sold: 20,
    status: Status.IN_STOCK,
    categoryId: categories[2].id,
    images: [
      "https://example.com/images/blender-1.jpg",
      "https://example.com/images/blender-2.jpg",
    ],
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2024-07-01"),
  },
  {
    id: "p4",
    name: "Science Fiction Book Set",
    description: "A set of 5 bestselling sci-fi books.",
    price: 39.99,
    stock: 30,
    sold: 15,
    status: Status.ACTIVE,
    categoryId: categories[3].id,
    images: [
      "https://example.com/images/book-1.jpg",
      "https://example.com/images/book-2.jpg",
    ],
    createdAt: new Date("2023-08-01"),
    updatedAt: new Date("2024-08-01"),
  },
];


export const subcategories: SubcategoryProps[] = [
  {
    id: "sc1",
    name: "Smartphones",
    slug: "smartphones",
    image: "https://example.com/images/smartphones.jpg",
    description: "Latest smartphones from top brands.",
    createdAt: new Date("2023-09-01"),
    updatedAt: new Date("2024-09-01"),
    categoryId: categories[0].id, // Electronics
  },
  {
    id: "sc2",
    name: "Men's Jackets",
    slug: "mens-jackets",
    image: "https://example.com/images/mens-jackets.jpg",
    description: "Warm and stylish jackets for men.",
    createdAt: new Date("2023-10-01"),
    updatedAt: new Date("2024-10-01"),
    categoryId: categories[1].id, // Clothing
  },
  {
    id: "sc3",
    name: "Kitchen Appliances",
    slug: "kitchen-appliances",
    image: "https://example.com/images/kitchen-appliances.jpg",
    description: "Essential appliances for your kitchen.",
    createdAt: new Date("2023-11-01"),
    updatedAt: new Date("2024-11-01"),
    categoryId: categories[2].id, // Home Appliances
  },
  {
    id: "sc4",
    name: "Science Fiction",
    slug: "science-fiction",
    image: "https://example.com/images/science-fiction.jpg",
    description: "Best-selling sci-fi books.",
    createdAt: new Date("2023-12-01"),
    updatedAt: new Date("2024-12-01"),
    categoryId: categories[3].id, // Books
  },
];