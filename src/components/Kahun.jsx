
export const Kahun = () => {

    async function fetchData(citycode) {
        let date = new Date();
        // UTCに合わせるために-9,mapSp[0]に['citycode', 'date', 'pollen']が入っているので+1して合わせる
        let todayHour = date.getHours() - 9 + 1;
        if (todayHour < 0) {
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
            todayHour = todayHour + 24;
        }
        const yestDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
        const today = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`;
        try {
            const res = await fetch(`https://wxtech.weathernews.com/opendata/v1/pollen?citycode=${citycode}&start=${today}&end=${today}`, { method: "GET" });
            const csvData = await res.text(); // CSV形式のデータをテキストとして取得
            //１行１行を配列にする
            const dataSp = csvData.split('\n');
            //map関数で２次元配列にする　['23219', '2024-03-20T00:00:00+09:00', '0']みたいなのが入る
            const mapSp = dataSp.map((data) => { return data.split(',') });
            console.log(mapSp);
            //現在時刻の花粉量をtimePollに入れる
            const timePoll = mapSp[todayHour];
            console.log(timePoll);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return <button onClick={() => fetchData(23219)}>aaaa</button>;

}