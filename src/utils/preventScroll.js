const preventScroll = (isPrevent) => {
  if (isPrevent) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

export default preventScroll;
