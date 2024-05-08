import React from "react";
import Meta from "../../components/Meta/Meta";
import "./Product.scss";
// PRODUCT IMAGES
import { Link } from "react-router-dom";
import ProdductImage3 from "../../Assets/images/HOME/productlogo/airvoice.jpg";
import ProdductImage2 from "../../Assets/images/HOME/productlogo/SenseBot2.png";
import ProdductImage0 from "../../Assets/images/HOME/productlogo/SenseVoice.png";
import ProdductImage4 from "../../Assets/images/HOME/productlogo/hia_img1.png";
import ProdductImage1 from "../../Assets/images/HOME/productlogo/product-logo-1.jpeg";
import ProdductImage01 from "../../Assets/images/HOME/productlogo/product-logo-0.png"
import senseai01 from "../../Assets/images/Product/sensai-cover.jpeg"
import senseai02 from "../../Assets/images/Product/senseai.jpg"
import sensespech01 from "../../Assets/images/Product/sense-spech-cover.jpeg"

const Product = () => {
  return (
    <>
      <Meta title={"Products"} />
      <section className="product-wrapper">
        <div className="hero py-5 base-gradient-background">
          <h2 className="heading fw-bold white">Our Products</h2>
        </div>
        {/* products */}
        <div className="container single-product overflow-hidden">
          {/* zero-product */}
          <div id="senseai">
            <div className="pb-md-5"></div>
            <div className="row mb-5 m-md-0">
              <div className="col-12 col-md-8 order-1 order-md-2 details-1 py-5 d-flex flex-column align-items-center justify-content-center ">
                <div>
                  <img
                    src={ProdductImage01}
                    className="mx-auto"
                    alt="product-logo"
                  />
                  <div className="px-4">
                    <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Country’s first Bangla Large Language Models (Ekush)
                    </h3>
                    <h6 className="description">
                    IntelsenseAI proudly presents Sense.ai, featuring Ekush LLM Country’s first ever Bangla Large Language Model (LLM). Developed to redefine Bangla language processing and artificial intelligence, Sense.ai embodies a groundbreaking advancement in linguistic technology, empowering Bangla speakers with unparalleled communication experiences. Leveraging state-of-the-art transformer architecture, Sense.ai delivers unrivaled accuracy and fluency in comprehending and generating Bangla text across various digital platforms. From enhancing chatbots and virtual assistants to revolutionizing content creation and sentiment analysis, Sense.ai revolutionizes the way businesses and organizations engage with Bangla-speaking audiences. With its unique multi-stage training process and proprietary Voice AI technology, SenseSpeech not only preserves Bangla language and culture but also fosters inclusivity and empowerment within the Bangla-speaking community. Harnessing the potential to impact sectors like telemedicine and agriculture, SenseSpeech stands as a beacon of innovation and accessibility, poised to transform lives, especially those of differently-abled individuals, through its cutting-edge linguistic and technological prowess. With Sense.ai, Welcome to the future where you unlock limitless possibilities through our Bangla Large Language Model | Ekush LLM Breaks Barriers, Celebrates Culture, and Empowers Communication Like Never Before.
                    </h6>
                    <Link
                      to="/products/sense.ai"
                    >
                      <button className="button2 d-block mx-auto mt-4">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 order-2 order-md-1 d-flex flex-column gap-2  justify-content-center align-items-center banner-img">
                <img src={senseai01} alt="senseai" />
                <img src={senseai02} alt="senseai" />
              </div>
            </div>
          </div>
          <hr />
          {/* first product */}
          <div id="sense-speech">
            <div className="pb-md-5"></div>
            <div className="row mb-5 m-md-0">
              <div className="col-12 col-md-7 order-1 order-md-2 details-1 py-5 d-flex flex-column align-items-center justify-content-center">
                <div>
                  <img
                    src={ProdductImage1}
                    className="mx-auto"
                    alt="product-logo"
                  />
                  <div className="px-4">
                    <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                      Experience the Future of eKYC Solutions with SenseSpeech –
                      Intelsense's Cutting-Edge Voice-Based AI Solution.
                    </h3>
                    <h6 className="description">
                      SenseSpeech is our innovative voice-driven AI solution
                      designed specifically for eKYC needs. Simplify and
                      streamline your customer onboarding process effortlessly
                      with the power of voice. SenseSpeech enables you to
                      seamlessly fill any form using just your voice,
                      eliminating the need for manual text input. Our pioneering
                      technology allows for versatile form completion without
                      typing a single word. With SenseSpeech, you can
                      effortlessly handle and fill any type of form, offering
                      unparalleled convenience and efficiency. Embrace the
                      future of streamlined eKYC processes. SenseSpeech
                      revolutionizes form completion by harnessing the potential
                      of voice technology, ensuring a hassle-free and
                      user-friendly experience for all users. Discover the
                      possibilities with SenseSpeech – the ultimate solution for
                      form filling through the power of voice.
                    </h6>
                    <Link
                      to="https://sensevoice.intelsense.ai/"
                      target="_blank"
                    >
                      <button className="button2 d-block mx-auto mt-4">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 order-2 order-md-1 d-flex flex-column  justify-content-center align-items-center banner-img ">
                <img src={sensespech01} alt="" />
                
              </div>
            </div>
          </div>
          <hr />
          {/* second-product */}
          <div id="sense-voice">
            <div className="pb-md-5"></div>
            <div className="row mb-5 m-md-0">
              <div className="col-12 col-md-6 order-1 order-md-1 details-1 py-5 d-flex flex-column align-items-center justify-content-center">
                <div>
                  <img
                    src={ProdductImage0}
                    className="mx-auto"
                    alt="product-logo"
                  />
                  <div className="px-4">
                    <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                      Transcription Platform supported by Custom Built Speech
                      Recognition & Text To Speech Engine.
                    </h3>
                    <h6 className="description">
                      Documenting audio calls and videos have become a matter of
                      seconds as Intelsense AI introduces an automated
                      transcription platform, SenseVoice. SenseVoice uses an AI
                      model to recognise words and sentiments from the most
                      inconvenient situations and low-frequency recordings to
                      provide you with accurate transcription. Now you can
                      produce subtitles for interviews and contents without
                      needing an extra hand. Check out SenseVoice and try it for
                      free to learn more about its features and uses.
                    </h6>
                    <Link
                      to="https://sensevoice.intelsense.ai/"
                      target="_blank"
                    >
                      <button className="button2 d-block mx-auto mt-4">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 order-2 order-1 order-md-2 order-md-1 d-flex  justify-content-center align-items-center">
                <iframe
                  className="w-75 h-50"
                  src="https://www.youtube.com/embed/zLpXKxw1pLs"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <hr />
          
          
          {/* third product */}
          <div id="sense-bots" className="row mb-5 m-md-0">
            <div className="pb-md-5"></div>
            <div className="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center align-items-center">
              <iframe
                className="w-75 h-50"
                src="https://www.youtube.com/embed/mnANeEgMyZE"
                title="sense-bots"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-1 details-2 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <img
                  src={ProdductImage2}
                  className="mx-auto"
                  alt="product-logo"
                />
                <div className="px-4">
                  {/* <h2 className="heading">Sensevoice</h2> */}
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Deep Learning Based Conversational AI Chatbot Platform.
                  </h3>
                  <h6 className="description">
                    Have you noticed how many people need to wait for a seller
                    to reply online while their bots keep posting welcoming
                    replies because it can’t find the right keywords? That’s why
                    we bring SenseBot, a chatbot smart enough to understand any
                    question customers make, and provide replies from its
                    database. The best part is, the neural technology keeps it
                    under training to adjust to new learnings. Now, you don’t
                    need full-time investment in customer service and breathe
                    relief as you customers learn what they need, automatically.
                  </h6>
                  <Link to="https://hia.intelsense.ai/hia" target="_blank">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* fourth product */}
          <div id="air-voice" className="row mb-5 m-md-0">
            <div className="pb-md-5"></div>
            <div className="col-12 col-md-6 order-2 order-md-1 order-1 order-md-2 d-flex justify-content-center align-items-center">
              <iframe
                className="w-75 h-50"
                src="https://www.youtube.com/embed/OEgjG5fADgI"
                title="Sensevoice"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 details-3 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <img
                  src={ProdductImage3}
                  className="mx-auto"
                  alt="product-logo"
                />
                <div className="px-4">
                  {/* <h2 className="heading">Sensevoice</h2> */}
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    AI Driven Voice Commerce service for e-commerce platforms
                  </h3>
                  <h6 className="description">
                    Picture this, you're driving to your friend's place and it's
                    her daughter's birthday today but you have no idea what to
                    gift the little angel. And there's no time to go through a
                    mile long list of items on e-commerce websites. Don't worry
                    because at these times Airvoice will be there to save your
                    day. Airvoice seamlessly integrates custom-built voice
                    recognition and Natural Language Understanding (NLU) into
                    e-commerce platforms to navigate product selections, placing
                    orders, and managing transactions—all through the power of
                    your voice.
                  </h6>
                  {/* <Link to="/comming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* fourth product */}
          <div id="hia" className="row mb-5 ">
            <div className="pb-md-5"></div>
            <div className="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center align-items-center">
              <iframe
                className="w-75 h-50"
                src="https://www.youtube.com/embed/mnANeEgMyZE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-1 details-4 py-5 d-flex flex-column align-items-center justify-content-center">
              <div>
                <img
                  src={ProdductImage4}
                  className="mx-auto mb-4"
                  alt="product-logo"
                />
                <div className="px-4">
                  {/* <h2 className="heading">Sensevoice</h2> */}
                  <h3 className="sub-title text-start mb-3 text-center text-sm-start">
                    Voice Based AI-powered virtual assistant of Intelsense AI,
                    that combines ASR, TTS, NLP, & NLU.
                  </h3>
                  <h6 className="description">
                    We’ve all had experiences with a virtual assistant like
                    Alexa or Siri for small tasks in our daily life like making
                    lists, setting reminders, playing your favorite song. Life
                    feels a lot more fun and easier, right? HIA is coming to the
                    financial market to bring the same quality of experience for
                    consumers of the banking sector. Because having to interact
                    with a banker for the smallest information is not convenient
                    all the time, but it gets better when you can do it at home
                    with full security and authorization from the bank. Just
                    speak out your commands and get things done like magic.
                  </h6>
                  {/* <Link to="/comming-soon">
                    <button className="button2 d-block mx-auto mt-4">
                      Details
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
