'use client'

import React, { useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";

const samplePhotos = [
  {
    src: "Lady.jpg",
    alt: "Grandma smiling in the garden",
  },
  {
    src: "Ocean.jpg",
    alt: "Grandma knitting by the window",
  },
  {
    src: "Waterfall.jpg",
    alt: "Grandma with grandchildren",
  },
];

export default function Home() {
  const [photos] = useState(samplePhotos);
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState("");
  const [memories, setMemories] = useState([
    {
      text: "She always made the best lemon cake — kitchen smelled like sunshine.",
      author: "Liora",
    },
    { text: "Taught me to plant tomatoes. We still grow them every summer.", author: "Daniel" },
  ]);

  function submitMemory(e) {
    e.preventDefault();
    if (!message.trim()) return;
    setMemories([{ text: message.trim(), author: "Anonymous" }, ...memories]);
    setMessage("");
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>In Loving Memory of Bubbie</h1>
            <p className={styles.subtitle}>A little corner to remember her voice, her hands and her stories.</p>
            <div className={styles.ctaRow}>
              <button className={styles.btn} onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>
                Share a memory
              </button>
              <button className={`${styles.btn} ${styles.secondary}`} onClick={() => setSelected((s) => (s + 1) % photos.length)}>
                Next Photo
              </button>
            </div>
          </div>
          <div className={styles.heroPhotos}>
            {/* {photos.map((p, i) => (
              <Image
                key={i}
                src={null}
                alt={p.alt}
                width={280}
                height={200}
                className={`${styles.heroPhoto} ${i === selected ? styles.active : ""}`}
                onClick={() => setSelected(i)}
              />
            ))} */}
          </div>
        </header>


        <section className={styles.about}>
          <div className={`${styles.aboutCard} ${styles.cardAnimate}`}>
            <h2>Her Story</h2>
            <p>
              She loved small things — a cup of tea with extra mint, the rustle of pages, and the laugh that made the
              whole room warmer. This page holds photos, recipes, and memories from everyone who loved her.
            </p>
          </div>
          <div className={`${styles.quote} ${styles.cardAnimate}`}>
            <blockquote>
              "If you plant kindness, you will harvest a life full of color."
              <cite>- Her favorite saying</cite>
            </blockquote>
          </div>
        </section>


        <section className={styles.memories} id="share">
          <div className={styles.gallery}>
            <div className={styles.largePhotoWrap}>
              {/* <Image
                src={photos[selected].src}
                alt={photos[selected].alt}
                width={800}
                height={420}
                className={styles.largePhoto}
              /> */}
              <div className={styles.photoCaption}>{photos[selected].alt}</div>
            </div>
            <div className={styles.thumbs}>
              {photos.map((p, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === selected ? styles.selectedThumb : ""}`}
                  onClick={() => setSelected(i)}
                  aria-label={`Choose photo ${i + 1}`}
                >
                  {/* <Image src={p.src} alt={p.alt} width={86} height={64} /> */}
                </button>
              ))}
            </div>
          </div>


          <aside className={`${styles.memoryForm} ${styles.cardAnimate}`}>
            <h3>Share a memory</h3>
            <form onSubmit={submitMemory}>
              <label className={styles.srOnly} htmlFor="memory">Your memory</label>
              <textarea
                id="memory"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a short memory or a sentence about her..."
                rows={5}
              />
              <div className={styles.formRow}>
                <button className={styles.btn} type="submit">Add memory</button>
                <button type="button" className={`${styles.btn} ${styles.secondary}`} onClick={() => setMessage("")}>Clear</button>
              </div>
            </form>


            <div className={styles.recentMemories}>
              <h4>Recent memories</h4>
              <ul>
                {memories.map((m, idx) => (
                  <li key={idx} className={styles.memoryItem}>
                    <p className={styles.memText}>{m.text}</p>
                    <div className={styles.memAuthor}>— {m.author}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/Elad-Balva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Created by Elad Balva →
        </a>
      </footer>
    </div>
  );
}
