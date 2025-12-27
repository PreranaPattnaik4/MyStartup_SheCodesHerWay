
import React from 'react';

export interface FAQ {
    question: string;
    answer: React.ReactNode;
}

export const faqData: FAQ[] = [
    {
        question: "What is SheCodesHerWay?",
        answer: "SheCodesHerWay is a women-led startup dedicated to empowering women with digital skills, mentorship, and leadership training. Our mission is to help women build their path, lead their way, and leave their mark in the world.",
    },
    {
        question: "Who is the 'Sangini Udaan : EmpowerFly' program for?",
        answer: "Sangini Udaan : EmpowerFly is our flagship empowerment and mentorship program designed for any woman who wants to grow. Whether you're interested in tech, starting a business, exploring your creativity, or developing soft skills, there's a path for you.",
    },
    {
        question: "What kind of opportunities are available at SheCodesHerWay?",
        answer: "We offer several ways to get involved: you can join our training-based Internship Program, become a Mentor, or collaborate with our Core Team. We also have an 'Early Core Contributor' opportunity for those who want to help shape the platform in its early stages.",
    },
    {
        question: "Are the internship and contributor roles paid?",
        answer: "Our internships and Early Core Contributor roles are voluntary, unpaid collaborations. They are designed for individuals motivated by gaining hands-on experience, learning, and making an impact in a pre-seed stage startup. We focus on investing in your growth through mentorship and practical projects.",
    },
    {
        question: "How can I become a mentor or partner with SheCodesHerWay?",
        answer: "We are always looking for passionate professionals, educators, and organizations to join our mission. If you're interested in becoming a mentor or partnering with us, please visit our 'Partner with Us' page to learn more and apply.",
    },
    {
        question: "What is an 'Early Core Contributor'?",
        answer: "Early Core Contributors are passionate individuals (students, freshers, or professionals) who collaborate with us on a part-time basis to build, shape, and grow the platform. It's a high-impact, voluntary role where you can take ownership of features and contribute directly to our mission during our foundational pre-seed stage.",
    },
    {
        question: "What kind of skills can I learn through your programs?",
        answer: "We offer a wide range of learning tracks, including coding, web development, AI basics, graphic design, content creation, entrepreneurship, and leadership. We also focus heavily on soft skills like confidence, communication, and emotional intelligence.",
    },
    {
        question: "Do I need any prior experience to join?",
        answer: "Not at all! Our programs are designed for women at all stages of their journey, from complete beginners to those looking to advance their careers. We welcome students, learners, and women restarting their careers.",
    }
];
