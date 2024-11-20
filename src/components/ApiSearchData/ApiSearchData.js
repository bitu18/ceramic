async function ApiSearchData() {
    const urls = [
        // 'https://f0bbc4a5-b0ce-4da0-9eb4-157c8bb28e72.mock.pstmn.io/flowerVase',
        // 'https://47d1dabb-95f9-47c1-a384-41a5d9f844b5.mock.pstmn.io/teaCup',
        // 'https://c5ba912e-5857-4097-8fc8-6892183c4304.mock.pstmn.io/bowl',
        // 'https://8b1ad9d0-2803-4dcd-85cd-e86f23e2797d.mock.pstmn.io/plate',
        // 'https://2581ceb6-b84a-4259-bacd-846f1261a8d1.mock.pstmn.io/cupWithLid',
        // 'https://ac34d2a3-b7ad-4f81-b035-a9bc5b2e92fc.mock.pstmn.io/teaSet',

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
