// Set up PhotoSwipe with all anchor tags in the Gallery container 
    document.addEventListener('DOMContentLoaded', function(){
      
      Code.photoSwipe('a', '#galeria');
      
    }, false);
    
    
    /* 
      Overview: 
      ---------
      
      Code.photoSwipe(thumbnail-elements, container-element, options);
        
      When you specify a container-element, the helper uses event delegation
      to handle the click event, i.e. rather than having 50 click event listeners
      for each thumbnail, we have one for the container then try and deduce which
      thumbnail was clicked. If you omit a container, an event listener will be placed 
      on each individual thumbnail found.
      
      
      With options:
      -------------
      Code.photoSwipe('a', '#Gallery', { loop: false } );
      
      
      Using preselected elements:
      ---------------------------
      var galleryEl = document.getElementById('Gallery');
      var thumbEls = galleryEl.querySelectorAll('a');
      
      Code.photoSwipe(thumbEls, galleryEl);
    
    */