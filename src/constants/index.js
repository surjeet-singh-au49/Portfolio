import {
    react,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nextjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    crypto,
    videoplaza,
    threejs,
    attainu,
    txp,
    sass,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Javascript Developer",
      icon: web,
    },
    {
      title: "FrontEnd Developer",
      icon: creator,
    },
    {
      title: "React Developer",
      icon: react,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next.js",
      icon: nextjs
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "scss",
      icon: sass
    }
  ];
  
  const experiences = [
    {
      title: "Junior Software Developer",
      company_name: "TravelXP pvt. ltd.",
      icon: txp,
      iconBg: "#383E56",
      date: "June 2023 -  Oct 2023",
      points: [
        "As a skilled frontend web developer, I have successfully designed and developed a user-friendly flights web app, enabling seamless planning and booking for oneway, return, or multicity trips.",
        "My expertise extends to project migration, having spearheaded the transition of the TravelXP project from React to Next.js app directory",
        "I excel in optimizing codebase efficiency by converting class components to functional components, implementing best coding practices for enhanced performance which led to increase the overall application speed by 15% and reduced the application code by 35% and errors by 10%.",
        "Additionally, I stay updated with the latest technologies, having recently mastered Next.js and advanced CSS frameworks like Tailwind CSS",
        "Collaborating with other developers to create high-quality product and with the marketing team to provide the resources required."
      ]
    },
    {
      title: "Intern FullStack Developer",
      company_name: "AttainU",
      icon: attainu,
      iconBg: "#383E56",
      date: "May 2022  -  feb 2023",
      points: [
        "Developing and maintaining web applications using Javascript, React.js, Node.js and other related technologies.",
        "Collaborating with other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Mayur Singh",
      designation: "Owner",
      company: "Mayur Gifts Palace",
      image: "https://source.unsplash.com/man-in-blue-and-white-plaid-dress-shirt-sitting-on-red-couch-9TYryqt3wLk",
    },
  ];

  
  
  const projects = [
    {
      name: "Crypto App",
      description:
        "Empower your crypto journey with our app – where real-time insights and user-friendly design meet to make every investment decision a confident one!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-router",
          color: "green-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "pink-text-gradient",
        },
        {
          name: "coingecko-api",
          color: "blue-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/surjeet-singh-au49/react-crypto-app",
    },
    {
      name: "Video Plaza",
      description:
        "Unwind and enjoy endless free videos at your own pace, with the added option to share your own content on our immersive Video Plaza app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-router",
          color: "green-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: videoplaza,
      source_code_link: "https://github.com/surjeet-singh-au49/React-Projects-/tree/main/VideoPlaza-website",
    },
  ];

  
  
  export { services, technologies, experiences, testimonials, projects };