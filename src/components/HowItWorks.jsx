import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo ,pubgVideo , a19Img} from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={a19Img} alt="chip" width={500} height={500} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A19 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={pubgVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          {/* <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p> */}

          <div className="text-center leading-tight mt-5 space-y-1">
  <p className="text-5xl font-extrabold tracking-widest uppercase">
    <span className="text-orange-600">Battle </span>   
    <span className="text-green-700">grounds</span>
  </p>

  <p className="text-4xl font-extrabold tracking-wider flex justify-center items-center gap-3 uppercase">
    <span className="bg-white text-black px-4 py-1">Mobile</span>
    <span className="text-green-600">India</span>
  </p>
</div>

          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    A19 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Pro-class GPU</p>
                <p className="hiw-text">with 8 cores</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks