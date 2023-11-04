import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "chora studio | products",
};

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionText}>
        <div>
          <h1>{"products"}</h1>
          <p>
            {"Chora Studio is stewarding "}
            <a href="https://chora.io" target="_blank">
              {"Chora Protocol"}
            </a>
            {
              " - distributed ledger technology for commons governance and ecological regeneration."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
