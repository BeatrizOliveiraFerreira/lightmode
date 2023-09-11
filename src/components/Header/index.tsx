import React, { useContext } from 'react';
import { Container } from '../styles';
import Switch from 'react-switch';
import mode from '/Users/beatr/fle/src/assets/mode.png';
import imgg from '/Users/beatr/fle/src/assets/imgg.png';


interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
    return (
        <Container>
            <img src={imgg} alt="layout" />
            <img className='mode' src={mode} alt="imagem" />
            <Switch className='switch'
                onChange={toggleTheme}
                checked={false}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor='#808080'
                onColor='#fff'
            />
            <button>
                <nav> 
                    <a href="https://t-smoky-one.vercel.app/" target='_blank'>Criar</a>
                </nav>
                
                </button>
            <span className='tarefas'>Tarefas Criadas</span>
            <span className='concluidas'>Concluídas</span>
        </Container>
    );
}




export default Header;

