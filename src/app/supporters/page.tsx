import type { Metadata } from "next";
import { NetworkSupporters } from "../network-supporters";
import styles from "../network-supporters.module.css";

export const metadata: Metadata = { title: "Supporters | Sailing Schools", description: "Meet the sponsors supporting Sailing Schools and the YouSail network. Browse their logos and visit their official websites.", alternates: { canonical: "/supporters/" } };
export default function SupportersPage() { return <><section className={styles.page}><h1>Supporters</h1><p>Meet the organisations supporting Sailing Schools and our wider sailing, boating and diving community. Select a logo to visit the sponsor’s website in a new tab.</p><NetworkSupporters grid /></section></>; }
