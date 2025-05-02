"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import gsap from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const data = {
  nodes: [
    { id: "1", name: "Strategy & Innovation" },
    { id: "2", name: "Branding" },
    { id: "3", name: "Creativity & Design" },
    { id: "4", name: "Mindset & Experience" },
    { id: "5", name: "Performance optimization" },
    { id: "6", name: "Advertising" },
    { id: "7", name: "Digital Experience" },
    { id: "8", name: "Social media management" },
    { id: "9", name: "Creators" },
    { id: "10", name: "Websites & Apps" },
    { id: "11", name: "Production" },
  ],
  links: [
    { source: "1", target: "3" },
    { source: "1", target: "6" },
    { source: "2", target: "7" },
    { source: "3", target: "8" },
    { source: "4", target: "9" },
    { source: "5", target: "8" },
    { source: "6", target: "10" },
    { source: "7", target: "11" },
  ],
};

export default function ArcDiagramVertical() {
  const svgRef = useRef<SVGSVGElement>(null);
  const arcPathsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 20, left: 60 };
    const width = 500 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3
      .scalePoint()
      .range([0, height])
      .domain(data.nodes.map((d) => d.name))
      .padding(1);

    svg
      .selectAll("text")
      .data(data.nodes)
      .enter()
      .append("text")
      .attr("x", 65)
      .attr("y", (d) => y(d.name)!)
      .text((d) => d.name)
      .attr("alignment-baseline", "middle")
      .style("fill", "white")
      // .style("font-family", "Montserrat")
      .style("font-size", "30px")
      .style("font-weight", "100");

    const idToNode: Record<string, (typeof data.nodes)[0]> = {};
    data.nodes.forEach((n) => {
      idToNode[n.id] = n;
    });

    arcPathsRef.current = [];

    data.links.forEach((link, i) => {
      const start = y(idToNode[link.source].name)!;
      const end = y(idToNode[link.target].name)!;
      const d = [
        "M",
        50,
        start,
        "A",
        100,
        Math.abs(start - end) / 2,
        0,
        0,
        start < end ? 0 : 1,
        50,
        end,
      ].join(" ");

      const path = svg
        .append("path")
        .attr("d", d)
        .style("fill", "none")
        .style("stroke", "#5AEF74")
        .style("stroke-width", 1.5)
        .node() as SVGPathElement;

      arcPathsRef.current.push(path);

      const ball = svg
        .append("circle")
        .attr("r", 7)
        .attr("fill", "white")
        .attr("class", `ball-${i}`);

      gsap.to(ball.node(), {
        motionPath: {
          path: path,
          align: path,
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
        },
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="bg-black text-white p-4">
      <svg ref={svgRef} className="w-full"></svg>
    </div>
  );
}
