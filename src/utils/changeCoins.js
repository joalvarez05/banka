import axios from "axios";

export function cambioDolarAeuro(input) {
  const cambio = input * 0.97;
  return cambio;
}

const fetchRates = async (setRates, setError, setLoading) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  // const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.get(`${apiUrl}?api_key=${apiKey}`);
    setRates(response.data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

export default fetchRates;
