import { useQuery } from "@apollo/client";

import { GET_ALL_OPETATION } from "./gqlOperation/queries";

const App = () => {
  const { loading,  data } = useQuery(GET_ALL_OPETATION);
  if (loading) {
    return <h3>Loading data</h3>;
  }
  console.log(data);

  return (
    <>
    <p>{data.country.capital}</p>
    <p>{data.country.currency}</p>
    <p>{data.country.emoji}</p>
    <p>{data.country.name}</p>
    <p>{data.country.native}</p>
    <p>{data.country.typename}</p>
    </>
  );
};

export default App;
