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
  },
  {
    id: 2,
    name: "Caliente Capri Pant - Black",
    category: "women",
    image: p2_img,
    new_price: 29.99,
    old_price: 35.0,
  },
  {
    id: 3,
    name: "Adele Ruffle Mini Dress - Khaki",
    category: "women",
    image: p3_img,
    new_price: 35.99,
    old_price: 40.0,
  },
  {
    id: 4,
    name: "Give Me Chills Striped Sweater Maxi Dress - Navy/combo",
    category: "women",
    image: p4_img,
    new_price: 49.99,
    old_price: 55.0,
  },
  {
    id: 5,
    name: "Still Over It Blazer - Taupee",
    category: "women",
    image: p5_img,
    new_price: 34.99,
    old_price: 40.0,
  },
  {
    id: 6,
    name: "Runaway Distressed Cable Knit Sweater - Grey",
    category: "women",
    image: p6_img,
    new_price: 29.99,
    old_price: 35.05,
  },
  {
    id: 7,
    name: "Country Living Sherpa Shacket - White",
    category: "women",
    image: p7_img,
    new_price: 39.99,
    old_price: 50.0,
  },
  {
    id: 8,
    name: "Alexandra Denim Maxi Dress - Denim",
    category: "women",
    image: p8_img,
    new_price: 79.99,
    old_price: 85.0,
  },
  {
    id: 9,
    name: "Coast To Coast Pleated Mini Skirt Set - Burgundy",
    category: "women",
    image: p9_img,
    new_price: 39.99,
    old_price: 45.0,
  },
  {
    id: 10,
    name: "Hold You Down Oversized Long Puffer - Chocolate",
    category: "women",
    image: p10_img,
    new_price: 69.99,
    old_price: 75.0,
  },
  {
    id: 11,
    name: "Kalyn Double Layered Bodysuit - Black",
    category: "women",
    image: p11_img,
    new_price: 8.0,
    old_price: 10.0,
  },
  {
    id: 12,
    name: "Your Biggest Fan Hooded Jersey - Green/combo",
    category: "women",
    image: p12_img,
    new_price: 39.99,
    old_price: 45.00,
  },
  {
    id: 13,
    name: "Paulie Contrast Trucker Jacket - Indigo",
    category: "men",
    image: p13_img,
    new_price: 59.99,
    old_price: 65.05,
  },
  {
    id: 14,
    name: "Garvey Puffer Jacket - Grey",
    category: "men",
    image: p14_img,
    new_price: 49.99,
    old_price: 60.05,
  },
  {
    id: 15,
    name: "Theo Raglan Anorak - Grey/combo",
    category: "men",
    image: p15_img,
    new_price: 44.99,
    old_price: 50.05,
  },
  {
    id: 16,
    name: "Arnold Felt Jacquard Cropped Jacket - Red",
    category: "men",
    image: p16_img,
    new_price: 64.99,
    old_price: 70.05,
  },
  {
    id: 17,
    name: "Chadwick Car Coat - Camel",
    category: "men",
    image: p17_img,
    new_price: 59.99,
    old_price: 70.0,
  },
  {
    id: 18,
    name: "Clover Denim Pullover Jacket - Black",
    category: "men",
    image: p18_img,
    new_price: 59.99,
    old_price: 70.0,
  },
  {
    id: 19,
    name: "Ashton Essential Bomber Jacket - Brown",
    category: "men",
    image: p19_img,
    new_price: 25.0,
    old_price: 30.0,
  },
  {
    id: 20,
    name: "Warsaw Cropped Denim Work Trucker - Light Blue",
    category: "men",
    image: p20_img,
    new_price: 46.99,
    old_price: 50.0,
  },
  {
    id: 21,
    name: "Come See Me Plaid Shacket - Blue",
    category: "men",
    image: p21_img,
    new_price: 49.99,
    old_price: 60.0,
  },
  {
    id: 22,
    name: "Donovan Weaved Puffer Vest - White",
    category: "men",
    image: p22_img,
    new_price: 59.99,
    old_price: 65.0,
  },
  {
    id: 23,
    name: "Paulie Contrast Trucker Jacket - Indigo",
    category: "men",
    image: p23_img,
    new_price: 59.99,
    old_price: 70.0,
  },
  {
    id: 24,
    name: "Don't Concern You Padded Cropped Jacket - Light Blue",
    category: "men",
    image: p24_img,
    new_price: 59.99,
    old_price: 70.0,
  },
  {
    id: 25,
    name: "Mini Ready For The Colder Weather Puffer Jacket - Black",
    category: "kid",
    image: p25_img,
    new_price: 34.99,
    old_price: 40.0,
  },
  {
    id: 26,
    name: "Mini Tell Me Why Faux Leather Pant - Black",
    category: "kid",
    image: p26_img,
    new_price: 37.99,
    old_price: 40.99,
  },
  {
    id: 27,
    name: "Mini Let's Talk About It Shacket - Red",
    category: "kid",
    image: p27_img,
    new_price: 29.99,
    old_price: 40.0,
  },
  {
    id: 28,
    name: "Mini Country Living Sherpa Shacket - White",
    category: "kid",
    image: p28_img,
    new_price: 37.99,
    old_price: 50.0,
  },
  {
    id: 29,
    name: "Mini Love You Forever Frayed Heart Jeans - Medium Wash",
    category: "kid",
    image: p29_img,
    new_price: 24.99,
    old_price: 30.0,
  },
  {
    id: 30,
    name: "Minin Conquering Mountains Sherpa Vest - Cream",
    category: "kid",
    image: p30_img,
    new_price: 24.99,
    old_price: 30.0,
  },
  {
    id: 31,
    name: "Mini Camping Cutie Bucket Hat",
    category: "kid",
    image: p31_img,
    new_price: 9.99,
    old_price: 11.0,
  },
  {
    id: 32,
    name: "Mini Stay In Your Lane Puffer Jacket",
    category: "kid",
    image: p32_img,
    new_price: 39.99,
    old_price: 45.0,
  },
  {
    id: 33,
    name: "Mini Dare To Play Denim Jeans ",
    category: "kid",
    image: p33_img,
    new_price: 39.99,
    old_price: 50.5,
  },
  {
    id: 34,
    name: "Mini Been Real Nylon Bomber Jacket",
    category: "kid",
    image: p34_img,
    new_price: "54.99",
    old_price: "60.00",
  },
  {
    id: 35,
    name: "Mini Brianca Bow Wide Leg Jeans",
    category: "kid",
    image: p35_img,
    new_price: "34.99",
    old_price: "40.00",
  },
  {
    id: 36,
    name: "Mini Ella Faux Fur Jacket ",
    category: "kid",
    image: p36_img,
    new_price: "44.99",
    old_price: "60.00",
  },
];

export default all_product;
