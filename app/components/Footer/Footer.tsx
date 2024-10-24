"use client"
// import styles from "./footer.module.css";
// import Link from "next/link";

// interface CarDetail {
//   name: string;
//   price: number;
// }

// const Footer = ({ name, price}: CarDetail) => {

//   return (
//     <footer className={styles.footer} id="footer">
//       <div className={styles.container}>
//         <div className={styles.formSection}>
//           <h2>Product Inquiry</h2>
//           <form className={styles.form} id="product-inquiry-form">
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 name="productname"
//                 value={name}
//                 placeholder="Product Name"
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="number"
//                 name="price"
//                 value={price}
//                 placeholder="Price"
//                  required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input type="email" name="email" placeholder="Email" required />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows={4}
//               ></textarea>
//             </div>
//             <button type="submit" className={styles.submitButton}>
//               Book An Order
//             </button>
//           </form>
//         </div>
//         <div className={styles.linksSection}>
//           <div className={styles.navLinks}>
//             <h3>Quick Links</h3>
//             <ul>
//               <Link className="hover:text-slate-400" href={"/"}>
//                 <li className="hover:text-slate-400">Home</li>
//               </Link>
//               <Link href={"#about"}>
//                 <li className="hover:text-slate-400">About</li>
//               </Link>
//               <Link href={"/services"}>
//                 <li className="hover:text-slate-400">Products</li>
//               </Link>
//               <Link href={"#services"}>
//                 <li className="hover:text-slate-400">Services</li>
//               </Link>
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

{/* <div className={styles.socialLinks}>
<h3>Follow Us</h3>
<div className={styles.socialIcons}>
<a href="#" className={styles.socialIcon}>
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className={styles.socialIcon}>
<i className="fab fa-twitter"></i>
</a>
<a href="#" className={styles.socialIcon}>
<i className="fab fa-instagram"></i>
</a>
<a href="#" className={styles.socialIcon}>
<i className="fab fa-linkedin-in"></i>
</a>
</div>
</div> */}

import styles from "./footer.module.css";
import Link from "next/link";

interface CarDetail {
  name: string;
  price: number;
}

const Footer = ({ name, price }: CarDetail) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted with", { name, price });
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h2>Product Inquiry</h2>
          <form className={styles.form} id="product-inquiry-form" onSubmit={handleSubmit}>
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
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
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
              <li><Link className="hover:text-slate-400" href="/">Home</Link></li>
              <li><Link className="hover:text-slate-400" href="#about">About</Link></li>
              <li><Link className="hover:text-slate-400" href="/services">Products</Link></li>
              <li><Link className="hover:text-slate-400" href="#services">Services</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 Bashar Motors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;