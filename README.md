# Assignment-5

https://react-customhook.netlify.app/

We make one custom React hook name useFetch for easy API call. Before we write fetch code again and again in every component, now this hook keep all in one place. It take care three thing -: data we get, loading when fetch happen, and error if problem come.
Inside it use useEffect, so when API URL change, it call again automatically. This hook only need URL, so we can use anywhere in app. We try with dummy API and it work good, show loading, bring data, and also catch error. With this, our component code stay clean, only for UI showing.
