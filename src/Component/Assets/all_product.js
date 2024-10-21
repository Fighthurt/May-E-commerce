import p1_img from "./product_01.webp";
import p2_img from "./product_02.webp";
import p3_img from "./product_03.webp";
import p4_img from "./product_04.webp";
import p5_img from "./product_05.webp";
import p6_img from "./product_06.webp";
import p7_img from "./product_07.webp";
import p8_img from "./product_08.webp";
import p9_img from "./product_09.webp";
import p10_img from "./product_10.webp";
import p11_img from "./product_11.webp";
import p12_img from "./product_122.webp";
import p13_img from "./product_13.webp";
import p14_img from "./product_144.webp";
import p15_img from "./product_155.webp";
import p16_img from "./product_16.webp";
import p17_img from "./product_177.webp";
import p18_img from "./product_18.webp";
import p19_img from "./product_19.webp";
import p20_img from "./product_20.webp";
import p21_img from "./product_21.webp";
import p22_img from "./product_222.webp";
import p23_img from "./product_23.webp";
import p24_img from "./product_24.webp";
import p25_img from "./product_25.webp";
import p26_img from "./product_26.webp";
import p27_img from "./product_27.webp";
import p28_img from "./product_288.webp";
import p29_img from "./product_29.webp";
import p30_img from "./product_30.webp";
import p31_img from "./product_31.webp";
import p32_img from "./product_32.webp";
import p33_img from "./product_33.webp";
import p34_img from "./product_34.webp";
import p35_img from "./product_356.webp";
import p36_img from "./product_36.webp";

let all_product = [
  {
    id: 1,
    name: "Rock Star Faux Leather Top - Black",
    category: "women",
    image: p1_img,
    new_price: 24.99,
    old_price: 30.0,
    description:
      "This faux leather top is perfect for bringing out your inner rock star. Its bold and edgy look will make you stand out from the crowd.",
  },
  {
    id: 2,
    name: "Caliente Capri Pant - Black",
    category: "women",
    image: p2_img,
    new_price: 29.99,
    old_price: 35.0,
    description:
      "Stylish and comfortable capri pants that pair well with any outfit. Ideal for casual outings or a night on the town.",
  },
  {
    id: 3,
    name: "Adele Ruffle Mini Dress - Khaki",
    category: "women",
    image: p3_img,
    new_price: 35.99,
    old_price: 40.0,
    description:
      "The Adele Ruffle Mini Dress combines elegance and comfort. Perfect for any formal or semi-formal event with its flattering fit.",
  },
  {
    id: 4,
    name: "Give Me Chills Striped Sweater Maxi Dress - Navy/combo",
    category: "women",
    image: p4_img,
    new_price: 49.99,
    old_price: 55.0,
    description:
      "This stylish striped sweater maxi dress will keep you warm and chic during the colder months. The perfect winter wardrobe addition.",
  },
  {
    id: 5,
    name: "Still Over It Blazer - Taupe",
    category: "women",
    image: p5_img,
    new_price: 34.99,
    old_price: 40.0,
    description:
      "A trendy taupe blazer that adds sophistication to any outfit. Ideal for work or business-casual settings.",
  },
  {
    id: 6,
    name: "Runaway Distressed Cable Knit Sweater - Grey",
    category: "women",
    image: p6_img,
    new_price: 29.99,
    old_price: 35.05,
    description:
      "Stay cozy in this distressed cable knit sweater, perfect for layering on colder days. A must-have for your winter collection.",
  },
  {
    id: 7,
    name: "Country Living Sherpa Shacket - White",
    category: "women",
    image: p7_img,
    new_price: 39.99,
    old_price: 50.0,
    description:
      "A warm and cozy sherpa shacket that combines country charm with urban style. Ideal for chilly weather.",
  },
  {
    id: 8,
    name: "Alexandra Denim Maxi Dress - Denim",
    category: "women",
    image: p8_img,
    new_price: 79.99,
    old_price: 85.0,
    description:
      "This classic denim maxi dress features a timeless design that’s perfect for both casual and semi-formal events.",
  },
  {
    id: 9,
    name: "Coast To Coast Pleated Mini Skirt Set - Burgundy",
    category: "women",
    image: p9_img,
    new_price: 39.99,
    old_price: 45.0,
    description:
      "Turn heads with this pleated mini skirt set in a striking burgundy. Great for night outs or festive occasions.",
  },
  {
    id: 10,
    name: "Hold You Down Oversized Long Puffer - Chocolate",
    category: "women",
    image: p10_img,
    new_price: 69.99,
    old_price: 75.0,
    description:
      "Keep warm and stylish in this oversized long puffer coat. Its chocolate color adds an elegant touch to your winter wardrobe.",
  },
  {
    id: 11,
    name: "Kalyn Double Layered Bodysuit - Black",
    category: "women",
    image: p11_img,
    new_price: 8.0,
    old_price: 10.0,
    description:
      "A basic yet versatile black bodysuit with a double-layered design, perfect for layering or wearing solo.",
  },
  {
    id: 12,
    name: "Your Biggest Fan Hooded Jersey - Green/combo",
    category: "women",
    image: p12_img,
    new_price: 39.99,
    old_price: 45.0,
    description:
      "Show your team spirit with this hooded jersey in a green combo, perfect for sports games or casual wear.",
  },
  {
    id: 13,
    name: "Paulie Contrast Trucker Jacket - Indigo",
    category: "men",
    image: p13_img,
    new_price: 59.99,
    old_price: 65.05,
    description:
      "This contrast trucker jacket is perfect for layering and offers a classic look with modern comfort.",
  },
  {
    id: 14,
    name: "Garvey Puffer Jacket - Grey",
    category: "men",
    image: p14_img,
    new_price: 49.99,
    old_price: 60.05,
    description:
      "Stay warm and stylish with the Garvey puffer jacket, designed to keep you cozy during cold weather.",
  },
  {
    id: 15,
    name: "Theo Raglan Anorak - Grey/combo",
    category: "men",
    image: p15_img,
    new_price: 44.99,
    old_price: 50.05,
    description:
      "A rugged anorak for the adventurous man, featuring a grey combo design for a modern, athletic look.",
  },
  {
    id: 16,
    name: "Arnold Felt Jacquard Cropped Jacket - Red",
    category: "men",
    image: p16_img,
    new_price: 64.99,
    old_price: 70.05,
    description:
      "A bold and vibrant red cropped jacket that adds a pop of color to your wardrobe. Perfect for the fashion-forward man.",
  },
  {
    id: 17,
    name: "Chadwick Car Coat - Camel",
    category: "men",
    image: p17_img,
    new_price: 59.99,
    old_price: 70.0,
    description:
      "The Chadwick Car Coat is a timeless piece, offering a refined look with its camel color and tailored fit.",
  },
  {
    id: 18,
    name: "Clover Denim Pullover Jacket - Black",
    category: "men",
    image: p18_img,
    new_price: 59.99,
    old_price: 70.0,
    description:
      "A durable black denim pullover jacket, designed for comfort and style.",
  },
  {
    id: 19,
    name: "Ashton Essential Bomber Jacket - Brown",
    category: "men",
    image: p19_img,
    new_price: 25.0,
    old_price: 30.0,
    description:
      "A brown bomber jacket with essential features for any season.",
  },
  {
    id: 20,
    name: "Warsaw Cropped Denim Work Trucker - Light Blue",
    category: "men",
    image: p20_img,
    new_price: 46.99,
    old_price: 50.0,
    description:
      "A light blue cropped denim work trucker jacket, perfect for casual outings.",
  },
  {
    id: 21,
    name: "Come See Me Plaid Shacket - Blue",
    category: "men",
    image: p21_img,
    new_price: 49.99,
    old_price: 60.0,
    description: "A blue plaid shacket offering warmth and style in one piece.",
  },
  {
    id: 22,
    name: "Donovan Weaved Puffer Vest - White",
    category: "men",
    image: p22_img,
    new_price: 59.99,
    old_price: 65.0,
    description:
      "A white weaved puffer vest that combines modern fashion with comfort.",
  },
  {
    id: 23,
    name: "Paulie Contrast Trucker Jacket - Indigo",
    category: "men",
    image: p23_img,
    new_price: 59.99,
    old_price: 70.0,
    description:
      "An indigo trucker jacket with contrast details for a stylish look.",
  },
  {
    id: 24,
    name: "Don't Concern You Padded Cropped Jacket - Light Blue",
    category: "men",
    image: p24_img,
    new_price: 59.99,
    old_price: 70.0,
    description:
      "A light blue padded cropped jacket that adds both warmth and flair.",
  },
  {
    id: 25,
    name: "Mini Ready For The Colder Weather Puffer Jacket - Black",
    category: "kid",
    image: p25_img,
    new_price: 34.99,
    old_price: 40.0,
    description:
      "A mini puffer jacket perfect for colder weather, ensuring warmth and style.",
  },
  {
    id: 26,
    name: "Mini Tell Me Why Faux Leather Pant - Black",
    category: "kid",
    image: p26_img,
    new_price: 37.99,
    old_price: 40.99,
    description:
      "Stylish black faux leather pants for kids, designed for comfort and durability.",
  },
  {
    id: 27,
    name: "Mini Let's Talk About It Shacket - Red",
    category: "kid",
    image: p27_img,
    new_price: 29.99,
    old_price: 40.0,
    description:
      "A red shacket combining the best of shirt and jacket for all-day comfort.",
  },
  {
    id: 28,
    name: "Mini Country Living Sherpa Shacket - White",
    category: "kid",
    image: p28_img,
    new_price: 37.99,
    old_price: 50.0,
    description: "A cozy white sherpa shacket perfect for outdoor adventures.",
  },
  {
    id: 29,
    name: "Mini Love You Forever Frayed Heart Jeans - Medium Wash",
    category: "kid",
    image: p29_img,
    new_price: 24.99,
    old_price: 30.0,
    description:
      "Medium wash jeans with frayed heart detailing, great for casual wear.",
  },
  {
    id: 30,
    name: "Mini Conquering Mountains Sherpa Vest - Cream",
    category: "kid",
    image: p30_img,
    new_price: 24.99,
    old_price: 30.0,
    description:
      "A cream-colored sherpa vest perfect for outdoor play in cooler weather.",
  },
  {
    id: 31,
    name: "Mini Camping Cutie Bucket Hat",
    category: "kid",
    image: p31_img,
    new_price: 9.99,
    old_price: 11.0,
    description: "A cute bucket hat for camping and outdoor fun.",
  },
  {
    id: 32,
    name: "Mini Stay In Your Lane Puffer Jacket",
    category: "kid",
    image: p32_img,
    new_price: 39.99,
    old_price: 45.0,
    description:
      "A warm and comfortable puffer jacket, perfect for staying cozy in cold weather.",
  },
  {
    id: 33,
    name: "Mini Dare To Play Denim Jeans ",
    category: "kid",
    image: p33_img,
    new_price: 39.99,
    old_price: 50.5,
    description: "Durable denim jeans made for active kids, perfect for play.",
  },
  {
    id: 34,
    name: "Mini Been Real Nylon Bomber Jacket",
    category: "kid",
    image: p34_img,
    new_price: 54.99,
    old_price: 60.0,
    description:
      "A stylish nylon bomber jacket that’s both lightweight and warm.",
  },
  {
    id: 35,
    name: "Mini Brianca Bow Wide Leg Jeans",
    category: "kid",
    image: p35_img,
    new_price: 34.99,
    old_price: 40.0,
    description:
      "Wide leg jeans with a cute bow detail, offering a fashionable look for kids.",
  },
  {
    id: 36,
    name: "Mini Ella Faux Fur Jacket",
    category: "kid",
    image: p36_img,
    new_price: 44.99,
    old_price: 60.0,
    description:
      "A faux fur jacket that’s both stylish and warm, perfect for winter days.",
  },
];

export default all_product;
