# Assignment-5

https://react-customhook.netlify.app/

I made one custom React hook name useFetch for easy API call.Before I wrote fetch code again and again in every component, now this hook keep all in one place.It take care three thing -: data I get, loading when fetch happen, and error if problem come.
Inside it i used useEffect, so when API URL change, it will call again automatically. I have tried with given API and it work good- show loading, bring data, and also catch error.With this, my component stay clean, only for UI showing.
