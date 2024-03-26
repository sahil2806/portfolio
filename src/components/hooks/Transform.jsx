import React from 'react';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion'; // Import motion and useScroll from Framer Motion

const Transform = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,  
        offset: ["0 1","0.5 0"],  
    });

    return (
        <motion.div ref={ref} style={{  
            scale:scrollYProgress,
            opacity:scrollYProgress,
            width: "100%",
            height: "100%",
            background: "white",
            display: "flex",
            textAlign: "justify",
            alignItems: "center",
        }}>
            <div
                style={{
                    height: "200px",
                    width: "300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                }}>Transform
            </div>

            <div
                style={{
                    height: "200px",
                    width: "300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    right: 0,
                }}>Transform
            </div>

            <div
                style={{
                    height: "200px",
                    width: "300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                }}>Transform
            </div>

            <div
                style={{
                    height: "200px",
                    width: "300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>
            <div
                style={{
                    height: "200px",
                    width: " 300px",
                    backgroundColor: "red",
                    margin: 10,
                    padding: 10,
                    bottom: 0,
                    right: 0,
                }}>Transform
            </div>

        </motion.div>
    )
}

export default Transform;
