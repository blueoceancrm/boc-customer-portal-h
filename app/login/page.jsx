'use client';

// import { useRouter } from 'next/navigation';
 
export default function LoginPage() {
    // const router = useRouter();
    
    async function handleSubmit(event) {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');
        const payload = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        const response = await fetch('/services/auth/token', payload);
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            // router.push('/profile');
        } else {
            console.error(response);
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    )
}