export function mobileChecker() {
  const checkMobile = () => {
    try {
      const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
      return isMobileDevice;
    } catch (ReferenceError) {
      return false;
    }
  };
  return checkMobile();
}
