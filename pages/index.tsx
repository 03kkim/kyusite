import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-open-sans font-light bg-background h-screen">
      <div className="py-10 pl-10">
        <h1 className="text-6xl">Kyu Hong Kim</h1>
      </div>
      <div className="pl-10 flex-col space-y-5 text-4xl">
        <h2>Bio</h2>
        <h2>Dev</h2>
        <h2>Music</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
}
