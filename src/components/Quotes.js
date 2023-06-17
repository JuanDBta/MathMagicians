import { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchquote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=art', {
          headers: {
            'X-Api-Key': '8Uu8/Y98t5JkZzTUDhHG3g==0zIc3KZqxMAiWRIp',
          },
        });
        const data = await response.json();

        setQuote(data[0], data[1]);
        setLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setLoading(false);
      }
    };

    fetchquote();
  }, []);
  if (loading) {
    return (<p>loading ...</p>);
  }
  if (error !== null) {
    return (<p>{error}</p>);
  }
  return (
    <div className="quotes">
      <p>
        {quote.quote}
      </p>
      <p>
        {quote.author}
      </p>
    </div>
  );
}
export default Quote;
