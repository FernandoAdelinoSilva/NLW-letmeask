import { Link } from 'react-router-dom'

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {

	const { user } = useAuth();
	console.log(user?.name);

	return (
			<div id="page-auth">
				<aside>
					<img src={ilustrationImg} alt="Ilustration QA"/>
					<strong>Create Live Rooms for Q&amp;A</strong>
					<p>Answer Real Time Questions</p>
				</aside>
				<main>
					<div className="main-content">
						<img src={logoImg} alt="Letmeask" />
						<h2>Create a new Room</h2>
						<div className="separator">Or choose a room</div>
						<form >
							<input 
								type="text"
								placeholder="room name"
							/>
							<Button type="submit">
								Create Room
							</Button>
						</form>
						<p>
							Want to Join in a existing room ? <Link to="/">click here</Link>
						</p>
					</div>
				</main>
			</div>
	)
}