// "use client"
// import { timeStamp } from "console";
// import styles from "./footer.module.css";
// import Link from "next/link";
// import { ChangeEvent, useState } from "react";

// interface CarDetail {
//   name: string;
//   price: number;
// }



// const Footer = ({ name, price }: CarDetail) => {
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState("");
// const [address, setAddress] = useState("");
// const [message, setMessage] = useState("");



//   const set_Email = (e:ChangeEvent<HTMLInputElement>) => {
//   setEmail(e.target.value)
//   }
//   const set_Phone = (e:ChangeEvent<HTMLInputElement>) => {
//   setPhone(e.target.value)
//   }
//   const set_Address = (e:ChangeEvent<HTMLInputElement>) => {
//   setAddress(e.target.value)
//   }
//   const set_Message = (e:ChangeEvent<HTMLTextAreaElement>) => {
//   setMessage(e.target.value)
//   }




// const WEBHOOK_URL = "https://bashartech.app.n8n.cloud/webhook-test/a6a45c20-f5bf-4fbf-9453-42cfa6b72d95"

// const product_name = name
// const product_price = price

// const product_data = `The name of the product is ${product_name} and the price of the product is ${product_price} . User send their Email: ${email} , Phone Number: ${phone} , Address: ${address} and Message: ${message}`

// const handleSend = async () => {
  
//   const response = await fetch(WEBHOOK_URL,{
//     method: "POST",
//     headers:{
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       message:product_data,
//       timeStamp: new Date().toISOString()
//     })
//   })
  
//   const data = await response.json()
//   console.log("Webhook response:", data)

// }




//   return (
//     <footer className={styles.footer} id="footer">
//       <div className={styles.container}>
//         <div className={styles.formSection}>
//           <h2>Product Inquiry</h2>
//           <form className={styles.form} id="product-inquiry-form" onSubmit={handleSend}>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 name="productname"
//                 value={name}
//                 placeholder="Product Name"
//                 readOnly
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="number"
//                 name="price"
//                 value={price}
//                 placeholder="Price"
//                 readOnly
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input type="email" name="email" placeholder="Email" required
//               onChange={set_Email} />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//                 onChange={set_Phone}
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 required
//                 onChange={set_Address}
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows={4}
//                 onChange={set_Message}
//               ></textarea>
//             </div>
//             <button type="submit" className={styles.submitButton}
//             onClick={handleSend}
//             >
//               Book An Order
//             </button>
//           </form>
//         </div>
//         <div className={styles.linksSection}>
//           <div className={styles.navLinks}>
//             <h3>Quick Links</h3>
//             <ul>
//               <li><Link className="hover:text-slate-400" href="/">Home</Link></li>
//               <li><Link className="hover:text-slate-400" href="#about">About</Link></li>
//               <li><Link className="hover:text-slate-400" href="/services">Products</Link></li>
//               <li><Link className="hover:text-slate-400" href="#services">Services</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className={styles.copyright}>
//         <p>&copy; 2024 Bashar Motors. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import styles from "./footer.module.css";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

interface CarDetail {
  name: string;
  price: number;
}

const Footer = ({ name, price }: CarDetail) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const WEBHOOK_URL =
    "https://bashartech.app.n8n.cloud/webhook/a6a45c20-f5bf-4fbf-9453-42cfa6b72d95";

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    setEmail("")
    setAddress("")
    setMessage("")
    setPhone("")

    // ✅ Create one structured object with all data in flat format
    const structuredData = {
      product_name: name,
      product_price: price,
      customer_email: email,
      customer_phone: phone,
      customer_address: address,
      customer_message: message,
      // order_status: "Pending",
      order_date: new Date().toISOString(),
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(structuredData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("✅ Data successfully sent to n8n!");
      alert("Your order has been submitted successfully!");
    } catch (error) {
      console.error("❌ Error sending data to n8n:", error);
      alert("Failed to submit order. Please try again later.");
    }
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h2>Product Inquiry</h2>

          <form
            className={styles.form}
            id="product-inquiry-form"
            onSubmit={handleSend}
          >
            <div className={styles.formGroup}>
              <input
                type="text"
                name="productname"
                value={name}
                placeholder="Product Name"
                readOnly
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="number"
                name="price"
                value={price}
                placeholder="Price"
                readOnly
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Book An Order
            </button>
          </form>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.navLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link className="hover:text-slate-400" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-400" href="#about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-400" href="/services">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-400" href="#services">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2024 Bashar Motors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
