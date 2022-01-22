import Head from 'next/head'
import Image from 'next/image'
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import emojis from 'emojis';
import proPic from '../public/images/propic.min.png'
import { motion } from "framer-motion"

export default function Home() {


  return (
    <div className={"w-full"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://raidan.com.au/images/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="https://raidan.com.au/images/logo192.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <NextSeo
        title="Aidan Perera | Web & Mobile Application Developer"
        description="Aidan Perera Website | For more information visit raidan.com.au."
        keywords="aidan perera, raidan, developer, web and mobile application developer, software developer"
        author="Aidan Perera"
        openGraph={{
          url: 'https://aidanperera.dev',
          title: 'Aidan Perera | Web & Mobile Application Developer',
          description: 'Aidan Perera Website | For more information visit raidan.com.au.',
          site_name: 'AidanPerera',
        }}
        twitter={{
          handle: '@aidan_perera',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />


      <div className="w-full flex flex-wrap items-center justify-center h-screen flex-col">
        <div className='w-full flex flex-wrap items-center justify-center flex-1 px-5 md:px-2'>

          <div className="w-full lg:w-1/2 h-auto flex flex-wrap flex-col-reverse md:flex-row justify-center items-center rounded-lg">
            <div className={"w-full md:w-2/5 px-1 md:pr-4 shadow-2xl h-full bg-black bg-opacity-75 rounded-lg"}>


              <div className="p-4 md:p-8 text-center lg:text-left text-white">

                <motion.h1 initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} className={"text-3xl text-center font-bold pt-8 lg:pt-0 "}>Aidan Perera</motion.h1>
                <div className="mx-auto w-full pt-3 border-b-2 border-blue-500 opacity-25"></div>

                <p className="py-4 text-base flex items-center ">
                  <motion.div className="text-2xl flex w-full justify-evenly" initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}>
                    <motion.span animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0]
                    }}>{emojis.unicode(' :coffee: ')}</motion.span>
                    <motion.span animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0]
                    }}>{emojis.unicode(' :computer: ')}</motion.span>
                    <motion.span animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0]
                    }}>{emojis.unicode(' :iphone: ')}</motion.span>
                    <motion.span animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0]
                    }}>{emojis.unicode(' :movie_camera: ')}</motion.span>
                    <motion.span animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0]
                    }}>{emojis.unicode(' :video_game: ')}</motion.span>
                    <motion.span animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0]
                    }}>{emojis.unicode(' :beers: ')}</motion.span>
                  </motion.div>
                </p>

                <div className="mx-auto w-full pt-3 border-b-2 border-blue-500 opacity-25"></div>

                <motion.p className={"py-4 text-base flex items-center justify-center text-center"} initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}>
                  <i className="fas fa-briefcase mr-4 "></i>
                  <div className="flex-1">
                    Web & Mobile Application Developer at  <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }} href="https://fonseka.com.au" className="hover:text-blue-400" target="_blank">Fonseka</motion.a>
                  </div>
                </motion.p>


                <div className="py-5 w-full mx-auto flex flex-wrap items-center justify-center">
                  <motion.div className="flex space-x-6 md:order-2 justify-center text-xl" initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }} href="https://raidan.com.au/contributors/aidan-perera" target="_blank" rel="noopener noreferrer"
                      className={"focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  hover:text-blue-400 "}>
                      <i className="fas fa-globe"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }} href="https://raidan.com.au/contributors/aidan-perer" target="_blank" rel="noopener noreferrer"
                      className={" focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  hover:text-blue-400 "}>
                      <i className="fab fa-linkedin"></i>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }} href="https://github.com/ruchaidandev" target="_blank" rel="noopener noreferrer"
                      className={" focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0  hover:text-blue-400 "}>
                      <i className="fab fa-github"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }} href="https://www.instagram.com/ruchaidan/" target="_blank" rel="noopener noreferrer"
                      className={" focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0   hover:text-blue-400 "}>
                      <i className="fab fa-instagram"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }} href="https://twitter.com/aidan_perera" target="_blank" rel="noopener noreferrer"
                      className={"focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0   hover:text-blue-400 "}>
                      <i className="fab fa-twitter className="></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }} href="https://www.youtube.com/channel/UCPgkXrIkuc3zCMu7xY_as0Q" target="_blank"
                      rel="noopener noreferrer"
                      className={"focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0   hover:text-blue-400 "}>
                      <i className="fab fa-youtube"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }} href="https://www.pinterest.com.au/ruchaidan/" target="_blank" rel="noopener noreferrer"
                      className={" focus:outline-none block font-bold uppercase lg:inline-block lg:mt-0   hover:text-blue-400 "}>
                      <i className="fab fa-pinterest"></i>
                    </motion.a>
                  </motion.div>
                </div>


              </div>

            </div>

            <motion.div className="w-full  md:w-2/5 px-1 md:pl-4" initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}>

              <Image
                src={proPic}
                alt="Aidan perera"
                layout="intrinsic"
                placeholder="blur"
                priority
              />
            </motion.div>
          </div>
        </div>
        <footer className="w-full flex items-center flex-wrap justify-center h-20">
          <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Aidan Perera, Inc. All rights reserved.</p>
        </footer>
      </div>


    </div>
  )
}
