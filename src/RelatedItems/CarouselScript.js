document.addEventListener("click",e => {

  let handle



  if (e.target.matches('.TheArrows')) {
    handle = e.target
  } else {
    handle = e.target.closest('.TheArrows')

  }
  if (handle != null) onHandleClick(handle)
})



function onHandleClick(handle) { console.log(handle);
  const slider = handle.closest('.ContainerPlace').querySelector(".TheArrows")
  const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--carouselNum'))
  if (handle.classList.contains("LeftArrow")) {
    slider.style.setProperty('--carouselNum', carouselNum - 1)
  }
  if (handle.classList.contains("RightArrow")) {

    slider.style.setProperty('--carouselNum', carouselNum + 1)
  }

}




module.export onHandleClick = onHandleClick;
