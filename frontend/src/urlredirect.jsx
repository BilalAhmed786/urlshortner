import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UrlRedirect = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/url/${shortcode}`);
        const originalUrl = result.data

        if (originalUrl) {
          // Redirect to the original URL
          window.location.href = originalUrl;
        }
      } catch (error) {
        console.error('Error fetching URL:', error);
      }
    };

    if (shortcode) {
      fetchData();
    }
  }, [shortcode, navigate]);

  return <div>Redirecting...</div>;
};

export default UrlRedirect;
