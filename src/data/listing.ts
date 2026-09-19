export type ListingImage = {
  src: string;
  alt: string;
};

export type TourRoom = {
  id: string;
  title: string;
  description: string;
  images: ListingImage[];
};

const tour = (name: string) => `/images/reference/tour/${name}`;

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyTitle: "Entire serviced apartment in Candolim, India",
  summary: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  rating: 4.95,
  reviews: 19,
  price: "₹28,499",
  nights: 5,
  host: {
    name: "Mirashya Homes",
    yearsHosting: 2,
    avatar: "/images/reference/avatars/host.jpg",
  },
  heroImages: [
    { src: tour("2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg"), alt: "Outdoor lounge area" },
    { src: tour("090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg"), alt: "Outdoor seating" },
    { src: tour("9be71047-fc52-438a-9270-75cb470f6752.jpeg"), alt: "Private jacuzzi" },
    { src: tour("67c61c6f-6260-4809-9510-0360e58a345d.jpeg"), alt: "Bedroom" },
    { src: tour("c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg"), alt: "Exterior building" },
  ] satisfies ListingImage[],
  description:
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 💗🌴",
  tourRooms: [
    {
      id: "living-room-1",
      title: "Living room 1",
      description: "Sofa · Air conditioning · Ceiling fan · TV",
      images: [
        ["a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg", "Living room 1"],
        ["a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg", "Living room 1"],
        ["f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg", "Living room 1"],
      ].map(([src, alt]) => ({ src: tour(src), alt })),
    },
    {
      id: "living-room-2",
      title: "Living room 2",
      description: "Ceiling fan · Hot tub",
      images: [
        "090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg",
        "9be71047-fc52-438a-9270-75cb470f6752.jpeg",
        "f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg",
        "2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg",
        "34529829-a971-44d3-ac2f-90ea3678a34d.jpeg",
        "153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg",
        "3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg",
      ].map((src) => ({ src: tour(src), alt: "Living room 2" })),
    },
    {
      id: "full-kitchen",
      title: "Full kitchen",
      description:
        "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
      images: [
        "56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg",
        "ddc853d7-e658-405c-bedc-8f31106c447e.jpeg",
      ].map((src) => ({ src: tour(src), alt: "Full kitchen" })),
    },
    {
      id: "bedroom",
      title: "Bedroom",
      description:
        "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
      images: [
        "67c61c6f-6260-4809-9510-0360e58a345d.jpeg",
        "1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg",
        "0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg",
        "a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg",
        "48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg",
        "3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg",
      ].map((src) => ({ src: tour(src), alt: "Bedroom" })),
    },
    {
      id: "full-bathroom",
      title: "Full bathroom",
      description: "Hairdryer · Hot water · Shampoo · Shower gel",
      images: [
        { src: tour("97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg"), alt: "Full bathroom" },
      ],
    },
    {
      id: "gym",
      title: "Gym",
      description: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
      images: [
        "9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg",
        "246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg",
        "4fede77d-7a71-446f-89e3-263af937f3fa.jpeg",
        "79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg",
        "f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg",
      ].map((src) => ({ src: tour(src), alt: "Gym" })),
    },
    {
      id: "exterior",
      title: "Exterior",
      description: "",
      images: [
        "23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg",
        "5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg",
        "608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg",
        "5b856fde-a393-41bf-b373-c9d02e64221f.jpeg",
        "c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg",
        "42befad7-fb29-473d-91db-b03e7a544d1d.jpeg",
      ].map((src) => ({ src: tour(src), alt: "Exterior" })),
    },
    {
      id: "pool",
      title: "Pool",
      description: "Pool",
      images: [
        "fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg",
        "929545d3-e241-46c0-8a70-c24531ce7b54.jpeg",
        "8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg",
      ].map((src) => ({ src: tour(src), alt: "Pool" })),
    },
    {
      id: "additional-photos",
      title: "Additional photos",
      description: "",
      images: [
        "70325367-cbae-4993-b560-18cd3f6edd53.jpeg",
        "cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg",
        "30ad93b2-293f-494d-b645-626303c6cb93.jpeg",
        "9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg",
        "b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg",
        "dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg",
        "fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg",
        "3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg",
        "862d936c-0f34-4e50-af87-b519e2781d19.jpeg",
        "79addceb-8c2d-419b-80ff-e29af426a94c.jpeg",
      ].map((src) => ({ src: tour(src), alt: "Additional photos" })),
    },
  ] satisfies TourRoom[],
  similar: [
    { title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91", image: "/images/reference/similar/s1.jpg" },
    { title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95", image: "/images/reference/similar/s2.jpg" },
    { title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94", image: "/images/reference/similar/s3.jpg" },
    { title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96", image: "/images/reference/similar/s4.jpg" },
    { title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95", image: "/images/reference/similar/s5.jpg" },
    { title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: "₹45,648", rating: "5.0", image: "/images/reference/similar/s6.jpg" },
    { title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: "₹48,786", rating: "4.93", image: "/images/reference/similar/s7.jpg" },
    { title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: "₹22,824", rating: "4.92", image: "/images/reference/similar/s8.jpg" },
  ],
};

export const allTourImages = listing.tourRooms.flatMap((room) =>
  room.images.map((image) => ({ ...image, roomId: room.id, roomTitle: room.title })),
);
