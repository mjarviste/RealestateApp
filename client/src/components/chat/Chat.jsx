import { useState } from 'react'
import './chat.scss'

const Chat = () => {

    const [chat, setChat] = useState(null)

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={() => setChat(true)}>
                    <div className="profile">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <div className="profile">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <div className="profile">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <div className="profile">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <div className="profile">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <div className="profile">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <div className="profile">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <div className="profile">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>
            {chat && 
            (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        John Doe
                    </div>
                    <div className="close" onClick={() => setChat(null)}>X</div>
                </div>
                <div className="center">
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit, amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit, amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit, amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit, amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit, amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit, amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit, amet.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit, amet.</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea className='messageArea' name="messageArea" id="messageArea"></textarea>
                    <button>Send</button>
                </div>
            </div>)}
            
        </div>
    )
}   

export default Chat