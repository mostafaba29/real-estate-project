/* eslint-disable react/prop-types */
import '../assets/styles/components/agentCard.style.scss';
export default function AgentCard({ name, role, imageSrc}) {
    return (
        <div className="agent-card">
            <img 
                src={imageSrc} 
                alt={`${name} profile`} 
            />
            <div className="agent-card-footer">
                <div className="agent-info">
                <h3>{name}</h3>
                <p>{role}</p>
                </div>
                <div className="agent-icons">
                <i 
                    className="fas fa-phone" 
                />
                <i 
                    className="fa-solid fa-envelope" 
                />
                </div>
            </div>
            </div>
    )
}
