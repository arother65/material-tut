/**
 * 
 *  Stand: 07.01.2026
 * 
 */

// imports 
import { useState } from 'react'
import img from '../pics/icons8-joker-64.png'

//
export default function SvgTests({ theme }) {

   // console.log(theme)
   const [initCxCy, setCxCy] = useState({ cx: 50, cy: 50 })

   const setNewCxCy = () => {

      setCxCy()
   }  // 

   return (
      <>

         <div className='row m-1 p-1 border rounded'>
            <>
               {Array.from({length: 5}).map((_, i) => (

                  <div className="col m-1 border rounded" key={i} id={i}>
                     {/* <p>array.map(){i}</p> */}

                     <svg xmlns="http://www.w3.org/2000/svg">
                        <circle id={`circle-${i}`}
                           cx={initCxCy.cx}
                           cy={initCxCy.cy}
                           r="50"
                           fill={theme.palette.primary.main}></circle>
                     </svg>
                  </div>
               ))}
            </>
         </div>

         <div className='row m-1 p-1 border rounded'>
            {/*             <svg xmlns="http://www.w3.org/2000/svg" width="200" height="60">
               <image
                  // href="./icons8-joker-74.png"
                  href={img}
                  width="40"
                  height="40"
                  x="100"
                  y="10"
               />
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg">
               <circle cx={initCxCy.cx} cy={initCxCy.cy} r="50" fill={theme.palette.primary.main}></circle>
               <g transform="rotate(45 50 50)">
                  <image
                     href={img}
                     width="40"
                     height="40"
                     x="-20"
                     y="50"
                     transform="rotate(-45 0 0)"
                  />
               </g>
            </svg>
         </div>

         <div className='row m-1 p-1'>
            <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
               <g>
                  <circle cx="50" cy="50" r="50" fill={theme.palette.primary.light}>
                     <animate
                        attributeName="cx"
                        begin="0s"
                        dur="2s"
                        from="-50"
                        to="45%"
                        repeatCount="indefinite"
                     // till='freeze'
                     />
                  </circle>
                  {/* <g transform="rotate(45 50 50)"> */}
                  <image
                     href={img}
                     width="40"
                     height="40"
                     x="0"
                     y="25"
                  // transform="rotate(-45 0 0)"
                  >
                     <animate
                        attributeName="x"
                        begin="0s"
                        dur="2s"
                        from="-50"
                        to="45%"
                        repeatCount="indefinite"
                     // till='freeze'
                     />
                  </image>
                  {/* </g> */}
               </g>
            </svg>
         </div>

         <div className='row m-1 p-1'>
            {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> */}
            <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
               <circle cx="50" cy="50" r="50" fill={theme.palette.primary.dark}>
                  <animate
                     attributeName="cx"
                     begin="0s"
                     dur="3s"
                     from="50%"
                     to="90%"
                     repeatCount="indefinite" />
                  <animate
                     attributeName="fill"
                     begin="0s"
                     dur="3s"
                     from={theme.palette.primary.dark}
                     to={theme.palette.error.light}
                     repeatCount="indefinite" />
                  <animate
                     attributeName="r"
                     begin="0s"
                     dur="3s"
                     from="10"
                     to="50"
                     repeatCount="indefinite" />
               </circle>
               {/* <text x={100}
               y={100}
               textAnchor="middle"
               dominantBaseline="middle">SVG!</text> */}
            </svg>
         </div>
      </>
   )
}  // SvgTests()