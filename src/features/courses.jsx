import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Para from '../component/para';


import './courses.css';
import StopWatch from '../component/stopwatch';

const Courses = () => {
    return (
        <>
    <Header/>
    <main className="page">
        <div className='courses'>
        <StopWatch/>
        <h1 className='coreact'>Courses Offered</h1>
        
        
        <p>
            <h2>1. Transportation</h2>
            <Para title="Global Supply Chain" src="https://cloud.anylogic.com/assets/embed?modelId=5d154d68-e326-4401-b51a-d7561e91fd2a" image="https://lot.dhl.com/wp-content/uploads/2021/03/Article-Key-Image_1875848542-800x420.jpg"/>
            <Para title="Distribution Center" src="https://cloud.anylogic.com/assets/embed?modelId=fd24f59d-85cc-45d0-a327-ed551b983c43" image="https://www.nauticalcargo.in/wp-content/uploads/2021/06/Key-principles-for-a-warehouse-and-distribution-center-design.png"/>
            <Para title="Supermarket Simulation" src="https://cloud.anylogic.com/assets/embed?modelId=dd671dfb-9818-4b69-a6bb-55e4d3dd39c8" image="https://cdn.akamai.steamstatic.com/steam/apps/1532910/header.jpg?t=1672836199"/>
            
        </p>      
        <p>
            <h2>2. Healthcare</h2>
            <Para   title="COVID-19" src="https://cloud.anylogic.com/assets/embed?modelId=ee28f592-ef81-43f9-ab15-5dd699887133" image="https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-479v.jpg?sfvrsn=4dba955c_12%20479w"/>
            <Para   title="Social Distancing" src="https://cloud.anylogic.com/assets/embed?modelId=0fcb5ab6-b509-421f-ad13-59ce9349bfb3" image="https://m.economictimes.com/thumb/msid-77018165,width-1200,height-900,resizemode-4,imgsize-277754/society-would-have-to-increase-social-distancing-time-exponentially-in-order-to-see-a-linear-decrease-in-hospital-demand-.jpg"/>
            <Para   title="Material Handling at Hospital" src="https://cloud.anylogic.com/assets/embed?modelId=7d708ef8-8873-4b8c-b7b8-c109d3a1fc9f" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUdB0DF6TV1r9_N0e6CFOv4JcGN1fIkK661P3rAlwKzJikH9FuvMwVwllg3aFCpxbaJQ&usqp=CAU"/>
        </p>
        <p>
            <h2>3. Artificial Intelligence</h2>
            <Para title="Automated Guided Vehicle" src="https://cloud.anylogic.com/assets/embed?modelId=bc88f3be-b5a6-4962-abc1-a26def59994d" image="https://www.dmmetalproducts.com/wp-content/uploads/2017/10/AGV.jpg"/>
            <Para title="Flexible Manufacturing" src="https://cloud.anylogic.com/assets/embed?modelId=9044fa72-c5dd-4079-9f6a-a877464b905f" image="https://www.vskills.in/certification/blog/wp-content/uploads/2015/06/FLEXIBLE-MANUFACTURING-SYSTEMFMS.gif"/>
            <Para title="Coffee Shop AI" src="https://cloud.anylogic.com/assets/embed?modelId=059cdea2-25b6-4b73-bda0-e2778988ddfd" image="https://i0.wp.com/syncedreview.com/wp-content/uploads/2020/12/image-24-1.png?resize=1200%2C580&ssl=1"/>
           
        </p>
        <p>   
            <h2>4. Games</h2>  
            <Para  title="Goldratt's Dice Game"src="https://cloud.anylogic.com/assets/embed?modelId=d0a022fb-e0a7-4177-92c6-a9348d3a3cfc" image="https://www.goldrattsdicegame.com/hosted/images/7a/61adde1fbc4df8bf5c0ee9f100ab18/512x512bb.png"/>
            <Para  title="The Game of Life" src="https://cloud.anylogic.com/assets/embed?modelId=a0a7d2ae-a007-4f1d-b5b5-408e4ceb3465" image="https://www.gamesver.com/wp-content/uploads/2020/05/Complete-view-of-the-Game-of-Life.jpg.webp"/>
            <Para  title="Stock Management Game" src="https://cloud.anylogic.com/assets/embed?modelId=eb642406-28cf-4d38-8fa8-c6ea73e84d31" image="https://m.media-amazon.com/images/I/51V6NPMBMEL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"/>
            
           
        </p>
        <p>
            <h2>5. Oil and Gas</h2>
            <Para title="Oil Terminal" src="https://cloud.anylogic.com/assets/embed?modelId=67411f29-6575-4568-83a3-74a22cc3eaad" image="https://thumbs.dreamstime.com/b/aerial-view-oil-terminal-industrial-facility-storage-o-aerial-view-oil-terminal-industrial-facility-storage-126139942.jpg"/>
            <Para title="Gas Station" src="https://cloud.anylogic.com/assets/embed?modelId=2379f40f-01fd-4fc1-a784-f9de1e064867" image="https://images.adsttc.com/media/images/5da3/9ead/3312/fd25/b100/00de/large_jpg/stringio.jpg?1571004070"/>
            <Para title="Wells Repair Optimization" src="https://cloud.anylogic.com/assets/embed?modelId=37929f5a-602f-4e94-b8ab-656da9d3790d" image="https://cloud.anylogic.com/files/HyS-3rAbEKHgwIgn0RWvIGmR7uY5EtgBYcxH3rHWu8Eg_hd"/>
           
        </p>
        <p>
            <h2>6. Supply Chain</h2>
            <Para title="Supply Chain" src="https://cloud.anylogic.com/assets/embed?modelId=a17b5bbe-7c9d-4460-9be7-15c9820ebec0" image="https://cdn.ttgtmedia.com/rms/onlineImages/erp-supply_chain_management_mobile.png"/>
            <Para title="Two Stocks Problem" src="https://cloud.anylogic.com/assets/embed?modelId=da1421c7-ba9a-40a7-9248-a4528c1719eb" image="https://www.thebalancemoney.com/thmb/oogn7pi9WI9exh6Ags-il6bUfRQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dotdash-TheBalance-what-are-stocks-3306181-Final-75b1bb359b7141d9a22cb1b706f2cf2f.jpg"/>
            <Para title="Supermarket Simulation" src="https://cloud.anylogic.com/assets/embed?modelId=dd671dfb-9818-4b69-a6bb-55e4d3dd39c8" image="https://s32519.pcdn.co/wp-content/uploads/2018/11/grocery-supply-chain-best-practices-figure-13-integrated-supply-chain-1024x480.png"/>
           
        </p>
        </div>
    </main>
    <Footer/>
    </>
    );
}
 
export default Courses;