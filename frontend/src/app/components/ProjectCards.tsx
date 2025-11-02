"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectGrid() {
  const [projects] = useState([
    {
      id: 1,
      title: "",
      tags: ["brand identity", "crypto", "UAE"],
     
      image: null,
    },
    {
      id: 2,
      title: "",
      tags: ["web", "promo", "marketing", "China"],
      description: "Eye-catching website for an influencer marketing agency",
      image: null,
    },
    {
      id: 3,
      title: "",
      tags: ["web", "storytelling", "Latvia"],
   
      image: null,
    },
  ]);

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-black aspect-square cursor-pointer"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-black flex flex-col justify-between p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-white/30 rounded-full text-white text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-white">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-black aspect-video cursor-pointer">
          {projects[2].image ? (
            <Image
              src={projects[2].image}
              alt={projects[2].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-black flex flex-col justify-between p-6">
              <div className="flex flex-wrap gap-2">
                {projects[2].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-white/30 rounded-full text-white text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold">{projects[2].title}</h3>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-gray-300 text-sm">{projects[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
