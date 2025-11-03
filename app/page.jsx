import LikeButton from '../components/like-button';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default async function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const authResponse = await fetch(
        'https://wgtca-dev-ed.my.salesforce.com/services/oauth2/token',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({

            })
        }
    );
    const accessToken = (await authResponse.json()).access_token;
    const url = 'https://wgtca-dev-ed.my.salesforce.com/services/data/v65.0/query?q=SELECT+Id,Name+FROM+Account';
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    }
    const externalApiResponse = await fetch(url, { headers: headers });
    const data = (await externalApiResponse.json()).records;
    console.log(data);
    return (
        <div>
        <Header title="Develop. Preview. Ship." />
        <ul>
            {data.map((record) => (
            <li key={record.Id}>{record.Name}</li>
            ))}
        </ul>
        <LikeButton />
        </div>
    );
}