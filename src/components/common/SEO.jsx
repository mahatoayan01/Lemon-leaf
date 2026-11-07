import { useEffect } from 'react';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const SEO = ({ title, description }) => {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | ${RESTAURANT_DATA.name}`
      : `${RESTAURANT_DATA.name} | ${RESTAURANT_DATA.subname} - Best Restaurant`;
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};

