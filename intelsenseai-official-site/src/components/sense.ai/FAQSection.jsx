import React, { useState } from 'react'
import FAQItem from './FAQItem';

export const FAQSection = () => {
    const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="accordion" id="accordionExample">
      {faqData.map((faq, index) => (
        <FAQItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openItem}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  )
}


const faqData = [
    {
      id: 1,
      question: "What is LLM?",
      answer:
        "LLM stands for Large Language Models, which are deep learning models pretrained on extensive datasets. They usually utilize transformer architecture with encoder and decoder components, equipped with selfattention capabilities. This enables them to extract meaning and understand relationships within text sequences.",
    },
    {
      id: 2,
      question: "What is Sense.AI?",
      answer:
        "Sense.AI, developed by Bangladeshi AI startup Intelsense AI, introduces Ekush LLM, the first Bangla language model of its kind. This breakthrough innovation advances Bangla language processing and AI, transforming interactions for Bangla speakers with technology.",
    },
    {
      id: 3,
      question: "Why is LLM important for Bangladesh?",
      answer: `
  ### LLMs offer numerous benefits for Bangladesh:
  
  **Key Features:**
  
  - **Efficient Documentation:** Streamlines patient record summaries for healthcare and business professionals.
  
  - **Enhanced Diagnoses:** Analyzes medical literature for accurate diagnoses and treatment planning.
  
  - **Telemedicine Support:** Facilitates remote healthcare services through AI assistants.
  
  - **Tailored for Bangladeshi Finance:** Specifically designed for integration into Bangladeshi business finance, prioritizing local language transactions.
  
  - **Language Accessibility:** Ensures AI applications are accessible to a broader population.
  
  - **CostEffective Solutions:** Implements AI for costeffective healthcare services.
  
  - **Technological Advancements:** Keeps pace with global advancements in healthcare technology.
  
  - **Bangla Language Model Breakthrough:** Introduces the world's first Bangla Large Language Model (LLM), tailored for Bangla interactions.
  
  - **Superior Performance:** Offers performance comparable to or better than traditional LLMs for Bangla, ensuring a topnotch user experience.
  
  - **Swift Responsiveness:** Provides fast and uniquely responsive interactions in Bangla, optimizing communication and data processing efficiency.
  
  - **Competitive Advantage:** Gives businesses in Bangladesh a competitive edge in the Bangla language domain, surpassing other models.
  
  
        `,
    },
    {
      id: 4,
      question: "What is the focus of SENSE.AI?",
      answer:
        "Sense.AI focuses on making Generative AI relevant to Bangladesh. This includes training AI models to support the Bangladeshi language and voicefirst interfaces, as well as collaborating with local enterprises to develop domain specific AI models, enhancing workflow and productivity.",
    },
    {
      id: 5,
      question: "How can we experience this revolutionary product?",
      answer:
        "While the product is not currently open source, you can experience it by filling out the form via the provided link or you can mail directly to info@intelsense.ai",
    },
    {
      id: 6,
      question: "What is the mission of SenseAI?",
      answer:
        "Our mission at Sense.ai is two fold: Firstly, we aim to spearhead transformative AI research to enhance the development, deployment, and accessibility of GenAI applications in Bangladesh, ensuring they are robust, efficient, and cost-effective. Secondly, we are dedicated to building reliable, high-performance, enterprise-grade AI systems at scale, specifically tailored to the unique requirements of Bangladesh. ",
    },
    {
      id: 7,
      question: "When will we learn about the model and its architecture?",
      answer:
      `
  A technical report on the Bangla LLM Model will be published soon, providing insights into its architecture and functionality.
  
  In summary, the world's first Bangla LLM not only provides cutting edge performance in the Bangla language but also brings a unique solution to the table, revolutionizing how businesses approach language models for enhanced efficiency and communication.
  
      `,
    },
  ];
