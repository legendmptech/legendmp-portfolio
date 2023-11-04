import React, { useState } from "react";
import "./../styles/home.css"
import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
// import Particle from "../components/Particle";
import { BsWhatsapp } from 'react-icons/bs'

function HomePage(props) {
  const [data] = useState({
    price: "399",
    disCountPrice: "199",
    coupons: ['PSG360']
  })
  const [isCouponAvailable, setIsCouponAvailable] = useState(false)
  const [couponText, setCouponText] = useState("")

  // USER INTERFACE STATE
  const faqs = [
    { "id": 1, "qn": "What is a professional portfolio website?", "ans": "A professional portfolio website is a personalized online platform where individuals can showcase their skills, achievements, and work samples. It serves as a digital resume, helping users make a strong impression on potential employers, clients, or educational institutions." },
    { "id": 2, "qn": "Do I need technical knowledge to create my portfolio website?", "ans": "No, our platform is user-friendly and does not require any technical expertise. You can create your portfolio website by simply filling in the provided templates, making the process hassle-free." },
    { "id": 3, "qn": "Can I customize the design of my portfolio website?", "ans": "Yes, you can personalize your website with various templates, color schemes, and layouts. Choose the one that best represents your style and professional identity." },
    { "id": 4, "qn": "Is my portfolio website mobile-friendly?", "ans": "Absolutely! All portfolio websites created on our platform are mobile-responsive, ensuring a seamless user experience on smartphones, tablets, and desktops." },
    { "id": 5, "qn": "Can I update my portfolio content after creating the website?", "ans": "Yes, you have full control over your content. You can easily update your skills, achievements, projects, or any other details at any time using our intuitive editing tools." },
    { "id": 6, "qn": "Will my portfolio appear in search engine results?", "ans": "Yes, your portfolio website is designed to be search engine friendly. Over time, your profile may appear in search results, increasing your online visibility." },
    { "id": 7, "qn": "Is there customer support available if I need assistance?", "ans": "Absolutely! We provide dedicated customer support to assist you with any queries or issues you may encounter while creating or managing your portfolio website." },
    { "id": 8, "qn": "Can I connect my own domain name to my portfolio website?", "ans": "Yes, you can use your own custom domain name, providing a professional and branded web address for your online portfolio." },
    { "id": 9, "qn": "Is there a limit to the number of projects or achievements I can showcase?", "ans": "No, there are no limits! You can showcase as many projects, skills, certifications, or achievements as you like, allowing you to comprehensively represent your abilities." },
    { "id": 10, "qn": "How secure is my data on the platform?", "ans": "We prioritize the security and privacy of your data. Our platform uses industry-standard encryption and security measures to ensure your information is safe and protected." }
  ]


  const handleApplyCoupon = () => {
    let list = data?.coupons
    for (var i = 0; i < list.length; i++) {
      console.log(list[i])
      if (list[i].toLowerCase() === couponText.toLowerCase()) {
        console.log(list[i])
        setIsCouponAvailable(true)
        break
      }
    }
  }
  return (
    <div className="page">
      <h1 className="title"><span className="text-orange-500">Elevate</span> <span className="">Your <span className="text-orange-400">Online</span> Presence</span></h1>
      <h2 className="subtitle font-normal">Professional Portfolio Websites for <b>Students</b>, <b>Job Seekers</b>, and <b>Working Professionals</b></h2>
      {/* <Particle option_name={"diwali"} /> */}
      <div className="flex flex-col text-justify px-4 py-7 gap-4">
        <div className="cont1">
          <p className="text">Unlock your online potential effortlessly! <span className="bg-orange-500">Dive into the world of professional portfolios</span> tailored for students, jobseekers, and professionals. Craft your <span className="bg-orange-500">unique digital identity hassle-free</span>. Showcase your skills, achievements, and aspirations <span className="underline">without breaking a sweat</span>. This is your chance to stand out and leave a lasting impression. <span className="bg-red-700">Seize the opportunity now</span> and make your mark online!</p>
        </div>
        <div className="cont2">
          <img alt="Legendmp Portfolio Dashboard" src="https://be10x.in/wp-content/uploads/2023/10/Red-Abstract-YouTube-Thumbnail-1.jpg" />
        </div>
        <div className="cont3 flex flex-col w-full text-center gap-1">
          <span className={`price ${isCouponAvailable ? "price-strike" : "glow"}`}>₹{data?.price}</span>
          <span className={`${!isCouponAvailable ? "hidden" : ""} price glow`}>₹{data?.disCountPrice}</span>
          <div className="flex flex-row gap-3 mb-3 justify-center">
            <Input
              isClearable
              type="text"
              value={couponText}
              onValueChange={setCouponText}
              variant="flat"
              placeholder="ENTER COUPON CODE"
              onClear={() => { setCouponText(""); setIsCouponAvailable(false) }}
              className="max-w-xs text-black"
            />
            <Button color="success" variant="shadow" onClick={handleApplyCoupon} isDisabled={isCouponAvailable}>
              APPLY
            </Button>
          </div>
          {isCouponAvailable && <div>
            <h2 className="subtitle">Early bird offer <span className="text-5xl">🦜</span>
            </h2>
            <p className="text">If you miss this offer! Can't get the same at this price</p></div>}
          <div>
            <span className="text-3xl">Come close to us!</span>
            <p className="text flex w-full justify-center items-center gap-3">Make your Payment through whatsapp <BsWhatsapp /></p>
          </div>
          <button className="btn-purchase">Make your Brand now! {"\n"}₹{isCouponAvailable ? data?.disCountPrice : data?.price}</button>
        </div>
      </div>
      {/* <div className="w-full h-20 absolute bottom-0 left-0 bg-gray-800"></div> */}
      <div className="px-3 home-sec-choose">
        <h1 className="subtitle">Why Choose our Professional Portfolio ?</h1>
        <ul>
          <li><b>Effortless Creation:</b> Say goodbye to technical challenges! Create your website by simply filling in the blanks. No coding or design skills required. It's as easy as ABC.</li>
          <li><b>Affordable Excellence:</b> Our Diwali offer brings you professional portfolios at an unbelievable price of just Rs. 199. Experience top-notch quality without burning a hole in your pocket.</li>
          <li><b>Self-Management:</b> Take control of your online presence. Update your portfolio, add new achievements, or modify your details anytime, anywhere, with our user-friendly interface.</li>
          <li><b>Endless Possibilities:</b> Your portfolio might just be a click away from your dream opportunity. Increase your visibility, as your profile could appear in search results, opening doors to exciting prospects.</li>
          <li><b>Impress with Professionalism:</b> Make a powerful first impression with a polished, modern, and sleek portfolio. Showcase your skills and expertise in a way that captivates and convinces potential employers or clients.</li>
          <li><b>Stand Out, Be Remembered:</b> In a competitive world, standing out is essential. A professionally crafted portfolio sets you apart, making you memorable and compelling in the eyes of recruiters, clients, or academic institutions.</li>
        </ul>
      </div>
      <div className="text-white w-full py-4">
        <h1 className="subtitle mb-6">FREQUENTLY ASKED QUESTIONS</h1>
        <Accordion className="text-white">
          {
            faqs.map(prop => <AccordionItem key={prop.id} aria-label={prop.qn} title={<span className="text-white">{prop.id}. {prop.qn}</span>} className="text-white">{prop.ans}</AccordionItem>)
          }
        </Accordion>
      </div>
    </div>
  );
}
export default HomePage;
