import Head from "next/head"; // Head + meta
import Link from "next/link"; // Routing
import state from "../utils/state"; // Global state
import NextNProgress from "nextjs-progressbar"; // Navigation progress bar
import styles from "../styles/components/Layout.module.scss"; // Component styles
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"; // Address avatar
import { Container } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
// import Links from '@mui/material/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function Layout({ children }) {
   return (
      <div>
         {/* Navigation progress bar */}
         <NextNProgress
            color="#282846"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            options={{
               showSpinner: false,
            }}
         />

         {/* HTML Meta + Header */}
         <Meta />
         {/* <Header /> */}
         <HeaderNav />
         <div className={styles.layout__content}>{children}</div>
         <Footer />
      </div>
   );
}

// HTML Head
function Meta() {
   return (
      <Head>
         {/* Primary Meta Tags */}
         <title>Samsarah</title>
         <meta name="title" content="Samsarah" />
         <meta
            name="description"
            content="Samsarah is a financial social network"
         />
         {/* Google fonts */}
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
         />
      </Head>
   );
}

// Header (+ auth management)
function Header() {
   // Collect address and unlock function from global state
   const { address, unlock } = state.useContainer();

   return (
      <div className={styles.layout__header}>
         <Container maxWidth="lg">
            <div className="">
               {/* Logo */}
               <div>
                  <Link href="/">
                     <a>
                        <img src="samsara-logo.svg" alt="logo" />
                     </a>
                  </Link>
               </div>

               {/* Auth button */}
               <div>
                  <button onClick={unlock}>
                     {address ? (
                        // If authenticated
                        <>
                           {/* Render address */}
                           <span>
                              {address.startsWith("0x")
                                 ? // If ETH address, render truncated address
                                 address.substr(0, 6) +
                                 "..." +
                                 address.slice(address.length - 4)
                                 : // Else, render ENS name
                                 address}
                           </span>
                           {/* Render avatar */}
                           <Jazzicon diameter={16} seed={jsNumberForAddress(address)} />
                        </>
                     ) : (
                        // Else, display Connect Wallet prompt
                        <img src="wallet.svg" alt="" />
                     )}
                  </button>
               </div>
            </div>
         </Container>
      </div>
   );
}

function HeaderNav() {
   const { address, unlock } = state.useContainer();
   return (
      <nav className={styles.layout__header}>
         <Container>
            <div className={styles.navbar}>
               <Link href="/">
                  <a>
                     <img src="samsara-logo.svg" alt="logo" />
                  </a>
               </Link>
               <div className={styles.searchbar_wrapper}>
                  <input type="text" placeholder="Search any ENS name or Ethereum address" className={styles.searchbar} />
               </div>
               <button onClick={unlock}>
                  {address ? (
                     // If authenticated
                     <>
                        {/* Render address */}
                        <span>
                           {address.startsWith("0x")
                              ? // If ETH address, render truncated address
                              address.substr(0, 6) +
                              "..." +
                              address.slice(address.length - 4)
                              : // Else, render ENS name
                              address}
                        </span>
                        {/* Render avatar */}
                        <Jazzicon diameter={16} seed={jsNumberForAddress(address)} />
                     </>
                  ) : (
                     // Else, display Connect Wallet prompt
                     <img src="wallet.svg" alt="" />
                  )}
               </button>
            </div>
         </Container>
      </nav>
   );
}


function Footer() {
   return (
      <footer className={styles.footer}>
         <Container>
            <div className={styles.footer_wrapper}>
               <div>
                  <img src="samsara-logo-white.png" />
                  <span>Samsarah</span>
               </div>
               <div>
                  <ul>
                     <li>
                        <Link href="/">
                           <img src="logo-1.png" alt="" />
                        </Link>
                     </li>
                     <li>
                        <Link href="/">
                           <img src="twitter.png" alt="" />
                        </Link>
                     </li>
                     <li>
                        <Link href="/">
                           <img src="logo-3.png" alt="" />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
      </footer>
   );
}

