# Assignment-5

https://react-customhook.netlify.app/

We made a custom React hook called useFetch to make API calls easier. Instead of writing fetch logic again and again in different components, this hook keeps everything in one place. It handles three main things: the data we get back, a loading state while the request is happening, and any error if something goes wrong.

The hook uses useEffect so that whenever the API URL changes, it automatically makes the call. Since it only needs the URL as input, we can reuse it anywhere in the app. We tested it with a dummy API and it worked well, showing loading properly, fetching the data, and handling errors without breaking anything. This way, our components stay clean and only focus on showing the UI.
