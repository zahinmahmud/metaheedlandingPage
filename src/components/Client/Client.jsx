import React from "react";

const clients = [
  {
    name: "Sysnova",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7bitnvisacMof-FqmZturuZqulrUm0Y-LQ&s",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    description: "Innovative IT solutions provider.",
  },
  {
    name: "ELC",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvEByB4R7ejBoo7i-A_pvVAVD5Py6pdbQjw&s",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    description: "Education and learning center.",
  },
  {
    name: "ISU",
    logo: "https://www.isu.ac.bd/assets/frontend/images/logo/logo-icon.png",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    description: "International Standard University",
  },
  {
    name: "Brac",
    logo: "https://www.bracu.ac.bd/sites/default/files/resources/media/bracu_logo_12-0-2022.png",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    description: "Brac University",
  },
  {
    name: "NSU",
    logo: "https://www.newagebd.com/files/records/news/202310/214153_170.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    description: "North South  University.",
  },
  {
    name: "Odoo",
    logo: "https://cdn.worldvectorlogo.com/logos/odoo.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    description: "ERP software provider.",
  },
  {
    name: "Nginx",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-nginx-logo-icon-svg-download-png-2945048.png",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    description: "Web server & reverse proxy.",
  },
  {
    name: "Wazuh",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUkd4hD3zj1RwH5eOKjTIxR3UIsbIx4UTNg&s",
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    description: "Security monitoring platform.",
  },
//   {
//     name: "SIEM",
//     logo: "https://via.placeholder.com/80",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       website: "#",
//     },
//     description: "Security Information & Event Management.",
//   },
];

const Client = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900" id="client">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Our Clients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center shadow-sm"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 mb-4 rounded-full object-cover shadow"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {client.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {client.description}
              </p>
              <div className="flex space-x-3">
                <a
                  href={client.social.linkedin}
                  className="text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={client.social.twitter}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href={client.social.website}
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
