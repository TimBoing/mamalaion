const trackMouse = () => {
  const pageContainer = document.getElementById('wikipage-container');
  const topMouse = document.getElementById('top-mouse');
  const leftMouse = document.getElementById('left-mouse');
  const portal = document.getElementById('portal-test');
  let relativeX;
  let relativeY;

  const trackIt = () => {
    const x = event.clientX;
    const y = event.clientY;
    const offsetX = pageContainer.getBoundingClientRect().left;
    const offsetY = pageContainer.getBoundingClientRect().top;
    relativeX = x - offsetX;
    relativeY = y - offsetY;
    leftMouse.innerHTML = `Left mouse : ${relativeX}`;
    topMouse.innerHTML = `Left mouse : ${relativeY}`;

  }

  pageContainer.addEventListener('mouseover', (event) => {
    //trackIt();
    //pageContainer.css({'transform: scale(2.4)'});

  });

  pageContainer.addEventListener('mousemove', (event) => {
    trackIt();
    //pageContainer.css({'transform-origin': ((event.pageX - pageContainer.offset().left) / pageContainer.width()) * 100 + '% ' + ((event.pageY - pageContainer.offset().top) / pageContainer.height()) * 100 +'%'});


  });

  pageContainer.addEventListener('click', (event) => {
    pageContainer.style.transformOrigin = `${relativeX}px ${relativeY}px`;
    pageContainer.classList.add('zoom-effect');
    //pageContainer.style.transform = `scale(2)`;

    // pageContainer.style.left = `${relativeX}px`;
    // pageContainer.style.top = `${relativeY}px`;

    // portal.style.left =  `${relativeX - 50}px`;
    // portal.style.top = `${relativeY - 50}px`;
    // portal.classList.remove('small-portal');
    // portal.classList.add('big-portal');
    //translateY(${relativeY}px) translateX(${relativeX}px)
  });

}

export { trackMouse };


 // $('.tile')
 //    // tile mouse actions
 //    .on('mouseover', function(){
 //      $(this).children('.photo').css({'transform: scale(2.4)'});
 //    })
 //    .on('mousemove', function(e){
 //      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
 //    })
 //    // tiles set up
 //    .each(function(){
 //      $(this)
 //        // add a photo container
 //        .append('<div class="photo"></div>')
 //        // some text just to show zoom level on current item in this example
 //        .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
 //        // set up a background image for each tile based on data-image attribute
 //        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
 //    })
