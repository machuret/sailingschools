import type { Metadata } from "next";
import styles from "./network.module.css";
import { networkContent } from "./content";
export const metadata: Metadata = {title:"Our Network",description:"Meet Gabriel and Kristy, explore the websites connected with Sailing Schools, and discover how to sponsor our sailing journey.",alternates:{canonical:"https://www.sailingschools.com.au/network/"}};
// Build-time editorial HTML: no visitor input or runtime scripts.
export default function NetworkPage(){return <><section className={styles.page} dangerouslySetInnerHTML={{__html:networkContent}} /></>;}
