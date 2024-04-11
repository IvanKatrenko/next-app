import React, { useState } from 'react';

import './Accordion.module.scss';

const Accordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);

    if (isOpen) {
        setIsOpen(false);

    } else {
        setIsOpen(true);
    }

    if (activeIndex === index) {
        setIsOpen(true);
    } else {
        setIsOpen(false);
    }

    };


    return (
        <div className="accordion__wrapper">
            {accordionData.map((item, index) => (
                <div className='accordion-item' key='index'>
                    <button
                        className="accordion__title"
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.title}
                    </button>
                    <div
                        className={`accordion__description ${
                            index === activeIndex ? 'active' : ''
                        }`}
                    >
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

// data to display in accordion
const accordionData = [
    {
        title: 'Accordion 1',
        content: 'Content 1',
    }
]