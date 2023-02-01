import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Para from '../component/para';

import './courses.css';

const Courses = () => {
    return (
        <>
    <Header/>
    <main className="page">
        <div className='courses'>
        <h1 className='coreact'>Courses Offered</h1>
        <p>
            <h2>1. Transportation</h2>
            <Para title="Global Supply Chain" src="https://cloud.anylogic.com/assets/embed?modelId=5d154d68-e326-4401-b51a-d7561e91fd2a"/>
            <Para title="Distribution Center" src="https://cloud.anylogic.com/assets/embed?modelId=fd24f59d-85cc-45d0-a327-ed551b983c43"/>
            <Para title="Supermarket Simulation" src="https://cloud.anylogic.com/assets/embed?modelId=dd671dfb-9818-4b69-a6bb-55e4d3dd39c8"/>
            
        </p>      
        <p>
            <h2>2. Healthcare</h2>
            <Para   title="COVID-19" src="https://cloud.anylogic.com/assets/embed?modelId=ee28f592-ef81-43f9-ab15-5dd699887133"/>
            <Para   title="Social Distancing" src="https://cloud.anylogic.com/assets/embed?modelId=0fcb5ab6-b509-421f-ad13-59ce9349bfb3"/>
            <Para   title="Material Handling at Hospital" src="https://cloud.anylogic.com/assets/embed?modelId=7d708ef8-8873-4b8c-b7b8-c109d3a1fc9f"/>
        </p>
        <p>
            <h2>3. Artificial Intelligence</h2>
            <Para title="Automated Guided Vehicle" src="https://cloud.anylogic.com/assets/embed?modelId=bc88f3be-b5a6-4962-abc1-a26def59994d"/>
            <Para title="Flexible Manufacturing" src="https://cloud.anylogic.com/assets/embed?modelId=9044fa72-c5dd-4079-9f6a-a877464b905f"/>
            <Para title="Coffee Shop AI" src="https://cloud.anylogic.com/assets/embed?modelId=059cdea2-25b6-4b73-bda0-e2778988ddfd"/>
           
        </p>
        <p>   
            <h2>4. Games</h2>  
            <Para  title="Goldratt's Dice Game"src="https://cloud.anylogic.com/assets/embed?modelId=d0a022fb-e0a7-4177-92c6-a9348d3a3cfc"/>      
            <Para  title="The Game of Life" src="https://cloud.anylogic.com/assets/embed?modelId=a0a7d2ae-a007-4f1d-b5b5-408e4ceb3465"/>
            <Para  title="Stock Management Game" src="https://cloud.anylogic.com/assets/embed?modelId=eb642406-28cf-4d38-8fa8-c6ea73e84d31"/>
            
           
        </p>
        <p>
            <h2>5. Oil and Gas</h2>
            <Para title="Oil Terminal" src="https://cloud.anylogic.com/assets/embed?modelId=67411f29-6575-4568-83a3-74a22cc3eaad"/>
            <Para title="Gas Station" src="https://cloud.anylogic.com/assets/embed?modelId=2379f40f-01fd-4fc1-a784-f9de1e064867"/>
            <Para title="Wells Repair Optimization" src="https://cloud.anylogic.com/assets/embed?modelId=37929f5a-602f-4e94-b8ab-656da9d3790d"/>
           
        </p>
        <p>
            <h2>6. Supply Chain</h2>
            <Para title="Supply Chain" src="https://cloud.anylogic.com/assets/embed?modelId=a17b5bbe-7c9d-4460-9be7-15c9820ebec0"/>
            <Para title="Two Stocks Problem" src="https://cloud.anylogic.com/assets/embed?modelId=da1421c7-ba9a-40a7-9248-a4528c1719eb"/>
            <Para title="Supermarket Simulation" src="https://cloud.anylogic.com/assets/embed?modelId=dd671dfb-9818-4b69-a6bb-55e4d3dd39c8"/>
           
        </p>
        </div>
    </main>
    <Footer/>
    </>
    );
}
 
export default Courses;