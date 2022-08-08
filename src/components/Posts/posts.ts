import { Post } from "Src/Models/Post";

export const posts = [
  new Post({
    id: 1,
    title: "UX review presentations",
    description:
      "How do you create compeling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    category: "Design",
    cover: {
      id: 1,
      url: "/post-cover.jpg",
    },
    createdAt: new Date("01/20/2022"),
  }),
  new Post({
    id: 2,
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: "Phoenix Baker",
    category: "Design",
    cover: {
      id: 2,
      url: "/post-cover.jpg",
    },
    createdAt: new Date("01/19/2022"),
  }),
  new Post({
    id: 3,
    title: "Building your API Stack",
    description:
      "The rise os RESTfl APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Lana Steiner",
    category: "Design",
    cover: {
      id: 3,
      url: "/post-cover.jpg",
    },
    createdAt: new Date("01/18/2022"),
  }),
  new Post({
    id: 4,
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Alec Whitten",
    category: "Design",
    cover: {
      id: 4,
      url: "/post-cover.jpg",
    },
    createdAt: new Date("01/17/2022"),
  }),
  new Post({
    id: 5,
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships",
    author: "Demi Wilkinson",
    category: "Design",
    cover: {
      id: 5,
      url: "/post-cover.jpg",
    },
    createdAt: new Date("01/16/2022"),
  }),
  new Post({
    id: 6,
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    category: "Design",
    cover: {
      id: 6,
      url: "/post-cover.jpg",
    },
    createdAt: new Date("01/15/2022"),
  }),
  new Post({
    id: 7,
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Natali Craig",
    category: "Design",
    cover: {
      id: 7,
      url: "/post-cover.jpg",
    },
    createdAt: new Date("01/14/2022"),
  }),
  new Post({
    id: 8,
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    author: "Drew Cano",
    category: "Design",
    cover: {
      id: 8,
      url: "/post-cover.jpg",
    },
    createdAt: new Date("01/13/2022"),
  }),
];
