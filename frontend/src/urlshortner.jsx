import { useState } from 'react';
import axios from 'axios';

function UrlShortener() {
  const [url, setUrl] = useState('');
  const [validation,setvalidation] = useState('')
  const [shortcode, setShortCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/url/shorten', { originalUrl: url });
      setShortCode(response.data.shortUrl);
      setvalidation('');
      setUrl('');
    } catch (error) {
      setvalidation(error.response.data);
    }
    
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        {validation?validation:''}
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortcode && (
        <p>
          Shortened URL: <a href={`http://localhost:5173/${shortcode}`} target="_blank" rel="noopener noreferrer">{shortcode}</a>
        </p>
      )}
    </div>
  );
}

export default UrlShortener;
