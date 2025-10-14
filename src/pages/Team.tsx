import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Import all team images from teamimages folder
import chairPerson from "@/assets/images/whatsapp20image202025-09-2720at2010.03.2020pm-479x491.jpeg";
import viceChair from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.03.3420pm201-600x695.jpeg";
import genSec1 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.04.1320pm-600x708.jpeg";
import genSec2 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.04.3520pm-480x565.jpeg";
import genSec3 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.05.3020pm-384x453.jpeg";

import contentHead1 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.12.3820pm201-600x714.jpeg";
import contentHead2 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.05.4520pm201-600x706.jpeg";
import contentHead3 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.12.2420pm201-600x716.jpeg";

import eventHead1 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.12.5320pm-600x710.jpeg";
import eventHead2 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.13.1020pm-600x703.jpeg";

import treasurer1 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.15.3220pm201-600x707.jpeg";
import treasurer2 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.15.4520pm-600x705.jpeg";

import teamHead1 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.14.3420pm-600x711.jpeg";
import teamHead2 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.14.4520pm-600x705.jpeg";
import teamHead3 from "@/assets/teamimages/whatsapp20image202025-09-2720at2010.14.1220pm-600x705.jpeg";

interface TeamMember {
  name: string;
  role: string;
  id?: string;
  description?: string;
  image: string;
}

const teamSections: { title: string; description: string; members: TeamMember[] }[] = [
  {
    title: "MEET OUR TEAM",
    description: "Welcome to the Personality Development Association – where confidence meets growth.",
    members: [
      { name: "AKSHAYA B G", role: "CHAIR PERSON", id: "(2022505024)", image: chairPerson },
      { name: "SARAVANA T S", role: "VICE CHAIR PERSON", id: "(2022503574)", image: viceChair },
      { name: "JAYAVARSHINI R", role: "GENERAL SECRETORY", id: "(2022503521)", image: genSec1 },
      { name: "PREM KUMAR S", role: "GENERAL SECRETORY", id: "(2022501015)", image: genSec2 },
      { name: "VARSHIGASHREE M", role: "GENERAL SECRETORY", id: "(2022504033)", image: genSec3 },
    ],
  },
  {
    title: "MEET OUR CONTENT CREATION HEADS",
    description: "The creative mind behind all the words and visuals that make our association shine! ✍️✨ They turn ideas into engaging content.",
    members: [
      { name: "NEELAVATHY G", role: "Content Head", id: "(2022503513)", image: contentHead1 },
      { name: "TRIZAH SULAMITE K", role: "Content Head", id: "(2022508008)", image: contentHead2 },
      { name: "VIMAL RAJ M", role: "Content Head", id: "(2022504523)", image: contentHead3 },
    ],
  },
  {
    title: "MEET OUR EVENT MANAGEMENT HEADS",
    description: "The powerhouse team that makes every event unforgettable! ⚡ From brainstorming unique ideas to executing them with perfection.",
    members: [
      { name: "DHIVYA M", role: "Event Head", id: "(2022511020)", image: eventHead1 },
      { name: "GOPI M", role: "Event Head", id: "(2022506004)", image: eventHead2 },
    ],
  },
  {
    title: "MEET OUR TREASURERS",
    description: "Meet the ones who balance funds! Our Treasurers make sure every dream project has the perfect budget to shine.",
    members: [
      { name: "DARSAN S", role: "Treasurer", id: "(2023508017)", image: treasurer1 },
      { name: "SRIMATHI S", role: "Treasurer", id: "(2023510055)", image: treasurer2 },
    ],
  },
  {
    title: "MEET OUR TEAM HEADS",
    description: "The tech brains of our club, the creative eyes behind every detail and the knowledge keeper of our club.",
    members: [
      { name: "UDHYA KUMAR K", role: "HEAD OF WEBSITE DESIGN", id: "(2022503051)", image: teamHead1 },
      { name: "MADHESH P B", role: "CHIEF LIBRARIAN", id: "(2022507011)", image: teamHead2 },
      { name: "VIJAY G K", role: "HEAD OF DESIGN", id: "(2022503053)", image: teamHead3 },
    ],
  },
];

const Team: React.FC = () => {
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      <Navbar />
      <div className="container mt-10 mx-auto px-6 py-16">
        {teamSections.map((section, index) => (
          <div key={index} className="mb-20 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-600 mb-10">{section.description}</p>

            <div className="flex flex-wrap justify-center gap-10">
              {section.members.map((member, i) => (
                <div
                  key={i}
                  className="max-w-xs bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out border border-gray-200 hover:border-red-400"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-200 hover:border-indigo-500 transition duration-300"
                  />
                  <h3 className="text-2xl font-semibold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                  {member.id && (
                    <p className="text-gray-500 text-sm mt-1">{member.id}</p>
                  )}

                  <div className="flex justify-center mt-4 space-x-5">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-600 transition transform hover:scale-110"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 transition transform hover:scale-110"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Team;