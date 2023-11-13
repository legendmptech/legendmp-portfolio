import React, { useEffect, useState } from "react";
import "./../styles/home.css"
import { Accordion, AccordionItem, Button, CircularProgress, Image, Input, Link } from "@nextui-org/react";
// import Particle from "../components/Particle";
// import { BsWhatsapp } from 'react-icons/bs'
import Timer from "../components/Timer";
import { fstore } from "../firebase-config";
import { doc, getDoc } from 'firebase/firestore'

function HomePage(props) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [stateOfData, setStateOfData] = useState("failed")
  const [couponData, setCouponData] = useState(data.couponData)
  const [isCouponAvailable, setIsCouponAvailable] = useState(false)
  const [couponText, setCouponText] = useState("")
  // TIMER COMPONENT PROPS
  const deadline = new Date('November 14, 2023 23:59:59').getTime()
  // const END_DATE_TIMER = deadline.getTime() - new Date().getTime();
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
  const benefits = [
    {
      title: "Effortless Creation", desc: "Say goodbye to technical challenges! Create your website by simply filling in the blanks. No coding or design skills required. It's as easy as ABC."
    },
    { title: "Affordable Excellence", img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-UELEEn1uduAkfYmElgiHwqzHNCAO0ScNQ&usqp=CAU", desc: "Our Diwali offer brings you professional portfolios at an unbelievable price. Experience top-notch quality without burning a hole in your pocket." },
    { title: "Self-Management", img_link: "https://www.ibexa.co/var/site/storage/images/_aliases/ibexa_block/2/4/5/7/227542-2-eng-GB/Website%20Management-Illustration.png", desc: "Take control of your online presence. Update your portfolio, add new achievements, or modify your details anytime, anywhere, with our user-friendly interface." },
    { title: "Endless Possibilities", desc: "Your portfolio might just be a click away from your dream opportunity. Increase your visibility, as your profile could appear in search results, opening doors to exciting prospects." },
    { title: "Impress with Professionalism", desc: "Make a powerful first impression with a polished, modern, and sleek portfolio. Showcase your skills and expertise in a way that captivates and convinces potential employers or clients." },
    { title: "Stand Out, Be Remembered", desc: "In a competitive world, standing out is essential. A professionally crafted portfolio sets you apart, making you memorable and compelling in the eyes of recruiters, clients, or academic institutions." },
    { title: "Appear in Search Results", desc: "Make your portfolio strong and appear in the Web Search Results", img_link: "https://us.123rf.com/450wm/vectorwin/vectorwin2203/vectorwin220304983/183236252-search-result-vector-icon-concept-search-result-in-internet-online-and-on-computer-informative.jpg?ver=6" }
  ]
  const handleApplyCoupon = () => {
    let list = couponData?.allCoupons
    for (var i = 0; i < list.length; i++) {
      console.log(list[i])
      if (list[i].toLowerCase() === couponText.toLowerCase()) {
        console.log(list[i])
        setIsCouponAvailable(true)
        break
      }
    }
  }
  useEffect(() => {
    async function getDataFromStore() {
      setIsLoading(true)
      const docRef = doc(fstore, "general", "portfolios");
      await getDoc(docRef)
        .then((snap) => {
          let d = snap.data()
          setStateOfData("success");
          setData(d);
          setCouponData(d.couponData);
          setIsLoading(false)
        })
        .catch((err) => {
          setStateOfData("failed");
          setIsLoading(false)
          console.log(err);
        });
    }
    getDataFromStore()
  }, [])
  return (
    <div className="page px-3 home">
      {stateOfData === "failed" ? <CircularProgress isLoading={isLoading} color="warning" aria-label="Loading..." /> :
        <>
          <div className="w-full flex flex-row justify-center h-20 fixed bottom-0 left-0 z-50 px-2 bg-gray-800">
            {/* <div className="hideIt flex flex-col justify-center gap-4">
              <Timer targetDate={deadline} />
            </div> */}
            <div className="flex flex-row justify-center">
              <PurchaseBtn couponData={couponData} isCouponAvailable={isCouponAvailable} style={{ padding: "10px", fontSize: "20px" }} />
            </div>
          </div>
          <div className="w-full max-w-5xl flex flex-col justify-center items-center">
            <h1 className="title"><span className="text-orange-500">Elevate</span> <span className="">Your <span className="text-orange-400">Online</span> Presence</span></h1>
            <h2 className="subtitle font-normal">Professional Portfolio Websites for <b>Students</b>, <b>Job Seekers</b>, and <b>Working Professionals</b></h2>
            {/* <Particle option_name={"diwali"} /> */}
            <p className="max-w-prose text-center font-light text-3xl italic my-6">&apos;Showcase your skills, projects, Achivements and experiences in your portfolio website&apos;</p>
            <div className="w-full flex flex-col content-center md:flex-row text-justify px-4 py-7 gap-4">
              <div className="cont1 max-w-prose flex flex-col gap-2">
                <p className="highlight">✅Just fill in the blanks and make your website in just 10 minutes</p>
                <p className="highlight">✅No Technical Knowledge required </p>
                <p className="highlight">✅Create and Manage your website on your own, anytime anywhere using your phone</p>
                <p className="highlight">✅Appear in Web Search Results</p>
                <p className="highlight">✅Increased rate of getting selected in an interview</p>
                <Link isExternal href="https://portfolio.legendmp.com/p/s_mohan_prasath" color="warning" isBlock showAnchorIcon target="_blank"
                  rel="noopener noreferrer">PREVIEW THE PORTFOLIO WEBPAGE</Link>
                <div className="mt-3 md:flex-col">
                  <p className="hightlight font-bold text-center text-4xl">Limited Time</p>
                  <Timer targetDate={deadline} />
                </div>
              </div>
              <div className="cont2 md:w-1/2">
                <img alt="Legendmp Portfolio Dashboard" src="https://blogger.googleusercontent.com/img/a/AVvXsEhpA90cyp-g5r2z0j7es5175zsBKevasPksfCvCoy49rOCH8f7G1Zgjk4NDXPDztz6Cqu5fFHZG3bbiBRBz12oPwYOSIxw7LWhfSZ0c2_80TYfUAwXPpbdrfN9k4dDqGpP1hV1REYwwHW5zmRjoWq7KecMUl53P_tcL9MhV8FP4z5BE6K8kB6IPttRZaGTw=s16000" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="cont3 flex flex-col w-full text-center gap-1">
                <span className={`price ${isCouponAvailable ? "price-strike" : "glow"}`}>₹399</span>
                <span className={`${!isCouponAvailable ? "hidden" : ""} price glow`}>₹{199}</span>
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
                <div className="flex flex-col content-center">
                  <span className="text-3xl">Come close to us!</span>
                  <div>
                    <PurchaseBtn couponData={couponData} isCouponAvailable={isCouponAvailable} />
                  </div>
                  {/* <p className="text flex w-full justify-center items-center gap-3 mt-3 text-gray-200">For your comfortable<BsWhatsapp /></p> */}
                  {/* <div className=""><Button variant="ghost" color="success" as={Link} href="https://wa.link/af7t89">Chat for Purchase</Button></div> */}
                </div>
              </div>
              {/* PROCEDURE */}
              <div className="my-7 px-3">
                <h1 className="subtitle mb-5">Procedure</h1>
                <p className="max-w-prose font-light text-xl">
                  After you make the payment, we will send you
                  a Google Form to collect your details to update your
                  portfolio website
                  <br /> <b> Note : You can send your Resume instead </b> <br />
                  Withing a Day, You will receive Login Credentials to login in our site and you
                  can manage your portfolio by using your Device
                </p>
              </div>
            </div>
            {/* RECENT PURCHASES OF PEOPLE */}
            <div>

            </div>
            {/* WHY CHOOSE PROFESSIONAL WEBSITE */}
            <div className="my-7 px-3">
              <h1 className="subtitle mb-5">Why Choose our Professional Portfolio ?</h1>
              <div className="flex flex-col gap-4">
                {benefits?.map((item, key) => <div key={key} className="w-full flex flex-col items-center gap-3">
                  <h3 className="text-center text-xl md:text-2xl">{item.title}</h3>
                  <p className="text-gray-300 text-lg md:text-xl">{item.desc}</p>
                  {item?.img_link && <Image src={item?.img_link} width={200} height={200} />}
                </div>)}
              </div>
            </div>
            <div className="text-white w-full py-4">
              <h1 className="subtitle mb-6">FREQUENTLY ASKED QUESTIONS</h1>
              <Accordion className="text-white">
                {
                  faqs.map(prop => <AccordionItem key={prop.id} aria-label={prop.qn} title={<span className="text-white text-xl md:text-2xl font-light">{prop.id}. {prop.qn}</span>} className="text-white text-lg md:text-xl">{prop.ans}</AccordionItem>)
                }
              </Accordion>
            </div>
          </div>
        </>}
    </div>
  );
}
const PurchaseBtn = ({ couponData, isCouponAvailable, style }) => {
  // return <a href="https://bit.ly/legendmp-portfolio-payment-form" rel="noreferrer noopener" target="_blank"><button className={`btn-purchase`} style={{ ...style }}>Make your Brand now! {"\n"}₹{isCouponAvailable ? "199" : "399"}</button></a>
  return <a href="https://wa.link/af7t89" rel="noreferrer noopener" target="_blank"><button className={`btn-purchase`} style={{ ...style }}>Make your Brand now! {"\n"}₹{isCouponAvailable ? "199" : "399"}</button></a>
}
export default HomePage;
