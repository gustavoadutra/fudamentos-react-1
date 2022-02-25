import './App.css'
import React from 'react';

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => (
    <div className='App'>
        <Card titulo="#05 - Condicional">
            <CondicionalComIf numero={8}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={5}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente Com Paramentro">
            <ComParamentro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo"></ComParamentro>
        </Card>
        <Card titulo="#02 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Julia</li>
                    <li>Analberto</li>
                    <li>Bia</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
        {/* <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Julia</li>
                <li>Analberto</li>
                <li>Bia</li>
            </ul>
        </ComFilhos> */}
        {/* <Primeiro></Primeiro>
        <ComParamentro titulo="Esse é o título"
            subtitulo="Esse é o subtítulo"></ComParamentro> */}
    </div>
);