/**
 * 
 *  Stand: 07.01.2026
 * 
 */

// imports 

//
export default function SvgTests({ theme }) {

   // console.log(theme)

   return (
      <>
         <p>Tests SVG's</p>
         <svg xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(45 50 50)" >
               <circle cx="50" cy="50" r="30" fill={theme.palette.primary.main} />
            </g>
         </svg>

         <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill={theme.palette.primary.light}>
               <animate
                  attributeName="cx"
                  begin="0s"
                  dur="2s"
                  from="50"
                  to="25%"
                  repeatCount="indefinite" />
            </circle>
         </svg>

         {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> */}
         <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill={theme.palette.primary.dark}>
               <animate
                  attributeName="cx"
                  begin="0s"
                  dur="2s"
                  from="50"
                  to="50%"
                  repeatCount="indefinite" />
            </circle>
            {/* <text x={100}
               y={100}
               textAnchor="middle"
               dominantBaseline="middle">SVG!</text> */}
         </svg>

      </>
   )
}  // SvgTests()