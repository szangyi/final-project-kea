

export function handleWindowSizeChange(setMediaQuery) {
    const windowWidth = window.innerWidth;
  
    if (windowWidth < 600) {
      setMediaQuery("mobile");
    } else if (windowWidth < 950){
      setMediaQuery("tablet");
    } else {
      setMediaQuery("desktop");
    }
  }

