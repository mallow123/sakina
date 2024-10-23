document.addEventListener("DOMContentLoaded", () => {
    const reasons = document.querySelectorAll(".reason");
    const secretMessage = document.querySelector(".secret-message");
    const creepySound = document.getElementById("creepy-sound");
    const distortedSound = document.getElementById("distorted-sound");
    
    let soundPlayed = false;
    let secretRevealed = false;
  
    // Reveal reasons one by one
    reasons.forEach((reason, index) => {
      setTimeout(() => {
        reason.classList.remove("hidden");
        reason.style.opacity = "1";
        addGlitchEffect(reason);
      }, index * 2000);
    });
  
    // Mouse move / touch event to trigger background and reasons flicker
    document.body.addEventListener("mousemove", triggerGlitchEffects);
    document.body.addEventListener("touchstart", triggerGlitchEffects);
  
    function triggerGlitchEffects(e) {
      const x = e.clientX / window.innerWidth - 0.5 || 0;
      const y = e.clientY / window.innerHeight - 0.5 || 0;
      const bg = document.querySelector('.interactive-bg');
      bg.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
  
      if (!soundPlayed) {
        creepySound.play();
        soundPlayed = true;
      }
    }
  
    // Secret message appears after all reasons are revealed
    setTimeout(() => {
      if (!secretRevealed) {
        secretMessage.classList.remove("hidden");
        secretMessage.style.opacity = "1";
        secretRevealed = true;
      }
    }, 13000); // 13 seconds for interaction
  
    // Add interactive clicks for disturbing surprises
    document.body.addEventListener("click", () => {
      const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
      randomReason.textContent = "It’s always listening...";
      randomReason.style.color = "#ff0000";
      randomReason.style.transition = "color 0.5s ease-out";
      
      // Random flicker effect on click
      addFlickerEffect(randomReason);
  
      // Play a distorted sound to heighten tension
      distortedSound.play();
    });
  
    // Touch interactions for mobile devices
    document.body.addEventListener("touchstart", () => {
      const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
      randomReason.textContent = "You can’t escape it...";
      randomReason.style.color = "#ff0000";
      
      // Random flicker effect on touch
      addFlickerEffect(randomReason);
  
      // Play a distorted sound on touch
      distortedSound.play();
    });
  
    // Hover on title triggers glitch and creepy vibe
    document.querySelector(".title").addEventListener("mouseenter", () => {
      secretMessage.textContent = "They know everything...";
      secretMessage.style.color = "#ff0000";
      secretMessage.classList.add("flicker");
  
      // Trigger sound during glitch
      distortedSound.play();
    });
  });
  
  // Function to add glitch effect
  function addGlitchEffect(element) {
    element.style.animation = "glitchText 1s infinite, textDistortion 1.5s infinite";
  }
  
  // Function to add flicker effect
  function addFlickerEffect(element) {
    element.style.animation = "flicker 0.3s infinite alternate";
  }
  