import axios from "axios";

const fetchRates = async (setRates, setError, setLoading) => {
  setLoading(true);
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.get(`${apiUrl}?api_key=${apiKey}`);
    const { ARS, BRL, CLP, EUR, USD } = response.data.rates;
    const monedasRedondeadas = {
      ARS: parseFloat(ARS.toFixed(2)),
      BRL: parseFloat(BRL.toFixed(2)),
      CLP: parseFloat(CLP.toFixed(2)),
      EUR: parseFloat(EUR.toFixed(2)),
      USD: parseFloat(USD.toFixed(2)),
    };

    setRates(monedasRedondeadas);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }

  
};

export default fetchRates;
