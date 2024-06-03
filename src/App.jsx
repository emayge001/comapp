import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  // write js code here
  const laptops = [
    {
      productName: "Dell XPS 13",
      price: 1299.99,
      description:
        "The Dell XPS 13 is a powerful and portable laptop featuring a stunning InfinityEdge display and high-performance components.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/6983501/1.jpg?2093",
    },
    {
      productName: "MacBook Pro 16",
      price: 2399.0,
      description:
        "The MacBook Pro 16 is Apple's flagship laptop, boasting a large Retina display, powerful processors, and immersive sound.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/796407/1.jpg?9263",
    },
    {
      productName: "HP Spectre x360",
      price: 1499.99,
      description:
        "The HP Spectre x360 is a versatile 2-in-1 laptop with a sleek design, long battery life, and impressive performance.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/5541121/1.jpg?0273",
    },
    {
      productName: "Lenovo ThinkPad X1 Carbon",
      price: 1499.0,
      description:
        "The Lenovo ThinkPad X1 Carbon is a premium business laptop known for its durability, security features, and long battery life.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/4990652/1.jpg?6039",
    },
    {
      productName: "Asus ZenBook 14",
      price: 999.99,
      description:
        "The Asus ZenBook 14 is a compact and powerful laptop with a slim bezel display, powerful internals, and premium design.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/2833331/1.jpg?4332",
    },
    {
      productName: "Microsoft Surface Laptop 4",
      price: 1299.0,
      description:
        "The Microsoft Surface Laptop 4 combines elegance with performance, featuring a luxurious design and powerful hardware options.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/2919891/1.jpg?0704",
    },
    {
      productName: "Acer Swift 5",
      price: 899.99,
      description:
        "The Acer Swift 5 is an ultralight laptop with a sleek design, vibrant display, and long battery life, perfect for on-the-go use.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/1658412/1.jpg?4105",
    },
    {
      productName: "Razer Blade 15",
      price: 1999.99,
      description:
        "The Razer Blade 15 is a high-performance gaming laptop featuring powerful graphics, fast refresh rates, and premium build quality.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/8675412/1.jpg?4579",
    },
    {
      productName: "Samsung Galaxy Book Pro",
      price: 1299.0,
      description:
        "The Samsung Galaxy Book Pro is a sleek and lightweight laptop with a stunning AMOLED display and long battery life, perfect for productivity on the go.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/6404072/1.jpg?3679",
    },
    {
      productName: "LG Gram 17",
      price: 1499.99,
      description:
        "The LG Gram 17 is an ultra-portable laptop with a large display, long battery life, and durable build, making it perfect for frequent travelers.",
      productImg:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/8675412/1.jpg?4579",
    },
  ];

  return (
    <>
      <h1 id="title">Welcome to React</h1>
      <div className="grid">
        {laptops.map((laptop, index) => (
          <ProductCard
            key={index}
            productName={laptop.productName}
            description={laptop.description}
            price={laptop.price}
            productImg={laptop.productImg}
          />
        ))}
      </div>
    </>
  );
}

export default App;
