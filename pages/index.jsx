import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { useState } from "react";
import emojis from "emojis";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={"w-full"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://raidan.com.au/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          href="https://raidan.com.au/apple-touch-icon.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Script
        id="ga"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SJKJML98WC"
      ></Script>
      <Script
        id="ga-tag"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-SJKJML98WC');
                `,
        }}
      />

      <NextSeo
        title="Aidan Perera | Software Engineer"
        description="Aidan Perera Website | For more information visit raidan.com.au."
        keywords="aidan perera, raidan, developer, web and mobile application developer, software developer, software engineer, perera"
        author="Aidan Perera"
        openGraph={{
          url: "https://aidanperera.dev",
          title: "Aidan Perera | Software Engineer",
          description:
            "Aidan Perera Website | For more information visit raidan.com.au.",
          site_name: "AidanPerera",
        }}
        twitter={{
          handle: "@aidan_perera",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <div className="w-full flex flex-wrap items-center justify-center h-screen flex-col">
        <div className="w-full flex flex-wrap items-center justify-center flex-1 px-5 md:px-2">
          <div className="w-full lg:w-1/2 h-auto flex flex-wrap flex-col-reverse md:flex-row justify-center items-center rounded-lg">
            <div
              className={
                "w-full md:w-3/5 px-1 md:pr-4 shadow-2xl h-full bg-primary bg-opacity-75 rounded-lg"
              }
            >
              <div className="p-4 md:p-8 text-center lg:text-left text-white">
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={"text-3xl text-center font-bold pt-8 lg:pt-0 "}
                >
                  Aidan Perera
                </motion.h1>
                <div className="mx-auto w-full pt-3 border-b-2 border-white opacity-25"></div>

                <div className="py-4 text-base flex items-center ">
                  <motion.div
                    className="text-2xl flex w-full justify-evenly"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <motion.span
                      animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                      }}
                    >
                      {emojis.unicode(" :coffee: ")}
                    </motion.span>
                    <motion.span
                      animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                      }}
                    >
                      {emojis.unicode(" :computer: ")}
                    </motion.span>
                    <motion.span
                      animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                      }}
                    >
                      {emojis.unicode(" :iphone: ")}
                    </motion.span>
                    <motion.span
                      animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                      }}
                    >
                      {emojis.unicode(" :movie_camera: ")}
                    </motion.span>
                    <motion.span
                      animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                      }}
                    >
                      {emojis.unicode(" :video_game: ")}
                    </motion.span>
                    <motion.span
                      animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                      }}
                    >
                      {emojis.unicode(" :beers: ")}
                    </motion.span>
                  </motion.div>
                </div>

                <div className="mx-auto w-full pt-3 border-b-2 border-white opacity-25"></div>

                <motion.div
                  className={
                    "py-4 text-base flex flex-wrap items-center justify-center text-center"
                  }
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <i className="fas fa-briefcase mr-4 "></i>
                  <div className="w-auto">
                    Software Engineer at{" "}
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://merchantwarrior.com"
                      className="hover:text-secondary"
                      target="_blank"
                    >
                      Merchant Warrior
                    </motion.a>
                  </div>
                </motion.div>

                <div className="py-5 w-full mx-auto flex flex-wrap items-center justify-center">
                  <motion.div
                    className="flex space-x-6 md:order-2 justify-center text-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://raidan.com.au/contributors/aidan-perera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        "focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  hover:text-secondary "
                      }
                    >
                      <i className="fas fa-globe"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.linkedin.com/in/aidanperera/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        " focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  hover:text-secondary "
                      }
                    >
                      <i className="fab fa-linkedin"></i>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://github.com/ruchaidandev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        " focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  hover:text-secondary "
                      }
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.instagram.com/ruchaidan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        " focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0   hover:text-secondary "
                      }
                    >
                      <i className="fab fa-instagram"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://twitter.com/aidan_perera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        "focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0   hover:text-secondary "
                      }
                    >
                      <i className="fab fa-twitter className="></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.youtube.com/channel/UCPgkXrIkuc3zCMu7xY_as0Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        "focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0   hover:text-secondary "
                      }
                    >
                      <i className="fab fa-youtube"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.pinterest.com.au/ruchaidan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        " focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0   hover:text-secondary "
                      }
                    >
                      <i className="fab fa-pinterest"></i>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="w-full block transition-all ease-in-out md:w-2/5 px-1 md:pl-4 py-4 rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                src={"/images/avatarpic.png"}
                alt="Aidan Perera"
                height={300}
                width={300}
                loading="lazy"
                quality="80"
                className="rounded-full shadow"
              />
            </motion.div>
          </div>
        </div>
        <footer className="w-full flex items-center flex-wrap justify-center h-20">
          <div className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Aidan Perera |{" "}
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              href="https://raidan.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Raidan |
            </motion.a>{" "}
            All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
