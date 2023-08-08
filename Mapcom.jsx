import React from "react";
import Cardcom from "./Cardcom";
import "./Mapcomm.css"

function Mapcom() {
  let data = [
    {
      img: "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productname: "car",
      price: 20000000,
      description: " SUPRA ",
    },
    {
      img: "https://images.pexels.com/photos/3166786/pexels-photo-3166786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productname: "car",
      price: 30000000,
      description: " BMW ",
    },
    {
      img: "https://images.pexels.com/photos/8634570/pexels-photo-8634570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      productname: "car",
      price: 50000000,
      description: " AUDI",
    },
    {
      img: "https://images.unsplash.com/photo-1619097763751-2881df85ed25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJ1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 20000000,
      description: " URUS ",
    },
    {
      img: "https://images.unsplash.com/photo-1685069144634-41b81464a484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN2aiUyMGxhbWJvcmdpbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 30000000,
      description: "   SVJ Lamborghini",
    },
    {
      img: "https://images.unsplash.com/photo-1587893143231-ebba3bedb2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwbTg1MGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 50000000,
      description: " BMW m850i",
    },
    {
      img: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 20000000,
      description: " TOYOTA COROLLA ",
    },
    {
      img: "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 30000000,
      description: " AUDI ",
    },
    {
      img: "https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxhdmVudGFkb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 50000000,
      description: " Lamborghini Huracan Evo",
    },
    {
      img: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzdGFuZyUyMGd0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 20000000,
      description: " MUSTANG GT350 ",
    },
    {
      img: "https://images.unsplash.com/photo-1619861312543-2464f524b382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWluaSUyMGNvb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 30000000,
      description: " MINI COOPER  ",
    },
    {
      img: "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1lcmNlZGVzJTIwYW1nJTIwZ3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 50000000,
      description: " Mercedes Amg gt",
    },
    {
      img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVycmFyaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 20000000,
      description: " ferrari",
    },
    {
      img: "https://images.unsplash.com/photo-1618353482480-61ca5a9a7879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amVlcCUyMGNvbXBhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      productname: "car",
      price: 30000000,
      description: " JEEP COMPASS",
    },
    {
      img: "https://e1.pxfuel.com/desktop-wallpaper/696/358/desktop-wallpaper-toyota-fortuner-phone-toyota-fortuner.jpg",
      productname: "car",
      price: 50000000,
      description: " Toyota fortuner",
    },
  ];
  return (
    <>
      <div className="grid_box">
        {data?.map((e, i) => {
          return <Cardcom cardata={e} key={i} />;
        })}
      </div>
    </>
  );
}

export default Mapcom;
