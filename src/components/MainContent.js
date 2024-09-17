import React, {useState} from "react";
import IconList from '../images/icon-list.svg';
import desktop from '../images/illustration-sign-up-desktop.svg';
//import mobile from '../images/illustration-sign-up-mobile.svg';
import IconCheck from '../images/icon-success.svg';

function MainContent() {
    // Hook para controlar se o formulário foi enviado
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // Função que será chamada ao submeter o formulário
    const handleSubmit = (e) => {
      e.preventDefault(); // Previne o comportamento padrão de submit
      setIsSubmitted(true); // Exibe a seção de sucesso
    };
  
    return (
      <>
        
        {!isSubmitted ? (
          <div className="container">
            <div className="conteudo-esquerda">
              <h1 className="cabecalho-principal">Stay updated!</h1>
              <p className="conteudo-principal">Join 60,000+ product managers receiving monthly updates on:</p>
              <ul className="icon-list">
                <li><img src={IconList} alt="Icon" /> Product discovery and building what matters</li>
                <li><img src={IconList} alt="Icon" /> Measuring to ensure updates are a success</li>
                <li><img src={IconList} alt="Icon" /> And much more!</li>
              </ul>
              <form onSubmit={handleSubmit}>
                <label className="email-box">Email address</label>
                <input type="email" id="email" placeholder="email@company.com" required />
                <button className="botao-principal" type="submit">Subscribe to monthly newsletter</button>
              </form>
            </div>
            <div className="img-direita">
              <picture>
                
                <img src={desktop} alt="Sign up illustration" />
              </picture>
            </div>
          </div>
        ) : (
          
          <div className="success-container">
            <div className="sucess-conteudo">
              <img src={IconCheck} className="success-icon" alt="Success Icon" />
              <h1 className="success-header">Thanks for subscribing!</h1>
              <p className="success-text">
                A confirmation email has been sent to your email. Please open it and click the button inside to confirm your subscription.
              </p>
              <button className="success-button" onClick={() => setIsSubmitted(false)}>
                Dismiss message
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
export default MainContent;