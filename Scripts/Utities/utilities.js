


async function fetchData(url, params) {
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params)
    })
        .then((data) => data.json())
        .then((data) => JSON.parse(data))
}