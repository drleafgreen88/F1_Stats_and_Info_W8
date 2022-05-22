import { useState } from "react";

const Kimi = () => {

    const [kimiQuoteUrl, setKimiQuoteUrl] = useState("");

    const fetchQuote = function () {
        fetch("https://kimiquotes.herokuapp.com/quote")
            .then(response => response.json())
            .then(data => setKimiQuoteUrl(data))
    }

    return (
        <div>
            <button class="kimi" onClick={fetchQuote}>Kimi Wisdom</button>
            <p class="kimi" id="random_kimi_quote" src={kimiQuoteUrl}><i>{kimiQuoteUrl.quote} {kimiQuoteUrl.year}</i></p>
        </div>
    );
}

export default Kimi;