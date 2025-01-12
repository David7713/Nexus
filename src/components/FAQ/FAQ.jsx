import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    { 
      question: "How can digital marketing help my business?", 
      answer: "Digital marketing helps increase your online visibility, attract new customers, engage with your audience, and drive more sales through targeted strategies tailored to your business goals." 
    },
    { 
      question: "How long does it take to see results from digital marketing?", 
      answer: "Results can vary depending on the strategy and your goals, but generally, you can start seeing results in a few weeks to a few months. SEO may take longer compared to paid advertising." 
    },
    { 
      question: "What is your pricing model?", 
      answer: "Our pricing varies depending on the services you choose and the scope of your project. We offer customized packages to meet your needs." 
    },
    { 
      question: "How do I get started with your services?", 
      answer: "You can get started by contacting us through email or  phone call to schedule a consultation. We’ll discuss your goals and tailor a strategy that fits your business." 
    },
    { 
      question: "How can digital marketing help my business?", 
      answer: "Digital marketing helps increase your online visibility, attract new customers, engage with your audience, and drive more sales through targeted strategies tailored to your business goals." 
    },
  ];

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently <br /> Asked Questions</h1>
      <div className="questions">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className="toggle-button">{expandedIndex === index ? '_' : '+'}</span>
            </div>
            {expandedIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
