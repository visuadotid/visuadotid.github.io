export const GTM_ID = 'GTM-5XZ8VP7'; // This is your GA Tracking ID

export const GTMPageView = (url) => {
  const pageEvent = {
    event: 'pageview',
    page: url,
  };

  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};
