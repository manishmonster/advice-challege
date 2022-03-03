async function getAdvice() {
    let url = 'https://api.adviceslip.com/advice';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderAdvice() {
    let adviceHead = await getAdvice();
    let slip = adviceHead.slip;

    document.querySelector('.adviceId').innerHTML  = slip.id;
    document.querySelector('.adviceTitle').innerHTML = slip.advice;
}

renderAdvice();
