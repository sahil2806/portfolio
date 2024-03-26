import { useRef } from "react"
import "./services.scss"
import {motion} from "framer-motion"

const variants={
    initial:{
        opacity:0 ,x:-500,
    },
    animate:{
        opacity:1 ,x:0,

        transition:{
            duration: 1.5,
        }
    },
};



const Services = () => {
    return (
        <motion.div
            className='services'
             variants={variants}
             initial="initial"
             whileInView= "animate"
        >

            <motion.div  variants={variants} className=" container head1">
                <div className="row head2">
                    <div className="col-md-12 head3">
                        <hr className="line-left"></hr>
                        <p>I focus on helping your brand grow and move forward</p>
                        <hr className="line-right"></hr>
                    </div>
                </div>
            </motion.div>

            <motion.div  variants={variants} className="container">
                <div className="row">
                    <div className="col-md-12 mid1">
                        <div> <img src="../../../public/people.webp"></img></div>
                        <h1>Unique</h1> <p>Ideas</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mid2">
                        <h1>For Your</h1> <p>Business</p>
                        <div>WHAT WE DO?</div>
                    </div>
                </div>
            </motion.div>

            <motion.div  variants={variants} className="container">
                <div className="row below">
                    <div className="col-md-3">
                        <h1>Branding</h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the    standard dummy text ever since the 1500s  </p>
                    </div>
                    <div className="col-md-3">
                        <h1>Branding</h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu   standard dummy text ever since the 1500s </p>
                    </div>
                    <div className="col-md-3">
                        <h1>Branding</h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s </p>
                    </div>
                    <div className="col-md-3">
                        <h1>Branding</h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the   standard dummy text ever since the 1500s  </p>
                    </div>

                </div>
            </motion.div>

        </motion.div>
    )
}

export default Services