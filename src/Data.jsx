import React from 'react';
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Data = () => {
  useGSAP(() => {
        document.querySelectorAll(".elem").forEach(elm => {
            let img = elm.querySelector('img');
            let timeline = gsap.timeline();
            let randomX = gsap.utils.random(-100, 1000); 
            timeline
                .set(img, {
                    transformOrigin: `${randomX === 0 ? '50%' : '10%'}`, 
                }, "begin")
                .to(img, {
                    scale: -1, 
                    ease: 'fun',
    
                    scrollTrigger: {
                        trigger: img,
                        start: 'center',
                        end: 'top top++',
                        scrub: 'medium', 
                    }
                }, "begin") 
                .to(elm, {
                    xPercent: `${randomX}px`, 
                    ease: 'Linear.easeNone', 
    
                    scrollTrigger: {
                        trigger: elm,
                        start: '0%', 
                        end: '∞ top', 
                        scrub: 'super-slow',
                    }
                });
        });
    });
    
    
  
    return (
        <>
            <div className="w-full bg-zinc-900">
                <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "1", "--c": "3" }}><img src="/1.png" alt="Image 1" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "1", "--c": "7" }}><img src="/2.png" alt="Image 2" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "2", "--c": "2" }}><img src="/3.png" alt="Image 3" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "2", "--c": "6" }}><img src="/4.png" alt="Image 4" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "3", "--c": "4" }}><img src="/5.png" alt="Image 5" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "3", "--c": "8" }}><img src="/6.png" alt="Image 6" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "4", "--c": "1" }}><img src="/7.png" alt="Image 7" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "4", "--c": "4" }}><img src="/8.png" alt="Image 8" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "5", "--c": "2" }}><img src="/9.png" alt="Image 9" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "5", "--c": "6" }}><img src="/10.png" alt="Image 10" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "6", "--c": "3" }}><img src="/11.png" alt="Image 11" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "6", "--c": "7" }}><img src="/12.png" alt="Image 12" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "7", "--c": "5" }}><img src="/13.png" alt="Image 13" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "7", "--c": "8" }}><img src="/14.png" alt="Image 14" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "8", "--c": "1" }}><img src="/15.png" alt="Image 15" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "8", "--c": "4" }}><img src="/16.png" alt="Image 16" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "9", "--c": "2" }}><img src="/17.png" alt="Image 17" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "9", "--c": "6" }}><img src="/18.png" alt="Image 18" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "10", "--c": "3" }}><img src="/19.png" alt="Image 19" /></div>
                    <div className="elem col-span-1 row-span-1" style={{ "--r": "10", "--c": "7" }}><img src="/20.png" alt="Image 20" /></div>
                </div>

                <div className="fixed font-['Garamond'] top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-[1]">
                    <h1 className="text-7xl mb-4">SPORTIFY<sup>®</sup></h1>
                </div>
                <div id="about" className="w-full h-screen bg-[#D1D1D1] font-['Garamond'] flex items-center justify-center mx-auto py-96 relative z-[999] text-center">
                    <p className="text-5xl w-3/4 leading-[3.2rem] text-black font-regular text-left">Welcome to Sportify, your one-stop destination for all things sports! We believe in the power of sports to inspire, connect, and transform lives. Whether you’re a seasoned athlete, a weekend warrior, or just starting your fitness journey, we offer a diverse range of high-quality sports gear, apparel, and accessories tailored to your needs.



Join our community of sports enthusiasts and elevate your game with the right gear. Gear up, and let’s get moving!</p>
                </div>

                    </div>
               
 
        </>
    )
}

export default Data;
