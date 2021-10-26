import dayjs from "dayjs"; // Date parsing
import Link from "next/link"; // Dynamic routing
import Layout from "../components/Layout"; // Component: layout
import { toast } from "react-toastify"; // Toast notifications
import Loader from "react-loader-spinner"; // Spinner
import { useEffect, useState, useLayoutEffect } from "react"; // State management
import styles from "../styles/pages/Home.module.scss"; // Page styles
import Image from 'next/image'


export default function Home() {

  return (
    // Wrap page in layout
    <Layout>
      {/* Main */}
      <Main />
    </Layout>
  );
}

/**
 * Main
 * @returns {HTMLElement}
 */
function Main() {
  return (
    <div>
    <div className={styles.main}>
       <div className={styles.main_content}>
        <h1>Samsarah</h1>
        <h4>The financial social network</h4>
        <div className={styles.main_buttons}>
            <Link href="/mint">
              <button>
                Create Profile
              </button>
            </Link> 
        </div>  
      </div>
     </div>
     </div>
  );
    
}