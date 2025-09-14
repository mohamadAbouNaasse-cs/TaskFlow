function Home() {
    return (
        <section className="page-section">
            <h1>Welcome to Task Manager</h1>
            <p className="text-center">
                Your one-stop solution to manage and organize your tasks efficiently.
                Explore our About, Contact, and Tasks pages.
            </p>

            <div className="feature-grid">
                <div className="feature-card">
                    <h2>React Router</h2>
                    <p>
                        Navigate between pages without reloads. Enjoy a seamless single-page application experience with quick transitions between different views.
                    </p>
                </div>
                <div className="feature-card">
                    <h2>Modern UI</h2>
                    <p>
                        Clean, responsive interface that works perfectly on desktop, tablet, and mobile devices. Focus on your tasks without distractions.
                    </p>
                </div>
                <div className="feature-card">
                    <h2>Hooks</h2>
                    <p>
                        Built with React hooks including useState, useEffect, and useMemo for efficient state management and optimal performance.
                    </p>
                </div>
            </div>

            <div className="placeholder-content">
                <h2>Get Started Today</h2>
                <p>Create your first task and experience the simplicity of our task management system.</p>
                <p>Track your progress, set priorities, and stay organized with our intuitive interface.</p>
                <p>Your productivity journey starts here!</p>
            </div>
        </section>
    );
}

export default Home;