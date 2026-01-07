// imports
import React from "react";

// fn'S
/* const getSVG = () => {

   const svg = document.getElementById("wheel");
   const cx = 150;
   const cy = 150;
   const r = 120;
   const segments = 6;
   const colors = ["#ff6b6b", "#feca57", "#1dd1a1", "#54a0ff", "#5f27cd", "#ee5253"];

   function polarToCartesian(cx, cy, r, angle) {
      const rad = (angle - 90) * Math.PI / 180;
      return {
         x: cx + r * Math.cos(rad),
         y: cy + r * Math.sin(rad)
      };
   }

   function describeArc(startAngle, endAngle) {
      const start = polarToCartesian(cx, cy, r, endAngle);
      const end = polarToCartesian(cx, cy, r, startAngle);
      const largeArc = endAngle - startAngle > 180 ? 1 : 0;

      return `
      M ${cx} ${cy}
      L ${start.x} ${start.y}
      A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}
      Z
    `;
   }

   for (let i = 0; i < segments; i++) {
      const start = (360 / segments) * i;
      const end = start + 360 / segments;

      // segment
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", describeArc(start, end));
      path.setAttribute("fill", colors[i % colors.length]);
      path.classList.add("segment");
      path.dataset.index = i + 1;

      path.addEventListener("click", () => {
         alert("Clicked segment " + (i + 1));
      });

      svg.appendChild(path);

      // label
      const mid = start + (end - start) / 2;
      const labelPos = polarToCartesian(cx, cy, r * 0.65, mid);

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", labelPos.x);
      text.setAttribute("y", labelPos.y);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");
      text.textContent = i + 1;
      text.classList.add("label");

      svg.appendChild(text);
   }
}  // getSVG() */


const polarToCartesian = (cx, cy, r, angle) => {
   const rad = (angle - 90) * Math.PI / 180;
   return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
   };
};

const describeArc = (cx, cy, r, startAngle, endAngle) => {
   const start = polarToCartesian(cx, cy, r, endAngle);
   const end = polarToCartesian(cx, cy, r, startAngle);
   const largeArc = endAngle - startAngle > 180 ? 1 : 0;

   return `
    M ${cx} ${cy}
    L ${start.x} ${start.y}
    A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}
    Z
  `;
};

// 
export default function ClickableWheel({
   size = 300,
   segments = 6,
   radius = 120,
   colors = [],
   onSelect
}) {
   const cx = size / 2;
   const cy = size / 2;
   const angleStep = 360 / segments;

   const defaultColors = [
      "#ff6b6b",
      "#feca57",
      "#1dd1a1",
      "#54a0ff",
      "#5f27cd",
      "#ee5253"
   ];

   return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>

         {Array.from({ length: segments }).map((_, i) => {

            const start = i * angleStep;
            const end = start + angleStep;
            const mid = start + angleStep / 2;
            const labelPos = polarToCartesian(cx, cy, radius * 0.65, mid);

            return (
               <g key={i} id={`idGroup${i}`}>  {/* <g>group</g> */}
                  
                  {/* Segment */}
                  <path
                     d={describeArc(cx, cy, radius, start, end)}

                     fill={colors[i] || defaultColors[i % defaultColors.length]}
                     
                     style={{
                        cursor: "pointer",
                        transition: "opacity 0.2s, transform 0.2s"
                     }}
                     role="button"
                     tabIndex={0}
                     aria-label={`Segment ${i + 1}`}
                     onClick={() => onSelect?.(i + 1)}
                     onKeyDown={(e) =>
                        (e.key === "Enter" || e.key === " ") && onSelect?.(i + 1)
                     }
                     onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
                     onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
                  />

                  {/* Label */}
                  <text
                     x={labelPos.x}
                     y={labelPos.y}
                     textAnchor="middle"
                     dominantBaseline="middle"
                     style={{
                        fill: "white",
                        fontSize: 16,
                        pointerEvents: "none",
                        userSelect: "none"
                     }}
                  >
                     {i + 1}
                  </text>
               </g>
            );
         })}
      </svg>
   )  // return()
}  // 
