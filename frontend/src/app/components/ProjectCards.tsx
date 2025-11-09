"use client";

import { useState } from "react";
import Image from "next/image";
export default function ProjectGrid() {
  const [projects] = useState([
    {
      id: 1,
      title: "Velour",
      subtitle: "Clothing brand, Website",
      media: "/try.mp4",
      type: "video",
      link: "https://example.com/velour"
    },
    {
      id: 2,
      title: "PW\nDrona",
      subtitle: "Teachers | SME APP",
      media: "/drona.png",
      type: "image",
      link: "https://example.com/pw-drona"
    },
    {
      id: 3,
      title: "Thriftyfy\nIndia",
      subtitle: "Clothing Web",
      media: "/thrifty.png",
      type: "image",
      link: "https://example.com/thriftyfy"
    },
    {
      id: 4,
      title: "Millionwires",
      subtitle: "Wires And Cables",
      media: "/millionwires.png",
      type: "image",
      link: "https://example.com/millionwires"
    },
    {
      id: 5,
      title: "Bakery",
      subtitle: "Bakery website",
      media: "/bakery.png",
      type: "image",
      link: "https://example.com/bakery"
    },
  ]);

  const getWebPPath = (imagePath) => {
    return imagePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  };

  const renderMedia = (project) => {
    if (project.type === "video") {
      return (
        <video
          src={project.media}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      );
    } else if (project.media) {
      const webpPath = getWebPPath(project.media);
      return (
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={webpPath} type="image/webp" />
          <Image
            src={project.media}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
            quality={85}
            priority={project.id <= 2}
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </picture>
      );
    } else {
      return (
        <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex flex-col justify-between p-8 lg:p-12">
          <div className="text-white">
            <h3 className="text-4xl lg:text-6xl font-bold leading-tight whitespace-pre-line mb-4">
              {project.title}
            </h3>
          </div>
          <div className="text-white/80">
            <p className="text-sm lg:text-base">{project.subtitle}</p>
          </div>
        </div>
      );
    }
  };

  const renderProjectCard = (project) => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      key={project.id}
      className="group relative overflow-hidden rounded-2xl lg:rounded-3xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] cursor-pointer block"
    >
      {renderMedia(project)}

      <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12 pointer-events-none">
        <div className="text-white">
          <h3 className="text-3xl lg:text-5xl font-bold leading-tight whitespace-pre-line">
            {project.title}
          </h3>
        </div>
        <div className="text-white">
          <p className="text-white/90 text-sm lg:text-base">
            {project.subtitle}
          </p>
        </div>
      </div>
    </a>
  );

  const renderProjects = () => {
    const elements = [];
    let index = 0;

    while (index < projects.length) {
      if (index + 1 < projects.length && index % 3 !== 2) {
        elements.push(
          <div key={`pair-${index}`} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
            {renderProjectCard(projects[index])}
            {renderProjectCard(projects[index + 1])}
          </div>
        );
        index += 2;
      } else {
        elements.push(
          <div key={`single-${index}`} className="mb-4 lg:mb-6">
            {renderProjectCard(projects[index])}
          </div>
        );
        index += 1;
      }
    }

    return elements;
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        {renderProjects()}
      </div>
    </section>
  );
}