import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../components/Button';

export function NewRoom() {
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
						</div>
					</main>
        </div>
    )
}