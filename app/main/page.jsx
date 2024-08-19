import { fetchCachedData } from '../lib/data'

const DataPage = async () => {
    try {
        const data = await fetchCachedData(); // Call the cached API function
        console.log(data)

        return (
            <div>
                <h1>Fetched Data from API</h1>
                <ul>
                    {data.map((post) => (
                        <li key={post.brand}>{post.model}</li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        console.error('Error fetching data:', error);
        return (
            <div>
                <h1>Error fetching data</h1>
                <p>{error.message}</p>
            </div>
        );
    }
};

export default DataPage;