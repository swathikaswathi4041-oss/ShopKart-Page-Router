import Link from "next/link";
import { useRouter } from "next/router";

const categories = [
  { name: "Beauty", slug: "beauty" },
  { name: "Fragrances", slug: "fragrances" },
  { name: "Furniture", slug: "furniture" },
  { name: "Groceries", slug: "groceries" },
  { name: "Home Decoration", slug: "home-decoration" },
  { name: "Laptops", slug: "laptops" },
  { name: "Men's Shirts", slug: "mens-shirts" },
  { name: "Men's Shoes", slug: "mens-shoes" },
  { name: "Men's Watches", slug: "mens-watches" },
  { name: "Mobile Accessories", slug: "mobile-accessories" },
  { name: "Skin Care", slug: "skin-care" },
  { name: "Smartphones", slug: "smartphones" },
  { name: "Sports Accessories", slug: "sports-accessories" },
  { name: "Women's Bags", slug: "womens-bags" },
  { name: "Women's Dresses", slug: "womens-dresses" },
];

export default function CategoryNav() {
  const router = useRouter();
  const search = router.query.search;

  return (
    <div className="w-full bg-[#35291F] border-b border-[#E8D5CC]">
      <div className="max-w-8xl mx-auto py-2">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}${search ? `&search=${encodeURIComponent(Array.isArray(search)? search[0]:search)}`: ""}`}
              className="text-sm font-medium text-white hover:text-[#8C6A50] transition"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
