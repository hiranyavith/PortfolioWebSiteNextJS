"use client";
import Image from "next/image";

//imges
import profileImg from "../public/programming_profile_img.svg";
import Card1Img from "../public/card1_img.png";
import Card2Img from "../public/card2_img.png";
import Card3Img from "../public/card3_img.png";
import Card4Img from "../public/card4_img.png";
import Card5Img from "../public/card5_img.png";
import Card6Img from "../public/card6_img.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import techCart from "../public/techcartlogin.png";
import StudenMUI from "../public/studentmui.png";
import Uidesign from "../public/Desktop - 1 1.png";
import AdyapanaLogin from "../public/adyapanalogin.png";
import AdyapanaHome from "../public/adyapanahome.png";
import AdyapanaStudentPage from "../public/adyapanasm.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  //function
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark:" : ""}>
      <main className="font-outfit bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        {/* nav and hero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className=" text-sm text-gray-500 font-roboto md:text-xl lg:text-2xl">
              Developed By Mr <b className="font-outfit">Hiranye Vithanage</b>
            </h1>
            <ul className="flex items-center">
              {/* icon */}
              <li>
                <BsFillMoonStarsFill
                  onclick={() => setdarkmode(!darkmode)}
                  className="cursor-pointer text-xl mx-10"
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1_zT0zB6VII-iDKkkTxV6tfhnjOluZeq8/view?usp=sharing"
                  download={"resume"}
                  className="bg-yellow-400 text-black px-8 py-2 border-none rounded-xl"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* hero */}
          <div className="text-center p-10">
            <h1 className="font-outfit text-5xl font-bold text-yellow-400 py-2 md:text-6xl lg:text-7xl lg:mb-4">
              Hiranye Vithange
            </h1>
            <h3 className="text-2xl font-semibold md:text-3xl">
              Full Stack Software Engineer
            </h3>
            <p className="text-sm py-5 text-gray-400 leading-6 max-w-xl mx-auto md:text-md">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
          {/* social media */}
          <div className=" text-3xl flex justify-center gap-16 text-gray-700 py-2 lg:text-6xl md:text-5xl">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#">
                <AiFillGithub />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="#">
                <AiFillInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-10 rounded-full">
              {/* profile */}
              <Image src={profileImg} alt="Profile Image Here" layout="fill" />
            </div>
          </motion.div>
        </section>
        {/* services */}
        <section>
          <div className="">
            <h2 className="text-5xl py-10 font-bold opacity-60">
              Sevices I Offer
            </h2>
            <p className="text-sm py-2 text-gray-400 leading-6">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
          {/* services card */}
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* card1 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card1Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Graphic Designing
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus sed amet sit harum natus, quaerat et unde
                  adipisci, doloremque aspernatur nostrum, error in.
                </p>
              </div>
            </motion.div>
            {/* card2 */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card2Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  App Development
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus sed amet sit harum natus, quaerat et unde
                  adipisci, doloremque aspernatur nostrum, error in.
                </p>
              </div>
            </motion.div>
            {/* card3 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card3Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Web Development
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus sed amet sit harum natus, quaerat et unde
                  adipisci, doloremque aspernatur nostrum, error in.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* card4 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card4Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Server Side Dev
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus sed amet sit harum natus, quaerat et unde
                  adipisci, doloremque aspernatur nostrum, error in.
                </p>
              </div>
            </motion.div>
            {/* card5 */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card5Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Software Application Dev
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus sed amet sit harum natus, quaerat et unde
                  adipisci, doloremque aspernatur nostrum, error in.
                </p>
              </div>
            </motion.div>
            {/* card6 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className=" bg-yellow-200 text-center shadow-md p-5 rounded-xl my-10">
                <Image
                  src={Card6Img}
                  alt="Figma Img"
                  width={150}
                  height={150}
                  className="inline"
                />
                <h2 className="text-3xl font-outfit opacity-60">
                  Problem Solving
                </h2>
                <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus sed amet sit harum natus, quaerat et unde
                  adipisci, doloremque aspernatur nostrum, error in.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        {/* my work */}
        <section>
          <div className="">
            <h2 className="text-5xl py-10 font-bold opacity-60">Portfolio</h2>
            <p className="text-sm py-2 text-gray-800 leading-6 opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus sed amet sit harum natus, quaerat et unde adipisci,
              doloremque aspernatur nostrum, error in.
            </p>
          </div>
          {/* images */}
         
          <div className=" flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <motion.div whileHover={{scale:1.1,rotate:3}} whileTap={{
                scale:0.8,
                rotate:-10,
                borderRadius:"100%"
              }}>
              <Image
                src={techCart}
                alt="TechCart Site"
                layout="responsive"
                className="rounded-lg object-cover"
              />
              </motion.div>
            </div>
            <div className="basis-1/3 flex-1">
            <motion.div whileHover={{scale:1.1,rotate:3}} whileTap={{
                scale:0.8,
                rotate:-10,
                borderRadius:"100%"
              }}>
              <Image
                src={StudenMUI}
                alt="TechCart Site"
                layout="responsive"
                className="rounded-lg object-cover"
              />
              </motion.div>

            </div>
            <div className="basis-1/3 flex-1">
            <motion.div whileHover={{scale:1.1,rotate:3}} whileTap={{
                scale:0.8,
                rotate:-10,
                borderRadius:"100%"
              }}>
              <Image
                src={Uidesign}
                alt="TechCart Site"
                layout="responsive"
                className="rounded-lg object-cover"
              />
              </motion.div>

            </div>
            <div className="basis-1/2 flex-1">
            <motion.div whileHover={{scale:1.1,rotate:3}} whileTap={{
                scale:0.8,
                rotate:-10,
                borderRadius:"100%"
              }}>
              <Image
                src={AdyapanaLogin}
                alt="TechCart Site"
                layout="responsive"
                className="rounded-lg object-cover"
              />
              </motion.div>

            </div>
            <div className="basis-1/3 flex-1">
            <motion.div whileHover={{scale:1.1,rotate:3}} whileTap={{
                scale:0.8,
                rotate:-10,
                borderRadius:"100%"
              }}>
              <Image
                src={AdyapanaHome}
                alt="TechCart Site"
                layout="responsive"
                className="rounded-lg object-cover"
              />
              </motion.div>

            </div>
            <div className="basis-1/3 flex-1">
            <motion.div whileHover={{scale:1.1,rotate:3}} whileTap={{
                scale:0.8,
                rotate:-10,
                borderRadius:"100%"
              }}>
              <Image
                src={AdyapanaStudentPage}
                alt="TechCart Site"
                layout="responsive"
                className="rounded-lg object-cover"
              />
              </motion.div>

            </div>
          </div>
        </section>
        {/* footer */}
        <footer className=" border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center">
          <div className="">
            <h3 className=" text-base mb-2">Contact For More Details</h3>
            <p className="opacity-40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              ab placeat. Blanditiis beatae cumque quasi, illum maxime illo
              veniam, ducimus labore quo dolore voluptatem! Adipisci non eius
              maxime recusandae maiores.
            </p>
          </div>
          <div className="">
            <div className=" text-2xl flex justify-center gap-16 text-gray-700 py-2 opacity-80 md:text-5xl lg:text-6xl">
              <a href="#">
                <AiFillGithub />
              </a>
              <a href="#">
                <AiFillLinkedin />
              </a>
              <a href="#">
                <AiFillTwitterCircle />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
