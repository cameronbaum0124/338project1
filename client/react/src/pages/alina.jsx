function Alina() {
    return (


        <div>
            
            <button onClick={() => window.location.href="/"}>Back to Home</button>
            <h4>Welcome to Alina's Page</h4>
            
            
            
            <div style={{ textAlign: "center"}} >
            <h2>CSCI 329 - Big Data Analytics </h2>

            <h3>Course Overview</h3>
            <p>
                Machine learning is a sub-field of Artificial Intelligence that allows computers to
                learn and/or act without being explicitly programmed. This course introduces
                machine learning principles and provides foundations on a data-driven approach
                for machine intelligence and decision making. The topics include variously
                supervised, unsupervised learning approaches (including deep learning),
                optimization procedures, and statistical inference.
            </p>

            <h3>Before Midterm</h3>

            <ul style={{ display: "inline-block", textAlign: "left", listStyleType: "none"}}>
                <li>
                    Week 1: Intro to Data Science</li>
                <li>
                    Week 2: Algebra, Calculus, Probability Review</li>
                <li>
                    Week 3: Statistics Review, Python, Jupyter</li>
                <li>
                    Week 4: Hypothesis Testing, T-tests</li>
                <li>
                    Week 5: ANOVA, Supervised Learning</li>
                <li>
                    Week 6: Linear Regression, Gradient Descent</li>
                <li>
                    Week 7: ML Evaluation, Logistic Regression</li>
                <li>
                    Week 8: Classification Metrics and Midterm Exam</li>
            </ul>

            <h3>After Midterm</h3>
            <ul style={{ display: "inline-block", textAlign: "left", listStyleType: "none"}}>
                <li>Week 10: Naive Bayes, Project Proposal Due</li>
                <li>Week 11: Dimension Reduction</li>
                <li>Week 12: Perceptron and Neural Networks</li>
                <li>Week 13: Support Vector Machine (SVM)</li>
                <li>Week 14: K-Means Clustering</li>
                <li>Week 15-16: Final Project Presentations</li>
            </ul>
            </div>
        </div>
    );
}

export default Alina;