
const chinpokomon = document.querySelector('.chinpokomon-creature');
chinpokomon.addEventListener('animationend', function() {
    document.querySelector('.pixelfont').classList.add('animatepixelfont');
});

const trackAnimationProgress = (animation, cb, precision = 5) => {
    let progress = 0;
    const updateValue = () => {
      if (animation && animation.currentTime) {
        let newProgress = animation.effect.getComputedTiming().progress * 1;
        if (animation.playState === "finished") newProgress = 1;
        newProgress = Math.max(0.0, Math.min(1.0, newProgress)).toFixed(precision);
  
        if (newProgress != progress) {
          progress = newProgress;
          cb(progress);
        }
      }
      requestAnimationFrame(updateValue);
    };
    requestAnimationFrame(updateValue);
  }
  
  const model = document.querySelector("model-viewer");
  trackAnimationProgress(model.getAnimations()[0], (progress) => {
  console.log(progress);
    model.orientation = `0deg 0deg ${progress * -360}deg`;
    model.scale = `0.5 0.5 0.5`;
  });