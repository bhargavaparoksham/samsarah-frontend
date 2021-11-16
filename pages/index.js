import dayjs from "dayjs"; // Date parsing
import Link from "next/link"; // Dynamic routing
import Layout from "../components/Layout"; // Component: layout
import { toast } from "react-toastify"; // Toast notifications
import Loader from "react-loader-spinner"; // Spinner
import { useEffect, useState, useLayoutEffect } from "react"; // State management
import styles from "../styles/pages/Home.module.scss"; // Page styles
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import { style } from "dom-helpers";


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
    // <div>
    //   <div className={styles.main}>
    //     <div className={styles.main_content}>
    //       <h1>Samsarah</h1>
    //       <h4>The financial social network</h4>
    //       <div className={styles.main_buttons}>
    // <Link href="/profile">
    //   <button>
    //     Create Profile
    //   </button>
    // </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <HeroSection />
      <CreateJoinSection />

    </div>
  );

}

function HeroSection() {
  return (
    <section className={styles.home_wrapper}>
      <div className={styles.home_wrapper_sec}>
        <div className={styles.hero_banner}></div>
      </div>
      <div className={styles.home_wrapper_right_sec}>
        <h2>Samsarah</h2>
        <p>
          Join the financial social netowrk<br /> built on Ethereum
        </p>
        <Link href="/profile">
          <button className={styles.CTA}>
            Create Profile
          </button>
        </Link>
      </div>
    </section>
  );
}

function CreateJoinSection() {
  return (
    <section className={styles.section_create_join}>
      <Container maxWidth="lg">
        <div className={styles.create_join_wrapper}>
          <div className={`${styles.create_join_wrapper_sec} ${styles.create_join_wrapper_left}`}>
            <h2>Create or Join a <br /> DAO
            </h2>
            <p>
              Creating  or joining a DAO is now as <span><br /></span> easy as creating a facebook group.Check out what DAO’s <span><br /></span> your friends are part of & apply to join them.
            </p>
            <Link href="/profile">
              <button className={styles.CTA}>
                Create Profile
              </button>
            </Link>
          </div>
          <div className={`${styles.create_join_wrapper_sec} ${styles.create_join_wrapper_banner}`}>
            <img src="creat-join-sec.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}