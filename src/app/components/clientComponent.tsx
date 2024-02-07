
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const MiPagina: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    
    fetch("http://localhost:3000/products") 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (

      <div className={styles.grid}>
        {/* ... Otros elementos ... */}
        <div className={styles.card}>
          <h2>Datos desde el Backend</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.name} - {item.description} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>

  );
}
export default MiPagina;