"use client";
import { createElement } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import styles from "./network-supporters.module.css";

export function NetworkSupporters({ grid = false }: { grid?: boolean }) {
  const pathname = usePathname();
  if (!grid && pathname !== "/") return null;
  return <>{createElement("yousail-supporters", { site: "sailingschools", mode: grid ? "grid" : "carousel" })}<Script src="https://yousail.com.au/network-supporters.v1.js" strategy="afterInteractive" /></>;
}
export function NetworkSupportersLink() {
  return <div className={styles.footerLink}><Link href="/supporters/" prefetch={false}>Supporters</Link></div>;
}
