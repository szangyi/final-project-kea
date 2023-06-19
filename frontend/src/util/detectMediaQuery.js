

export function handleWindowSizeChange(setMediaQuery) {
    const windowWidth = window.innerWidth;
  
    if (windowWidth < 600) {
      setMediaQuery("mobile");
    } else {
      setMediaQuery("desktop");
    }
  }

