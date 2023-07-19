import React from 'react'
const App=()=>{
    return(<>
    <div className="container">
        <header>
         <div className="logo">
            <img src="stone.png" alt="notfound" />
            <p>Obsidian</p>
         </div>
         <div className="title">
            <p>My Notes/Untitled</p>
         </div>
         <div className="buttons">
            <button className='btn1'>Create</button>
            <button className='btn2'>logout
            </button>
         </div>
        </header>
        <section id="main">
            <div className="box">
                <img src="icon1.png" alt="na" />
                <img src="icon2.png" alt="na" />
                <img src="icon3.png" alt="na" />
                <img src="icon4.png" id="last" alt="na" />
            </div>
            <div className="box group2 " >
                <div className="icons">
                <img src="part21.png" alt="na" />
                <img src="part22.png" alt="na" />
                </div>
                <div className="head">
                <h1>MyNotes</h1>
                </div>
                <div className="context">
                 <pre>Untitles</pre>
                 <pre>Practice</pre>
                 <pre>Resume</pre>
                 <pre>Website</pre>
                </div>
            </div>
            <div className="box group2">
                <div className="heading">
                 <h1>Untitled</h1>
                </div>
                <div className="subhead">
                    <h2>Heading</h2>

                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorum assumenda sint animi commodi cum quod minus corrupti accusantium quam officia, libero sapiente quo quibusdam voluptate, aliquam et perspiciatis doloremque?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, nostrum.</p>
                    <br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga officiis sunt totam nulla, cum corporis sapiente maxime repudiandae laboriosam iure tempora. Vero, facilis dolor. Quidem enim a iure dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vitae.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusamus, quibusdam voluptatum officiis at recusandae corporis, aliquid a natus vero molestias perferendis, error saepe assumenda nulla maxime animi. Nihil consectetur accusantium cumque ex quis explicabo expedita eius nemo fugit consequuntur.efhfh</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam molestias, error illo, porro doloremque modi esse, quibusdam autem nostrum voluptatibus. Necessitatibus deserunt similique reiciendis minima omnis assumenda reprehenderit iste possimus tenetur! Eum nihil asperiores quasi aliquam, quibusdam praesentium tenetur.</p>
                     
                </div>
            </div>
        </section>
    </div>
    </>
    );
};
export default App;
