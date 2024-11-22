async function ApiSearchData() {
    const urls = [
        // 'https://05b3ed5d-0d3a-40bd-886f-d0105c32db12.mock.pstmn.io/flowerVase',
        // 'https://39cec331-28c2-4ccd-831a-788f4abff34b.mock.pstmn.io/teaCup',
        // 'https://ee6a8351-3637-40b8-b594-a6f1363144b4.mock.pstmn.io/bowl',
        // 'https://fc6a6e65-d02c-4426-908f-7e1862a39a8b.mock.pstmn.io/plate',
        // 'https://413bc98a-76f9-4dc4-9f2a-e8d791c6e51b.mock.pstmn.io/cupWithLid',
        // 'https://7dec8399-cd49-4223-a46c-b99325b70b5c.mock.pstmn.io/teaSet',

        'http://localhost:3001/flowerVase',
        'http://localhost:3001/teaCup',
        'http://localhost:3001/bowl',
        'http://localhost:3001/plate',
        'http://localhost:3001/cupWithLid',
        'http://localhost:3001/teaSet',
    ];

    try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((response) => response.json()));

        return data.flat();
    } catch (error) {
        console.error(error);
        return [];
    }
}
export default ApiSearchData;
