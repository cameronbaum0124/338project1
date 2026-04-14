import backgroundalina from '../assets/backgroundalina.jpg';
import projectalina from '../assets/project_alina.png';

function Alina() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundalina})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            padding: "30px 20px"
        }}>
            <div style={{
                maxWidth: "900px",
                margin: "0 auto",
                borderRadius: "50px",
                padding: "40px 50px",
                boxShadow: "0 20px 40px rgba(110, 103, 103, 0.1)"
            }}>
                <button onClick={() => window.location.href = "/"} style={{
                    background: "#ffffffc7",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: "20px"
                }}>
                    ← Back to Home
                </button>
                
                <h4 style={{
                    color: "white",
                    fontSize: "24px",
                    marginBottom: "20px"
                }}>𐙚  Welcome to Alina's Page ‧₊˚ ⋅</h4>
                
                <div style={{ textAlign: "center" }}>
                    <h2 style={{
                        color: "white",
                        marginBottom: "20px"
                    }}>CSCI 329 / STAT 329 - Big Data Analytics</h2>

                    <h3 style={{
                        color: "white",
                        marginTop: "30px"
                    }}>Course Overview</h3>
                    
                    <p style={{
                        color: "black",
                        lineHeight: "1.6",
                        background: "#ffffffc7",
                        padding: "20px",
                        borderRadius: "20px",
                        textAlign: "center"
                    }}>
                        Machine learning is a sub-field of Artificial Intelligence that allows computers to
                        learn and/or act without being explicitly programmed. 
                        <p>This course introduces
                        machine learning principles and provides foundations on a data-driven approach
                        for machine intelligence and decision making. The topics include variously
                        supervised, unsupervised learning approaches (including deep learning),
                        optimization procedures, and statistical inference.</p>
                        
                    </p>

                    <h3 style={{
                        color: "white",
                        marginTop: "30px"
                    }}>Before Midterm</h3>

                    <ul style={{
                        display: "inline-block",
                        textAlign: "left",
                        listStyleType: "none",
                        padding: "20px",
                        background: "#ffffffc7",
                        borderRadius: "20px",
                        textAlign: "center"
                        
                    }}>
                        <div style={{ marginBottom: "20px" }}>
                            <h4>⋆˚ Week 1: Intro to Data Science ꩜｡</h4>
                            <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/9R3X0JoCLyU?si=yVZ8i-TB6vJGO7Ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <h4>₊˚Week 2: Algebra, Calculus, Probability Review ⊹ ᰔ</h4>
                            <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/stQR4j7Tctg?si=oSJo-41Yx09jdETm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        
                        </div>                        

                        <div style={{ marginBottom: "20px" }}>
                            <h4>‧₊˚♪ Week 3: Statistics Review, Python, Jupyter 𝄞₊˚⊹</h4>
                            <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/Gx5qb1uHss4?si=cal70kzo43XU0OMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        
                        </div>                        
                        
                        <div style={{ marginBottom: "20px" }}>
                            <h4>⤷ ゛Week 4: Hypothesis Testing, T-tests ˎˊ˗</h4>
                            <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/2ARvj-8tJBs?si=hMOskXCrUkVkc6ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <h4>𓆝 𓆟 Week 5: ANOVA, Supervised Learning 𓆞 𓆝 𓆟</h4>
                            <iframe style={{ borderRadius: "10px" }} width="400" height="215"src="https://www.youtube.com/embed/oOuu8IBd-yo?si=RVj1FksFtUL2VVGi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <h4>⋆⭒˚.⋆ Week 6: Linear Regression, Gradient Descent ♡ˎˊ˗ </h4>
                            <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/sDv4f4s2SB8?si=J5XDoheKYlv0IijQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        </div>   
                       
                        <div style={{ marginBottom: "20px" }}>
                            <h4>૮꒰ ˶• ༝ •˶꒱ აWeek 7: ML Evaluation, Logistic Regression ♡</h4>
                            <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/EKm0spFxFG4?si=OuZ7lFWdDClITXxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <h4>⋆⭒ Week 8: Classification Metrics and Midterm Exam ˚.⋆</h4>
                            <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/LbX4X71-TFI?si=YHMo8ZkeYWyAJPvW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        </div>                        

                    </ul>

                    <h3 style={{
                        color: "white",
                        marginTop: "30px"
                    }}>After Midterm</h3>
                    
                    <ul style={{
                        display: "inline-block",
                        textAlign: "left",
                        listStyleType: "none",
                        padding: "20px",
                        background: "#ffffffc7",
                        borderRadius: "20px",
                        textAlign: "center"

                    }}>

                    <div style={{ marginBottom: "20px" }}>
                        <h4>⋆⭒ Week 9: No Class - Spring Break ˚.⋆</h4>
                        <h4> ⇢ ˗ˏˋ Week 10: Naive Bayes, Project Proposal Due  ࿐ྂ</h4>
                        <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/lJGHZO0rqs0?si=eT6lJxNjULRe-I0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <h4>୨⎯ Week 11: Dimension Reduction ⎯୧</h4>
                        <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/ZgyY3JuGQY8?si=rMvgrC8p8iPcxas6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                                       
                    <div style={{ marginBottom: "20px" }}>
                        <h4>+*:ꔫ Week 12: Perceptron and K-Means :*﹤ </h4>
                        <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/4b5d3muPQmA?si=ORdmy22spRgwHSdG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <h4>✧༺ Week 13: Support Vector Machine (SVM) ༻∞ </h4>
                        <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/ny1iZ5A8ilA?si=_mFA7OiKLNZBJ1sx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <h4>✺✳ ┅ Week 14: Tensors and Pytorch  ┅ ✳✺</h4>
                        <iframe style={{ borderRadius: "10px" }} width="400" height="215" src="https://www.youtube.com/embed/2yBEZzQu8dA?si=F8oXfuB7wep4PHcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                                       
                    </ul>

                    <div style={{
                        display: "inline-block",
                        textAlign: "left",
                        listStyleType: "none",
                        padding: "20px",
                        background: "#ffffffc7", 
                        borderRadius: "20px",
                        textAlign: "center",
                        marginTop: "20px",
                        width: "100%"
                    }}>
                        <h4>┊ ➶ ｡˚ Week 15-16: Final Project Presentations °</h4>
                        <img 
                            src={projectalina} 
                            alt="Project Alina"
                            style={{
                                maxWidth: "70%",
                                height: "auto",
                                marginTop: "20px",
                                borderRadius: "10px"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alina;