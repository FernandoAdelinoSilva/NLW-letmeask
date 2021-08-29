import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../components/Button';

export function Home() {
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
							<button className="create-room">
								<img src={googleIconImg} alt="Google" />
								Create your room with Google
							</button>
							<div className="separator">Or choose a room</div>
							<form >
								<input 
									type="text"
									placeholder="type room code"
								/>
								<Button type="submit">
									Join Room
								</Button>
							</form>
						</div>
					</main>
        </div>
    )
}