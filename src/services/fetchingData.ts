import axios from 'axios'

export const FetchingData = async () => {
  const mockResponse = await axios.get("http://localhost:5173/src/services/MOCK_DATAA.json");
  
  return mockResponse.data;
}