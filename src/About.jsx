function About() {
    return (
        <>
        <section className="page-section">
        <section className="max-w-3xl mx-auto px-4 py-8 space-y-3">
            <h1 className="text-2xl font-bold text-center text-green-600">About</h1>
            <p className="text-gray-700">
                This mini app is built during weekend to practice React Router,
                 Tailwind styling, and basic state management with hooks.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
                <li>React Router for pages</li>
                <li>Tailwind for UI</li>
                <li>useState/useEffect/useMemo for logic</li>
            </ul>
            </section>
            </section>
        </>
    );
}
export default About;