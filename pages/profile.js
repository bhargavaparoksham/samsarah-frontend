import Layout from "../components/Layout"; // Layout wrapper
import { useRouter } from "next/router"; // Navigation
import styles from "../styles/pages/Profile.module.scss"; // Page styles
import Link from "next/link"; // Dynamic routing
import { useEffect, useState } from "react"; // State management
import Image from 'next/image';


export default function Faq() {

  return (
    // Wrap page in layout
    <Layout>
    	{/* main */}
      <Profile />
    </Layout>
  );
}


function Profile(){
	return(
		<div className={styles.main}>
    	 	<h1> My Profile</h1>
      </div>
	);
}