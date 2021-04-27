import React from 'react'
import useFirestore from '../hooks/useFireStore'
import  {motion} from 'framer-motion'


const ImageGrid=({setSelectedImg})=>{

    const {docs}=useFirestore('images')

     return (
         <div className="img-grid">
             {docs && docs.map(doc=>{
                 return (
                     <motion.div className='img-wrap' key={doc.id}
                      whileHover={{opacity:1}}
                      layout onClick={()=>setSelectedImg(doc.url)}>
                         <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} src={doc.url} alt='uploaded-pic'/>

                        </motion.div>

                 )
             })}

         </div>
     )
}


export default ImageGrid

