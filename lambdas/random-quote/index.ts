import fetch from "node-fetch";

type Quote = {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export const handler = async () => {
  const randomQuoteResponse = await fetch("https://api.quotable.io/random");
  const quote = await randomQuoteResponse.json() as Quote; // using unknown + type guard would be more bullet proof
  console.log(quote.content);
}
