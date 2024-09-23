import DOMPurify from "dompurify";
import React, { useState } from "react";

const CustomAccordion = ({ items }: { items: any }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <div className="accordion-main">
      {items.map((item: any, index: any) => {
        const description = DOMPurify.sanitize(item.descriptions);
        return (
          <div key={item.title}>
            {description ? (
              <>
                <div
                  onClick={() => handleClick(index)}
                  className="accordion-title-button"
                >
                  <h1 className="sport-services-text">{item.title}</h1>
                  <div className="service-icon">
                    {index !== activeIndex ? (
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9995 0.52002C8.3546 0.52002 0.519531 8.35508 0.519531 18C0.519531 27.645 8.3546 35.48 17.9995 35.48C27.6445 35.48 35.4795 27.645 35.4795 18C35.4795 8.35508 27.6445 0.52002 17.9995 0.52002ZM17.9995 2.04002C26.823 2.04002 33.9595 9.17655 33.9595 18C33.9595 26.8235 26.823 33.96 17.9995 33.96C9.17606 33.96 2.03953 26.8235 2.03953 18C2.03953 9.17655 9.17606 2.04002 17.9995 2.04002ZM8.87953 17.24V18.76H27.1195V17.24H8.87953Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {index === activeIndex && (
                  <p className="accordion-description">
                    <div
                      dangerouslySetInnerHTML={{ __html: description }}
                      style={{ fontFamily: "Satoshi" }}
                    />
                  </p>
                )}
              </>
            ) : (
              <h1 className="sport-services-text">{item.title}</h1>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CustomAccordion;
