"use client";

import Script from "next/script";
import Cursor from "@/components/cursor";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Project from "@/components/project";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <main className="relative overflow-hidden bg-white min-h-screen">
      <style jsx global>{`
        @keyframes ultraSmoothFade {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.8);
            filter: blur(4px); /* Efek blur saat baru muncul */
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* bubble dan window Chatbase */
        #chatbase-bubble-button, 
        #chatbase-bubble-window {
          animation: ultraSmoothFade 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
          visibility: visible !important;
        }
      `}</style>

      <Script id="chatbase-loader" strategy="afterInteractive">
        {`
          (function(){
            if(!window.chatbase||window.chatbase("getState")!=="initialized"){
              window.chatbase = function() {
                var args = Array.prototype.slice.call(arguments);
                if(!window.chatbase.q){window.chatbase.q=[]}
                window.chatbase.q.push(args);
              };
              window.chatbase = new Proxy(window.chatbase,{
                get(target,prop){
                  if(prop==="q"){return target.q}
                  return function() {
                    var args = Array.prototype.slice.call(arguments);
                    return target(prop, args);
                  };
                }
              })
            }

            const onLoad = function(){
              setTimeout(function() {
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "W4X9v2LYcyQuBXsxvcy1n";
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
              }, 5000); 
            };

            if(document.readyState === "complete"){
              onLoad();
            } else {
              window.addEventListener("load", onLoad);
            }
          })();
        `}
      </Script>

      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Faq />
      <Footer />
    </main>
  );
};

export default Page;