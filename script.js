
gsap.registerPlugin(ScrollTrigger)
const cards = gsap.utils.toArray(".cardd");

cards.forEach((card, index) => {
  const tween = gsap.to(card, {
    scrollTrigger: {
      trigger: card,
     
         scrub: true,
      markers: true,
    
      invalidateOnRefresh: true
      
    },
    
    ease: "none",
    
  });

  ScrollTrigger.create({
    trigger: card,
    start: "top top",
    pin: true,
    pinSpacing: false,
    markers: true,
    id: 'pin',
    end: 'max',
    invalidateOnRefresh: true,
  });
});