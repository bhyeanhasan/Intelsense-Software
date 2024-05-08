// FAQItem.jsx

import React from 'react';
import ReactMarkdown from 'react-markdown';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`faqHeading${question}`}>
        <button
          className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={onToggle}
        >
          {question}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
        aria-labelledby={`faqHeading${question}`}
      >
        <div className="accordion-body"><ReactMarkdown>{answer}</ReactMarkdown></div>
      </div>
    </div>
  );
};

export default FAQItem;
