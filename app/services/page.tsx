"use client";
import Link from "next/link"
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import cssStyle from "./services.module.css";
import React, { useState, useCallback } from "react";

interface Car {
  name: string;
  price: number;
  imageUrl: string;
}

const ServicesPage: React.FC = () => {
  const [searchBar, setSearchBar] = useState<string>("");
  const [cars] = useState<Car[]>([
    { 
            name: 'Sport Car Future', 
            imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/192/562/non_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg', 
            price: 15000 
          },
          { 
            name: 'FlashWave SR', 
            imageUrl: 'https://t4.ftcdn.net/jpg/05/75/70/41/360_F_575704172_Df6lOWpRcnfuXOt1d985y2f3MJIAdmh2.jpg', 
            price: 30500 
          },
          { 
            name: 'BlackShadow GT', 
            imageUrl: 'https://img.freepik.com/free-photo/green-black-bugatti-veyron-with-black-yellow-paint_1340-23339.jpg', 
            price: 33000 
          },
          { 
            name: 'HyperDrive X9', 
            imageUrl: 'https://img.freepik.com/premium-photo/supercars-exhibition-colorful-cool-cars-hd-photography-wallpaper-background-illustration_911849-376183.jpg', 
            price: 37000 
          },
          { 
            name: 'BeastMode V12', 
            imageUrl: 'https://img.freepik.com/premium-photo/smooth-sleek-sports-car-races-through-dark-night-with-elegance_614732-853.jpg?w=360', 
            price: 35000 
          },
          { 
            name: 'ElectroStorm 5', 
            imageUrl: 'https://www.eliteeuro.com.au/wp-content/uploads/2021/12/Audi-R8-Coupe-v10-1024x682.jpeg', 
            price: 26000 
          },
          { 
            name: 'Lotus Fury X', 
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBI5Bae-tD__vL35OCmVwk-Woea2eqRO2kkVjvTHe_H-abYWrL_ec1JfwD2yVU8V_8UE&usqp=CAU', 
            price: 36000 
          },
          { 
            name: 'SpeedMaster F1', 
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2bEq7H-GDJXiiG3Yy2fiekI_Bnl1iZLaIRxzN4sMwB0wGIBH92krGQ2ngwsCckRZNL0&usqp=CAU', 
            price: 38000 
          },
          { 
            name: 'Quantum Racer 7', 
            imageUrl: 'https://img-ik.cars.co.za/news-site-za/images/2024/05/e-tron-GT.jpg?tr=w-800', 
            price: 42000 
          },
          { 
            name: 'NovaSport R6', 
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2025-audi-e-tron-gt-102-66743d083580e.jpg?crop=0.646xw:0.546xh;0.112xw,0.248xh&resize=700:*', 
            price: 43000 
          },
          { 
            name: 'Thunderstrike G4', 
            imageUrl: 'https://di-uploads-pod5.dealerinspire.com/elmhurstbmw/uploads/2023/05/Electric_2-1024x576.png', 
            price: 39000 
          },
          { 
            name: 'Rogue GT', 
            imageUrl: 'https://i.pinimg.com/736x/ca/3b/1d/ca3b1d5606acd43c9fd2b33ce9beefa4.jpg', 
            price: 34000 
          },
          { 
            name: 'Viper Elite 5', 
            imageUrl: 'https://i.ytimg.com/vi/YYbfXzYC6lg/hqdefault.jpg', 
            price: 40000 
          },
          { 
            name: 'Lightning Hawk', 
            imageUrl: 'https://e0.pxfuel.com/wallpapers/305/542/desktop-wallpaper-car-bmw-t-thumbnail.jpg', 
            price: 41000 
          },
          { 
            name: 'Cyber GT9', 
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8EY8VuHkSULs7lFDx9HEEVxdnwrM_NqdoK312o_2QOSaE-aAd-zc0HoHe-uXm3sF0zs&usqp=CAU', 
            price: 29000 
          },
          { 
            name: 'Phantom Racer', 
            imageUrl: 'https://wallpapercrafter.com/th800/64726-bmw-i8-bmw-cars.jpg', 
            price: 43000 
          },
          { 
            name: 'Sian FX37', 
            imageUrl: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2023/over_d.jpg', 
            price: 80000 
          },
          { 
            name: 'Lamborghini Supremo', 
            imageUrl: 'https://storage.googleapis.com/pod_public/1300/176804.jpg', 
            price: 75000 
          },
          { 
            name: 'Veloce Machina', 
            imageUrl: 'https://media.gq-magazine.co.uk/photos/6082cdce7c8ebed43e51bd8a/16:9/w_2560%2Cc_limit/lambo2.jpeg', 
            price: 90000 
          },
          { name: "Sport Car Future", price: 15000, imageUrl: "https://static.vecteezy.com/system/resources/previews/023/192/562/non_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg" },
          { name: "FlashWave SR", price: 30500, imageUrl: "https://i.pinimg.com/736x/19/49/f9/1949f97c6401d11baf47ed2263350ae3.jpg" },
          { name: "BlackShadow GT", price: 33000, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHAHlIOx-S_bLZott97DOV0fABDAdSpSWNwJ1Mjslvh82bsBAVX32K75OFdFLQWbr2qE&usqp=CAU" },
          { name: "HyperDrive X9", price: 37000, imageUrl: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/05/Morand-Hypercar-1-Cropped.jpg" },
          { name: "BeastMode V12", price: 35000, imageUrl: "https://i.pinimg.com/736x/dd/fb/53/ddfb5364d61bb526a7e1f6733b9d2c7c.jpg" },
          { name: "ElectroStorm 5", price: 26000, imageUrl: "https://i.pinimg.com/736x/4e/ee/67/4eee6730b179871c9773b0cb25f6d952.jpg" },
          { name: "Lotus Fury X", price: 36000, imageUrl: "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/authors/ws_cropper/19_0x0_790x520_790x0_best-ev-sports-cars-lotus-evija.jpg" },
          { name: 'Velocity Phantom', imageUrl: 'https://img.freepik.com/premium-photo/sleek-modern-sports-car-with-sense-speed-power_902820-1111.jpg', price: 28000 },
          { name: 'Silver Blaze GT', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYcfBBbVdNEsQFM34uN_BC-vzXtuwmKhb4z09Ah1ZPZ4ObAaao1gJEzt1upyDEJ6RiQ4&usqp=CAU', price: 29000 },
          { name: 'StormBreaker X7', imageUrl: 'https://imgcdn.stablediffusionweb.com/2024/4/23/6a25e548-9b03-4a8f-976b-e6300a1d569c.jpg', price: 31000 },
          { name: 'Falcon Ace', imageUrl: 'https://i.pinimg.com/736x/25/36/d3/2536d38bca2c61466e6df72a9dc4d767.jpg', price: 27000 },
          { name: 'NightFury Z12', imageUrl: 'https://img.freepik.com/premium-photo/nighttime-marvel-modern-sports-car-urban-setting_1000764-4491.jpg', price: 32500 },
          { name: 'Turbo Vortex', imageUrl: 'https://img.freepik.com/premium-photo/car-that-is-powered-by-turbocharged-engine_551707-623.jpg', price: 35000 },
          { name: 'Inferno Racer', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OEFhjwLl837e5l72sP9KUyNkO5MHijBpcyoQJNF7xHMDobfF7Bbw5erFyR6r1cuuhs8&usqp=CAU', price: 34000 },
          { name: 'ElectraVolt X', imageUrl: 'https://masterpiecer-images.s3.yandex.net/d36769d18b0b11ee9d0c261105627a54:upscaled', price: 30000 },
          { name: 'Crimson Streak', imageUrl: 'https://i.pinimg.com/736x/ca/0a/54/ca0a5497b8730924c5ff8224257d4737.jpg', price: 28500 },
          { name: 'UltraSonic V', imageUrl: 'https://i.pinimg.com/736x/20/99/a5/2099a50705ac7f037d4225bf7fa70180.jpg', price: 29500 },
          { name: 'Raging Bull X1', imageUrl: 'https://i.pinimg.com/736x/ca/0a/54/ca0a5497b8730924c5ff8224257d4737.jpg', price: 35500 },
          { name: 'Quantum Flash', imageUrl: 'https://i.pinimg.com/736x/19/49/f9/1949f97c6401d11baf47ed2263350ae3.jpg', price: 33000 },
          { name: 'Hydra GTX', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHAHlIOx-S_bLZott97DOV0fABDAdSpSWNwJ1Mjslvh82bsBAVX32K75OFdFLQWbr2qE&usqp=CAU', price: 31500 },
          { name: 'Morand Hypercar', imageUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/05/Morand-Hypercar-1-Cropped.jpg', price: 37000 },
          { name: 'Nebula Z8', imageUrl: 'https://i.pinimg.com/736x/dd/fb/53/ddfb5364d61bb526a7e1f6733b9d2c7c.jpg', price: 28000 },
          { name: 'Celestial Raptor', imageUrl: 'https://i.pinimg.com/736x/4e/ee/67/4eee6730b179871c9773b0cb25f6d952.jpg', price: 32000 },
          { name: 'Lotus Evija', imageUrl: 'https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/authors/ws_cropper/19_0x0_790x520_790x0_best-ev-sports-cars-lotus-evija.jpg', price: 40000 },
          
          { name: 'AeroRacer', imageUrl: 'https://img.freepik.com/premium-photo/sleek-modern-sports-car-with-sense-speed-power_902820-1111.jpg', price: 49000 },
          { name: 'TitanBlaze', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYcfBBbVdNEsQFM34uN_BC-vzXtuwmKhb4z09Ah1ZPZ4ObAaao1gJEzt1upyDEJ6RiQ4&usqp=CAU', price: 52500 },
          { name: 'Inferno GT', imageUrl: 'https://imgcdn.stablediffusionweb.com/2024/4/23/6a25e548-9b03-4a8f-976b-e6300a1d569c.jpg', price: 61500 },
          { name: 'Cobalt Strike', imageUrl: 'https://i.pinimg.com/736x/25/36/d3/2536d38bca2c61466e6df72a9dc4d767.jpg', price: 43500 },
          { name: 'Phantom Surge', imageUrl: 'https://img.freepik.com/premium-photo/nighttime-marvel-modern-sports-car-urban-setting_1000764-4491.jpg', price: 56500 },
          { name: 'Vortex Pro', imageUrl: 'https://img.freepik.com/premium-photo/car-that-is-powered-by-turbocharged-engine_551707-623.jpg', price: 67500 },
          { name: 'Onyx Charger', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OEFhjwLl837e5l72sP9KUyNkO5MHijBpcyoQJNF7xHMDobfF7Bbw5erFyR6r1cuuhs8&usqp=CAU', price: 46000 },
          { name: 'Blitzwing', imageUrl: 'https://masterpiecer-images.s3.yandex.net/d36769d18b0b11ee9d0c261105627a54:upscaled', price: 42500 },
          { name: 'RapidFire', imageUrl: 'https://i.pinimg.com/736x/ca/0a/54/ca0a5497b8730924c5ff8224257d4737.jpg', price: 54000 },
          { name: 'Night Fury', imageUrl: 'https://i.pinimg.com/736x/20/99/a5/2099a50705ac7f037d4225bf7fa70180.jpg', price: 51000 },
          { name: 'ZenithX', imageUrl: 'https://i.pinimg.com/736x/ca/0a/54/ca0a5497b8730924c5ff8224257d4737.jpg', price: 66500 },
          { name: 'Quantum Bolt', imageUrl: 'https://i.pinimg.com/736x/19/49/f9/1949f97c6401d11baf47ed2263350ae3.jpg', price: 58500 },
          { name: 'Velocity Pro', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHAHlIOx-S_bLZott97DOV0fABDAdSpSWNwJ1Mjslvh82bsBAVX32K75OFdFLQWbr2qE&usqp=CAU', price: 53000 },
          { name: 'Nebula R', imageUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/05/Morand-Hypercar-1-Cropped.jpg', price: 73500 },
          { name: 'Hyperion V', imageUrl: 'https://i.pinimg.com/736x/dd/fb/53/ddfb5364d61bb526a7e1f6733b9d2c7c.jpg', price: 49000 },
          { name: 'VoltRunner', imageUrl: 'https://i.pinimg.com/736x/4e/ee/67/4eee6730b179871c9773b0cb25f6d952.jpg', price: 63000 },
          { name: 'Magnum Blast', imageUrl: 'https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/authors/ws_cropper/19_0x0_790x520_790x0_best-ev-sports-cars-lotus-evija.jpg', price: 89500 },
          { name: 'Shadow Viper', imageUrl: 'https://img.freepik.com/premium-photo/sleek-modern-sports-car-with-sense-speed-power_902820-1111.jpg', price: 45000 },
          { name: 'Silver Ghost', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYcfBBbVdNEsQFM34uN_BC-vzXtuwmKhb4z09Ah1ZPZ4ObAaao1gJEzt1upyDEJ6RiQ4&usqp=CAU', price: 47000 },
          { name: 'Thunderstrike X', imageUrl: 'https://imgcdn.stablediffusionweb.com/2024/4/23/6a25e548-9b03-4a8f-976b-e6300a1d569c.jpg', price: 51000 },
          { name: 'Red Phoenix', imageUrl: 'https://i.pinimg.com/736x/25/36/d3/2536d38bca2c61466e6df72a9dc4d767.jpg', price: 39000 },
          { name: 'Black Widow', imageUrl: 'https://img.freepik.com/premium-photo/nighttime-marvel-modern-sports-car-urban-setting_1000764-4491.jpg', price: 52000 },
          { name: 'Blue Hurricane', imageUrl: 'https://img.freepik.com/premium-photo/car-that-is-powered-by-turbocharged-engine_551707-623.jpg', price: 60000 },
           { name: 'Golden Typhoon', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OEFhjwLl837e5l72sP9KUyNkO5MHijBpcyoQJNF7xHMDobfF7Bbw5erFyR6r1cuuhs8&usqp=CAU', price: 43000 },
           { name: 'Cosmic Inferno', imageUrl: 'https://masterpiecer-images.s3.yandex.net/d36769d18b0b11ee9d0c261105627a54:upscaled', price: 38000 },
           { name: 'Crimson Fury', imageUrl: 'https://i.pinimg.com/736x/ca/0a/54/ca0a5497b8730924c5ff8224257d4737.jpg', price: 51000 },
           { name: 'Neon Blitz', imageUrl: 'https://i.pinimg.com/736x/20/99/a5/2099a50705ac7f037d4225bf7fa70180.jpg', price: 47000 },
           { name: 'Aurora Flame', imageUrl: 'https://i.pinimg.com/736x/ca/0a/54/ca0a5497b8730924c5ff8224257d4737.jpg', price: 61000 },
           { name: 'StarChaser', imageUrl: 'https://i.pinimg.com/736x/19/49/f9/1949f97c6401d11baf47ed2263350ae3.jpg', price: 54500 },
           { name: 'Frost Raptor', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHAHlIOx-S_bLZott97DOV0fABDAdSpSWNwJ1Mjslvh82bsBAVX32K75OFdFLQWbr2qE&usqp=CAU', price: 49000 },
           { name: 'Obsidian X', imageUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/05/Morand-Hypercar-1-Cropped.jpg', price: 70000 },
           { name: 'Solar Wave', imageUrl: 'https://i.pinimg.com/736x/dd/fb/53/ddfb5364d61bb526a7e1f6733b9d2c7c.jpg', price: 45000 },
           { name: 'Midnight Rider', imageUrl: 'https://i.pinimg.com/736x/4e/ee/67/4eee6730b179871c9773b0cb25f6d952.jpg', price: 57000 },
          { name: 'Volcanic Surge', imageUrl: 'https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/authors/ws_cropper/19_0x0_790x520_790x0_best-ev-sports-cars-lotus-evija.jpg', price: 85000 }
  ]);

  const [selectedCarName, setSelectedCarName] = useState<string>("");
  const [selectedCarPrice, setSelectedCarPrice] = useState<number>(0);

  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchBar.toLowerCase())
  );
 
  const handleAddToCart = useCallback((name: string, price: number) => {
    setSelectedCarName(name);
    setSelectedCarPrice(price);
    console.log("Car added to cart:", name, price);
  }, []);

  return (
    <>
      <Header />
      <div className={cssStyle.main}>
        <div className={cssStyle.searchBar}>
          <input
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
            type="text"
            className={cssStyle.search}
            placeholder="Enter a name of car"
          />
        </div>

        <div className={cssStyle.product}>
          <div className={cssStyle.box}>
            <div className={cssStyle.id1}>
              {filteredCars.length > 0 ? (
                filteredCars.map((car, index) => (
                  <div key={index} className={cssStyle.id}>
                    <img src={car.imageUrl} alt={car.name} />
                    <p>{car.name}</p>
                    <h2>{formatPrice(car.price)}</h2>
                    <Link href="#footer">
                      <button 
                        onClick={() => handleAddToCart(car.name, car.price)}
                        className="mt-3 bg-white text-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 p-2 rounded-md mb-4"
                      >
                        Add to Cart
                      </button>              
                    </Link>
                  </div>
                ))
              ) : (
                <p>No cars found</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer name={selectedCarName} price={selectedCarPrice} />
    </>
  );
}
