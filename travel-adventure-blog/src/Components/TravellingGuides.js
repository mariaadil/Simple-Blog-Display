import React from 'react';
import europeGuide from '../Images/15 Breathtakingly Beautiful Fairytale Towns in Europe to Visit Now.jpg';
import parisGuide from '../Images/Exploring Hallstatt, Austria _ Austria Winter Travel.jpg';
import norwayGuide from '../Images/Norway.jpg';
import icelandGuide from '../Images/Iceland.jpg';
import { Link } from 'react-router-dom';

const guidesData = [
  {
    title: "Guide to Amsterdam",
    image: europeGuide,
    description: "Discover the best spots, food, and culture in Amsterdam.",
    link: "/amsterdam"
  },
  {
    title: "Guide to Paris",
    image: parisGuide,
    description: "Explore the city of love with our comprehensive guide.",
    link: "/paris"
  },
  {
    title: "Guide to Norway",
    image: norwayGuide,
    description: "Discover the stunning landscapes and fjords of Norway.",
    link: "/norway"
  },
  {
    title: "Guide to Iceland",
    image: icelandGuide,
    description: "Experience the unique geothermal landscapes of Iceland.",
    link: "/iceland"
  }
];

const TravelingGuides = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Travelling Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {guidesData.map((guide, index) => (
          <Link to={guide.link} key={index} className="bg-white rounded-lg p-6 shadow-md">
            <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
            <p className="text-gray-600">{guide.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TravelingGuides;
