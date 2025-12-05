import React from 'react'
import { useState } from 'react'

const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

export default function Reviews() {
    let [current, setCurrent] = useState(0)
    let { id, name, job, image, text } = reviews[current];

    function handlePrev() {
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }
    function handleNext() {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }
    function handleRandom() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * reviews.length);
        } while (randomIndex === current);
        setCurrent(randomIndex);
    }
    return (
        <div className="review">
            <img src={image} className="person-img"></img>
            <p id={`author-${id}`} className="author">{name}</p>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <div className="buttons">
                <button className="prev-btn" onClick={handlePrev}>Prev</button>
                <button className="next-btn" onClick={handleNext}>Next</button>
            </div>

            <button className="random-btn" onClick={handleRandom}>Surprise Me</button>

        </div>
    )
}