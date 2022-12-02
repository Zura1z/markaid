// async function getData() {
// 	// get kpi data front api
// 	const response = await fetch(
// 		'http://127.0.0.1:8000/api/model/',
// 		{
// 			method: 'GET',
// 			headers: {
// 				'context': 'your_api_key', //token goes here
// 				'Content-Type': 'application/json',
// 				// Accept: 'application/json',
// 			},
// 		},
// 	);

// 	if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 	}
// 	const data = await response.json();
// 	return data;
// }
// import { QA } from "../types";
// function getConvertedData(): Promise {
// 	return fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', {
// 		method: 'GET',
// 		headers: {
// 			'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
// 			'x-rapidapi-key': 'your_api_key',
// 		},
// 	})
// 		.then((response) =&gt; response.json()) // Parse the response in JSON
// 		.then((response) =&gt; {
// 			return response as ConversionData; // Cast the response type to our interface
// 		});
// }

// export async function askForList(
//   context: String,
//   question: String
// ): Promise<QA[]> {
//   //   const res = await fetch("http://127.0.0.1:8000/api/model/");
//   //   const { data }: { data: QA } = await res.json();
//   //   return data;

//   const response = await fetch("http://127.0.0.1:8000/api/model/", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify([context, question]),
//   });
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json(); // token store in redux
//   return data;
// }

// import fetch from "node-fetch";

async function getData(context: string, question: string) {
  // get kpi data front api
  const response = await fetch("http://127.0.0.1:8000/api/model/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify([context, question]),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// Invoke it
// getData(
//   "The US has passed the peak on new coronavirus cases, President Donald Trump said and predicted that some states would reopen this month. The US has over 637,000 confirmed Covid-19 cases and over 30,826 deaths, the highest for any country in the world.",
//   "What was President Donald Trump's prediction?"
// );
